using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface ITagRepository
    {


        Task<IEnumerable<Tag>> GetTags();
        Task<IEnumerable<IssuesHasTag>> GetIssuesHasTags();

    }
}
