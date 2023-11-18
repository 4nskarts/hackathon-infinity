using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Issue;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IIssueRepository
    {
        Task<Issue?> ReadIssue(int id);
        Task<IEnumerable< IssueReadDto >> ReadCompanyIssues(int companyid);

        Task<Issue?> AddIssue(Issue issue);

        Task<Issue?> UpdateIssue(Issue issue);

        Task<bool> DeleteIssue(int id);   


    }
}
