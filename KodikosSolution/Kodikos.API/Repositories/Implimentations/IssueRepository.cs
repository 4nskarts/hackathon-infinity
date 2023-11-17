using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Extentions;
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

        public async Task<Issue?> AddIssue(Issue issue)
        {
          
            return (await this.dbContext.Issues.AddAsync(issue)).Entity;

        }

        public async Task<Issue?> UpdateIssue(Issue? issue)
        {
            issue = await this.dbContext.Issues.Where(i => i.IssueId == issue.IssueId).FirstOrDefaultAsync();

            this.dbContext.Issues.Update(issue);

            Issue UpdatedIssue = await this.dbContext.Issues.Where(i => i.IssueId == issue.IssueId).FirstOrDefaultAsync();

            Employee? employee =await  dbContext.Employees.Where(e => e.EmployeeId == UpdatedIssue.IssueId).FirstOrDefaultAsync();

            return UpdatedIssue;
        }
    }
}
