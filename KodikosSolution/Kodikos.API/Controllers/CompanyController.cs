using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Employee;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kodikos.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        private readonly KodikosDbContext dbContext;
        public CompanyController(KodikosDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        //[HttpPost("login")]

        //public async Task<ActionResult<Company>> LoginAsCompany([FromBody] string companyName, [FromBody] EmployeeLoginDto admin)
        //{
        //    return null; 
        //}
    }
}
