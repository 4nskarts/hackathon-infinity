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

            if (await this.issueRepository.DeleteIssue(issueId))
            {
                return Ok("Deleted Successfuly");
            }

            return BadRequest("Something goes wrong");
        }

        [HttpGet("company/{companyId}")]

        public async Task<ActionResult<IEnumerable<Issue>>> GetAllIssues(int companyId)
        {
            return Ok (await this.issueRepository.ReadCompanyIssues(companyId) );
        }

        [HttpGet("{companyId}/{pattern}")]
        public async Task<ActionResult<IEnumerable<IssueReadDto>>> SearchPatternInIssues(int companyId,string pattern)
        {
            IEnumerable<IssueReadDto> issues =  await this.issueRepository.ReadCompanyIssues(companyId);
            IEnumerable<string> pattern_words = pattern.Split(' ');
            Dictionary<IssueReadDto, int> issuesPriority = new Dictionary<IssueReadDto, int>(); 

            foreach(IssueReadDto issue in issues)
            {
                IEnumerable<string> issue_words = issue.Title.Split(' ');
                IEnumerable<string> body_words  = issue.Body!.Split(' ');

                foreach (string pattern_word in pattern_words)
                {
                    foreach (string body_word in body_words)
                    {
                        if (body_word.IndexOf(pattern_word) != -1)
                        {
                            if (issuesPriority.ContainsKey(issue))
                            {
                                issuesPriority[issue]++;
                            }
                            else
                            {
                                issuesPriority.Add(issue,0);

                            }
                        }
                    }

                    foreach (string title_word in body_words)
                    {
                        if (title_word.IndexOf(pattern_word) != -1)
                        {
                            if (issuesPriority.ContainsKey(issue))
                            {
                                issuesPriority[issue]++;
                            }
                            else
                            {
                                issuesPriority.Add(issue, 0);

                            }
                        }
                    }
                }
            }

            var OrdredIssueList = issuesPriority.OrderByDescending(e=>e.Value).ToList();

            List<IssueReadDto> OrdredIssues = new List<IssueReadDto>();

            foreach (var i in OrdredIssueList)
            {
                OrdredIssues.Add(i.Key);
            }

            return Ok( OrdredIssues );
        }

        
    }
}
