using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IBlogRepository
    {



        Task<Blog?> ReadBlog(int id);
        Task<IEnumerable<Blog>> CreatBlogsOfEmployee(int employeeId);
        Task<IEnumerable<Blog>> CreatBlogsOfIssue(int issueId);

        Task<bool> DeleteBlog(int blogid);
        Task<bool> DeleteBlogsOfIssue(int issueid);

        /// <summary>
        /// Insert blog to the database
        /// </summary>
        /// <param name="blog">object contain blog info without Primary Key</param>
        /// <returns>the new created blog</returns>
        Task<Blog> CreatBlog(Blog blog);


    }
}
