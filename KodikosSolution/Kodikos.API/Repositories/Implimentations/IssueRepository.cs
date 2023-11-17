using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Issue;
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
        public async Task<Issue?> ReadIssue(int id)
        {
            return await this.dbContext.Issues.Where(i=>i.IssueId == id).FirstOrDefaultAsync();
        }

        public async Task<Issue?> AddIssue(Issue issue)
        {
          
            issue = (await this.dbContext.Issues.AddAsync(issue)).Entity;

            await this.dbContext.SaveChangesAsync();

            return issue;
        }

        public async Task<Issue?> UpdateIssue(Issue? issue)
        {
            string Title = issue.Title;
            string Body  = issue.Body;

            issue = await this.dbContext.Issues.Where(i => i.IssueId == issue.IssueId).FirstOrDefaultAsync();

            issue.Title = Title;
            issue.Body  = Body;

            this.dbContext.Issues.Update(issue);
            await this.dbContext.SaveChangesAsync();

            Issue UpdatedIssue = await this.dbContext.Issues.Where(i => i.IssueId == issue.IssueId).FirstOrDefaultAsync();

            Employee? employee =await  dbContext.Employees.Where(e => e.EmployeeId == UpdatedIssue.IssueId).FirstOrDefaultAsync();

            return UpdatedIssue;
        }

        public async Task<bool> DeleteIssue(int id)
        {

            Issue? issue = await ReadIssue(id);
            this.dbContext.Issues.Remove(issue);
            await this.dbContext.SaveChangesAsync();
            return true;
        }

        public async Task<IEnumerable<IssueReadDto>> ReadCompanyIssues(int companyId)
        {
            IEnumerable<Issue> issues = await this.dbContext.Issues.ToListAsync();
            IEnumerable<Employee> employees = await this.dbContext.Employees.Where(e=>e.CompanyId == companyId).ToListAsync();

            return (issues.ToDto(employees));
        }

        
    }
}
