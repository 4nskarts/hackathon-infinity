using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IBlogRepository
    {



        Task<Blog?> GetBlog(int id);
        Task<IEnumerable<Blog>> GetBlogsOfEmployee(int employeeId);
        Task<IEnumerable<Blog>> GetBlogsOfIssue(int issueId);

        Task<bool> DeleteBlog(int blogid);
        Task<bool> DeleteBlogsOfIssue(int issueid);



    }
}
