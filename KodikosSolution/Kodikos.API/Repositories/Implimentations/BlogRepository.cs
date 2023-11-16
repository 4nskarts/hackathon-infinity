using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Repositories.Implimentations
{
    public class BlogRepository : IBlogRepository
    {
        private readonly KodikosDbContext dbContext;
        public BlogRepository(KodikosDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<Blog?> GetBlog(int id)
        {
            return await this.dbContext.Blogs.Where(b=>b.BlogId == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Blog>> GetBlogsForEmployee(int employeeId)
        {
            return await this.dbContext.Blogs.Where(b => b.WriterId == employeeId).ToListAsync();
        }

        public async Task<IEnumerable<Blog>> GetBlogsForIssue(int issueId)
        {
            return await this.dbContext.Blogs.Where(b => b.IssueId == issueId).ToListAsync();
        }
    }
}
