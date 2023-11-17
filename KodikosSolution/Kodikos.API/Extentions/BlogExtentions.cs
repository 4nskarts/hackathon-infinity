using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Blog;

namespace Kodikos.API.Extentions
{
    public static class BlogExtentions
    {

        public static BlogReadDto ToDto(this Blog blog,Employee employee)
        {
            return new BlogReadDto()
            {
                WriterId = blog.WriterId.GetValueOrDefault(),
                BlogId = blog.BlogId,
                Body = blog.Body,
                Writer = employee.ToDto(),
                PublishTime = blog.PublishTime.GetValueOrDefault(),
            };
        }

        public static IEnumerable<BlogReadDto> ToDto(this IEnumerable<Blog> blogs, IEnumerable<Employee> employees)
        {
            return from b in blogs
                   join e in employees
                   on b.WriterId equals e.EmployeeId
                   select new BlogReadDto()
                   {
                       BlogId = b.BlogId,
                       WriterId = b.WriterId.GetValueOrDefault(),
                       Body = b.Body,
                       Writer = e.ToDto(),
                       PublishTime = b.PublishTime.GetValueOrDefault(),
                   };
        }


    }
}
