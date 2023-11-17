using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kodikos.Models.Dtos.Employee;

namespace Kodikos.Models.Dtos.Issue
{
    public class IssueReadDto
    {

        required public int IssueId { get; set; }
        required public int? WriterId { get; set; }
        public EmployeeReadDto Writer { get; set; } = null!;
        required public string Title { get; set; }
        required public string Body { get; set; }


    }
}
