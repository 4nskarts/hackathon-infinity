using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IIssueRepository
    {
        Task<Issue?> ReadIssue(int id);

        Task<Issue?> AddIssue(Issue issue);

        Task<Issue?> UpdateIssue(Issue issue);

        Task<bool> DeleteIssue(int id);   
    }
}
