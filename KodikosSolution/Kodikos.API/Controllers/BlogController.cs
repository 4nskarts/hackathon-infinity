using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Blog;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kodikos.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        readonly IEmployeeRepository employeeRepository;
        readonly IBlogRepository blogRepository;
        public BlogController(IEmployeeRepository employeeRepository, IBlogRepository blogRepository)
        {
            this.employeeRepository = employeeRepository;
            this.blogRepository = blogRepository;
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<BlogReadDto>> GetBlog(int id)
        {
            Blog? blog = await this.blogRepository.GetBlog(id);

            if(blog == null)
            {
                return NotFound($"Blog with id : [{id}] is Not Found");
            }

            Employee? employee = await this.employeeRepository.GetEmployee(blog.WriterId.GetValueOrDefault());

            if(employee == null)
            {
                return BadRequest("Failed To Find the blog writer");
            }

            return Ok( blog.ToDto(employee) );
        }



    }
}
