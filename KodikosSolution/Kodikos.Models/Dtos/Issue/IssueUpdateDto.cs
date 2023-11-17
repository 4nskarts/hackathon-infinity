using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kodikos.Models.Dtos.Issue
{
    public class IssueUpdateDto
    {

        public int IssueId { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Body { get; set; } = string.Empty;


    }
}
