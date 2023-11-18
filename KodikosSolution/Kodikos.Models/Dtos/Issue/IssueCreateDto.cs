using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kodikos.Models.Dtos.Issue
{
    public class IssueCreateDto
    {
        public int WriterId { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Body { get; set; } = string.Empty!;

        private List<string> Tags { get; set; } = new List<string>();

    }
}
