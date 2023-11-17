using Kodikos.Models.Dtos.Employee;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kodikos.Models.Dtos.Blog
{
    public class BlogCreatDto
    {

        required public int WriterId { get; set; }
        required public int IssueId { get; set; }
        required public string Body { get; set; } = string.Empty;

    }
}
