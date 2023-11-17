using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Repositories.Implimentations
{
    public class CompanyRepository : ICompanyRepository
    {
        private readonly KodikosDbContext dbContext;

        public CompanyRepository(KodikosDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<Company?> GetCompany(int companyid)
        {
            List<Company> companees = await this.dbContext.Companies.Where(c=>c.CompanyId == companyid).ToListAsync();

            if(companees.Count == 0)
            {
                return null;
            }

            return companees.First();
        }
    }
}
