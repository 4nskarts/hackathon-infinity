using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Blog;
using Kodikos.Models.Dtos.Issue;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Kodikos.API.Controllers
{
    [Route("infinity/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {

        readonly IEmployeeRepository employeeRepository;
        readonly IBlogRepository blogRepository;
        readonly IIssueRepository issueRepository;

        public IssueController(IEmployeeRepository employeeRepository, IBlogRepository blogRepository, IIssueRepository issueRepository)
        {
            this.employeeRepository = employeeRepository;
            this.blogRepository = blogRepository;
            this.issueRepository = issueRepository;

        }

        [HttpGet("{issueId}")]

        public async Task<ActionResult<IssueReadDto>> GetIssue(int issueId)
        {
            Issue? issue = await this.issueRepository.ReadIssue(issueId);

            if (issue == null)
            {
                return NotFound("Issue Not Found");
            }

            Employee? employee = await this.employeeRepository.GetEmployee(issue.WriterId.GetValueOrDefault());

            if (employee == null)
            {
                return BadRequest("Can not found the issue writer");
            }

            return Ok(issue.ToDto(employee));
        }

        [HttpGet("{issueId}/blogs")]

        public async Task<ActionResult<IEnumerable<BlogReadDto>>> GetBlogsOfIssue(int issueId)
        {
            Issue? issue = await this.issueRepository.ReadIssue(issueId);

            if (issue == null)
            {
                return BadRequest("Issue Not Found");
            }

            IEnumerable<Blog> blogs = await this.blogRepository.CreatBlogsOfIssue(issueId);

            if (blogs == null || blogs.Count() == 0)
            {
                return Ok(new List<BlogReadDto>());
            }

            Employee? employee = await this.employeeRepository.GetEmployee(issue.WriterId.GetValueOrDefault());

            if (employee == null)
            {
                return BadRequest("Faied to find the issue writer");
            }

            IEnumerable<Employee> employees = await this.employeeRepository.GetEmployees(employee.CompanyId.GetValueOrDefault());

            IssueReadDto issueReadDto = issue.ToDto(employee);


            IEnumerable<BlogReadDto> blogsReadDto = blogs.ToDto(employees);

            return Ok(blogsReadDto);
        }

        [HttpPost]
        public async Task<ActionResult<IssueReadDto>> AddIssue([FromBody] IssueCreateDto issueCreateDto)
        {
            Issue? issue = (await issueRepository.AddIssue(issueCreateDto.ToEntity()));

            if (issue == null) { return BadRequest("This Should not happen"); }

            Employee? employee = await this.employeeRepository.GetEmployee(issue.WriterId.GetValueOrDefault());


            return Ok(issue.ToDto(employee));
        }

        [HttpPut]
        public async Task<ActionResult<IssueReadDto>> UpdateIssue([FromBody] IssueUpdateDto issueCreateDto)
        {
            Issue? issue = (await issueRepository.UpdateIssue(issueCreateDto.ToEntity()));

            if (issue == null) { return BadRequest("This Should not happen"); }


            Employee? employee = await this.employeeRepository.GetEmployee(issue.WriterId.GetValueOrDefault());

            return Ok(issue.ToDto(employee));
        }

        [HttpDelete("{issueId}")]

        public async Task<ActionResult> DeleteIssue(int issueId)
        {
            await this.blogRepository.DeleteBlogsOfIssue(issueId);

            if(await this.issueRepository.DeleteIssue(issueId))
            {
                return Ok("Deleted Successfuly");
            }

            return BadRequest("Something goes wrong");
        }
    }
}
