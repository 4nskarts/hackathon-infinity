using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Issue;

namespace Kodikos.API.Extentions
{
    public static class TagsExtentions
    {
        public static IEnumerable<string> GetIssueTags(this IEnumerable<Tag> Tags, IEnumerable<IssuesHasTag> issuesHasTags, int issueId)
        {

            return from t in Tags join i in from iht in issuesHasTags where iht.IssueId == issueId select iht on t.TagId equals i.TagId select t.Name;
        }
    }
}
