using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Issue;

namespace Kodikos.API.Extentions
{
    public static class IssueExtentions
    {

        public static IssueReadDto ToDto(this Issue issue,Employee writer)
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

        public static Issue ToEntity(this IssueCreateDto issue)
        {
            return new Issue()
            {
                WriterId = issue.WriterId,
                Body = issue.Body,
                Title = issue.Title,
                PublishTime = DateTime.Now,
            };
        }

        public static Issue ToEntity(this IssueUpdateDto issue)
        {
            return new Issue()
            {
                IssueId = issue.IssueId,
                Body = issue.Body,
                Title = issue.Title,
            };
        }

    }
}
