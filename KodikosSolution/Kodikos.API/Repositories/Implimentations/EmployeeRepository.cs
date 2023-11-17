using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Repositories.Implimentations
{
    public class EmployeeRepository : IEmployeeRepository
    {

        readonly KodikosDbContext dbContext;
        public EmployeeRepository(KodikosDbContext dbContext)
        { 
            this.dbContext = dbContext;
        }

        public async Task<Employee?> GetEmployee(int Id)
        {
            return await this.dbContext.Employees.Where(e=>e.EmployeeId  == Id).FirstOrDefaultAsync();
        }

        public async Task<Employee?> GetEmployee(string email)
        {
            return await this.dbContext.Employees.Where(e => e.Email == email).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Employee>> GetEmployees(int companyId)
        {
            return await this.dbContext.Employees.Where(e => e.CompanyId == companyId).ToListAsync();
        }
    }
}
