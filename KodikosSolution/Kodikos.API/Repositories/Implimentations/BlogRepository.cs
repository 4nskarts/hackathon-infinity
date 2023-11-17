using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.AspNetCore.Server.IIS.Core;
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

        public async Task<bool> DeleteBlog(int blogid)
        {
            Blog? blog = await dbContext.Blogs.FirstOrDefaultAsync();
            this.dbContext.Blogs.Remove(blog);
            await this.dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<bool> DeleteBlogsOfIssue(int issueid)
        {

            IEnumerable< Blog > blogsToRemoved = this.dbContext.Blogs.Where(b => b.IssueId == issueid);
            this.dbContext.Blogs.RemoveRange(blogsToRemoved);
            await this.dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<Blog?> ReadBlog(int id)
        {
            return await this.dbContext.Blogs.Where(b=>b.BlogId == id).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<Blog>> CreatBlogsOfEmployee(int employeeId)
        {
            return await this.dbContext.Blogs.Where(b => b.WriterId == employeeId).ToListAsync();
        }

        public async Task<IEnumerable<Blog>> CreatBlogsOfIssue(int issueId)
        {
            return await this.dbContext.Blogs.Where(b => b.IssueId == issueId).ToListAsync();
        }

        public async Task<Blog> CreatBlog(Blog blog)
        {
            Blog b = (await this.dbContext.Blogs.AddAsync(blog)).Entity;

            await this.dbContext.SaveChangesAsync();

            return b;
        }
    }
}
