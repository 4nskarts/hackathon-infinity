using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Repositories.Implimentations
{
    public class IssueRepository : IIssueRepository
    {
        private readonly KodikosDbContext dbContext;
        public IssueRepository(KodikosDbContext dbContext)
        {
            this.dbContext = dbContext;            
        }
        public async Task<Issue?> GetIssue(int id)
        {
            return await this.dbContext.Issues.Where(i=>i.IssueId == id).FirstOrDefaultAsync();
        }
    }
}
