using Kodikos.API.Entities;
using Kodikos.API.Extentions;
using Kodikos.API.Repositories.Interfaces;
using Kodikos.Models.Dtos.Blog;
using Kodikos.Models.Dtos.Issue;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Kodikos.API.Extentions;
using Kodikos.Models.Dtos.Tag;
using System.ComponentModel.Design;
using System.Collections.Generic;
using System.Collections;

namespace Kodikos.API.Controllers
{
    [Route("infinity/[controller]")]
    [ApiController]
    public class IssueController : ControllerBase
    {

        readonly IEmployeeRepository employeeRepository;
        readonly IBlogRepository blogRepository;
        readonly IIssueRepository issueRepository;
        readonly ITagRepository tagRepository;

        public IssueController(IEmployeeRepository employeeRepository, IBlogRepository blogRepository, IIssueRepository issueRepository, ITagRepository tagRepository)
        {
            this.employeeRepository = employeeRepository;
            this.blogRepository = blogRepository;
            this.issueRepository = issueRepository;
            this.tagRepository = tagRepository;
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

            var issueReadDto = issue.ToDto(employee);

            IEnumerable<Tag> tagsList = await this.tagRepository.GetTags();

            IEnumerable<string> tagsListAsStrings =  tagsList.GetIssueTags(await this.tagRepository.GetIssuesHasTags(), issueReadDto.IssueId);

            issueReadDto.Tags = tagsListAsStrings.ToList();

            //issueReadDto.Tags = (await this.tagRepository.GetTags()).GetIssueTags(await this.tagRepository.GetIssuesHasTags(),issueReadDto.IssueId).ToList();

            return Ok(issueReadDto);
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

            IssueReadDto readDto = issue.ToDto(employee);
            //readDto.Tags = issueUpdateDto.Tags;

            return Ok(readDto);
        }

        [HttpPut]
        public async Task<ActionResult<IssueReadDto>> UpdateIssue([FromBody] IssueUpdateDto issueUpdateDto)
        {
            Issue? issue = (await issueRepository.UpdateIssue(issueUpdateDto.ToEntity()));

            if (issue == null) { return BadRequest("This Should not happen"); }


            Employee? employee = await this.employeeRepository.GetEmployee(issue.WriterId.GetValueOrDefault());

            IssueReadDto readDto = issue.ToDto(employee);
            //readDto.Tags = issueUpdateDto.Tags;

            return Ok( readDto );
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
                        if (body_word.Contains(pattern_word))
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
                        if (title_word.Contains(pattern_word))
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

        [HttpPost("{companyId}/Tags")]
        public async Task<IEnumerable<IssueReadDto>> SearchByTags(int companyId,[FromBody] TagSearchList tagList)
        {
            IEnumerable<Issue> issues = (await GetAllIssues(companyId)).Value;
            var issueAsDto = issues.ToDto(await this.employeeRepository.GetEmployees(companyId));

            List<IssueReadDto> result = new List<IssueReadDto>();

            foreach(IssueReadDto issue in issueAsDto)
            {
                if (AllTagsExist(issue))
                {
                    result.Add(issue);
                }
            }

            return issueAsDto;


            bool AllTagsExist(IssueReadDto issueReadDto)
            {
                int Counter = 0;

                foreach(string tag1 in tagList.Tags)
                {
                    foreach(string tag2 in issueReadDto.Tags)
                    {
                        if (tag1==tag2)
                        {
                            Counter++;
                            break;
                        }
                    }
                }

                if(Counter == tagList.Tags.Count)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }
        }
        
    }
}
