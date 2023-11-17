using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Blog;
using Kodikos.Models.Dtos.Issue;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Kodikos.API.Controllers
{
    [Route("infinity/[controller]")]
    [ApiController]
    public class BlogController : ControllerBase
    {
        readonly IEmployeeRepository employeeRepository;
        readonly IBlogRepository blogRepository;
        readonly IIssueRepository issueRepository;
        public BlogController(IEmployeeRepository employeeRepository, IBlogRepository blogRepository, IIssueRepository issueRepository)
        {
            this.employeeRepository = employeeRepository;
            this.blogRepository = blogRepository;
            this.issueRepository = issueRepository;

        }

        [HttpGet("{blogId}")]
        public async Task<ActionResult<BlogReadDto>> GetBlog(int blogId)
        {
            Blog? blog = await this.blogRepository.GetBlog(blogId);

            if (blog == null)
            {
                return NotFound($"Blog with id : [{blogId}] is Not Found");
            }

            Employee? employee = await this.employeeRepository.GetEmployee(blog.WriterId.GetValueOrDefault());

            if (employee == null)
            {
                return BadRequest("Failed To Find the blog writer");
            }

            return Ok(blog.ToDto(employee));
        }

        

    }
}
