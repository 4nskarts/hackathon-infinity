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

        //public static IEnumerable<IssueReadDto> ToDto(this IEnumerable<Issue> issues,IEnumerable<Employee> employees)
        //{
        //    return from issue in issues 
        //           join employee in employees
        //           on issue.WriterId equals employee.EmployeeId
        //           select new IssueReadDto()
        //    {
        //        Body = issue.Body,
        //        WriterId = issue.WriterId,
        //        IssueId = issue.IssueId,
        //        Title = issue.Title,
        //        Writer = employee.ToReadDto(),
        //        PublishTime = issue.PublishTime.GetValueOrDefault(),
        //    };
        //}

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

        public static IEnumerable<IssueReadDto> ToDto(this IEnumerable<Issue> issues,IEnumerable<Employee> employees)
        {
            return from i in issues join e in employees on i.WriterId equals e.EmployeeId select new IssueReadDto()
            {
                WriterId = i.WriterId,
                Writer = e.ToReadDto(),
                Body = i.Body!,
                IssueId = i.IssueId,
                PublishTime = i.PublishTime.GetValueOrDefault(),
                Title = i.Title,
            };
        } 
    }
}
