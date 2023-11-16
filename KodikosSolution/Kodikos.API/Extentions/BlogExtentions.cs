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
            };
        }

    }
}
