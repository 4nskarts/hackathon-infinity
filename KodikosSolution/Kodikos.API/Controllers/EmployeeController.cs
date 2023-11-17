using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Employee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Identity.Client;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace Kodikos.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IConfiguration configuration;
        private readonly IEmployeeRepository employeeRepository;
        public EmployeeController(IConfiguration configuration,IEmployeeRepository employeeRepository)
        {
            this.configuration = configuration;
            this.employeeRepository = employeeRepository;
        }

        [HttpPost("/register")]

        public async Task<ActionResult<EmployeeReadDto>> Register([FromBody] EmployeeRegisterDto registerEmployee)
        {
            Employee? employee = await this.employeeRepository.AddEmployee( registerEmployee.ToEntity() );

            if(employee == null )
            {
                return BadRequest("Failed to register employee");
            }

            return Ok(employee.ToReadDto());
        }

        [HttpPost("/login")]

        public async Task<ActionResult<EmployeeReadDto>> Login([FromBody] EmployeeLoginDto loginEmployee)
        {
            Employee? employee = await this.employeeRepository.GetEmployee(loginEmployee.Email);
            
            if(employee == null)
            {
                return NotFound("User Not Found");
            }

            if(loginEmployee.Password != employee.HashedPassword)
            {
                return BadRequest("Wrong Password");
            }

            string token = CreateToken(employee);

            return Ok ( token );
        }

        private string CreateToken(Employee employee)
        {
            List<Claim> claims = new List<Claim>
            {

                new Claim("firstName",employee.FirstName),
                new Claim("lastName",employee.LastName),
                new Claim("email",employee.Email),
                new Claim("phone",employee.Phone),
                new Claim("companyId",employee.CompanyId.GetValueOrDefault().ToString()),
                new Claim("IsAdmin",employee.IsAdmin.ToString()),

            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(this.configuration.GetSection("AppSettings:Token").Value!) );
        
            var creds = new SigningCredentials(key,SecurityAlgorithms.HmacSha512Signature);

            var token = new JwtSecurityToken(
                    claims: claims,
                    expires: DateTime.Now.AddDays(1),
                    signingCredentials: creds

                );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);
            return jwt;

        }
    }

}
