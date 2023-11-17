using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Issue;

namespace Kodikos.API.Extentions
{
    public static class IssueExtentions
    {

        public static IssueReadDto toDto(this Issue issue,Employee writer)
        {
            return new IssueReadDto()
            {
                Body = issue.Body,
                WriterId = issue.WriterId,
                IssueId = issue.IssueId,
                Title = issue.Title,
                Writer = writer.ToReadDto(),
                PublishTime = issue.PublishTime.GetValueOrDefault(),
            };
        }

    }
}
