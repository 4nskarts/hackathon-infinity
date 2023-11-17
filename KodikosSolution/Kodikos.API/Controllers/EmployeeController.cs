using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Employee;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Cryptography;
using static Kodikos.API.Controllers.EmployeeController;

namespace Kodikos.API.Controllers
{
    [Route("infinity/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IEmployeeRepository employeeRepository;
        private readonly ICompanyRepository companyRepository;
        public EmployeeController(IConfiguration configuration, IEmployeeRepository employeeRepository, ICompanyRepository companyRepository)
        {
            this.configuration = configuration;
            this.employeeRepository = employeeRepository;
            this.passwordHashService = new PasswordHashService(configuration.GetSection("Jwt:Key").Value!);
            this.companyRepository = companyRepository;
        }

        PasswordHashService passwordHashService { get; set; }

        [HttpGet("{companyeeId}")]
        public async Task<ActionResult<IEnumerable<EmployeeReadDto>>> GetAllEmployees(int companyeeId)
        {

            Company? company = await companyRepository.GetCompany(companyeeId);

            if(company == null)
            {
                return BadRequest("Company Does not exist");
            }

            return Ok (await this.employeeRepository.GetEmployees(companyeeId));

        }

        [HttpPost("register")]
        public async Task<ActionResult<EmployeeReadDto>> Register([FromBody] EmployeeRegisterDto registerEmployee)
        {

            registerEmployee.Password = passwordHashService.HashPassword(registerEmployee.Password);

            Employee? employee = await this.employeeRepository.AddEmployee( registerEmployee.ToEntity() );

            if(employee == null )
            {
                return BadRequest("Failed to register employee");
            }

            return Ok(employee.ToReadDto());
        }

        [HttpPost("login")]

        public async Task<ActionResult<EmployeeReadDto>> Login([FromBody] EmployeeLoginDto loginEmployee)
        {
            Employee? employee = await this.employeeRepository.GetEmployee(loginEmployee.Email);
            
            if(employee == null)
            {
                return NotFound("User Not Found");
            }

            if(!passwordHashService.VerifyPassword(employee, loginEmployee.Password))
            {
                return BadRequest("Wrong Password");
            }

            string token = GenerateJwtToken(employee);// Token -> Cancel auth

            return Ok (employee.ToReadDto());
        }

        private string GenerateJwtToken(Employee employee)
        {
            try
            {
                var claims1 = new List<Claim>
                {
                    new Claim(ClaimTypes.NameIdentifier, employee.EmployeeId.ToString()),
                    new Claim(ClaimTypes.Name, $"{employee.FirstName} {employee.LastName}"),
                    new Claim(ClaimTypes.Role, employee.IsAdmin.GetValueOrDefault() ? "Admin" : "User"),
                    // You can add more claims as needed
                };

                var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["Jwt:Key"]));
                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: configuration["Jwt:Issuer"],
                    audience: configuration["Jwt:Audience"],
                    claims: claims1,
                    expires: DateTime.Now.AddMinutes(30), // Token expiration time
                    signingCredentials: creds
                );


                return new JwtSecurityTokenHandler().WriteToken(token);
            }
            catch (Exception ex)
            {
                // Log or print the exception for debugging
                Console.WriteLine($"Error generating JWT token: {ex.Message}");
                throw;
            }
        }

        public class PasswordHashService
        {
            private readonly string _secretKey;
            public PasswordHashService(string secretKey)
            {
                this._secretKey = secretKey;
            }
            public string HashPassword(string password)
            {
                // Convert the secret key to a byte array
                byte[] keyBytes = Convert.FromBase64String(_secretKey);

                // Convert the password to a byte array
                byte[] passwordBytes = System.Text.Encoding.UTF8.GetBytes(password);

                // Use HMAC-SHA256 to compute the hash
                using (var hmac = new HMACSHA256(keyBytes))
                {
                    byte[] hashedBytes = hmac.ComputeHash(passwordBytes);
                    string hashedPassword = Convert.ToBase64String(hashedBytes);
                    return hashedPassword;
                }
            }
            public bool VerifyPassword(Employee employee, string password)
            {
                // Decode the stored hash from Base64
                byte[] storedHashBytes = Convert.FromBase64String(employee.HashedPassword);

                // Compute the hash for the entered password
                string enteredPasswordHash = HashPassword(password);
                byte[] enteredHashBytes = Convert.FromBase64String(enteredPasswordHash);

                // Compare the computed hash with the stored hash
                for (int i = 0; i < storedHashBytes.Length; i++)
                {
                    if (storedHashBytes[i] != enteredHashBytes[i])
                    {
                        return false;
                    }
                }

                return true;
            }
        }
    }

}


