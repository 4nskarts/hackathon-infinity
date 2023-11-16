using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IBlogRepository
    {



        Task<Blog?> GetBlog(int id);
        Task<IEnumerable<Blog>> GetBlogsForEmployee(int employeeId);
        Task<IEnumerable<Blog>> GetBlogsForIssue(int issueId);

    }
}
