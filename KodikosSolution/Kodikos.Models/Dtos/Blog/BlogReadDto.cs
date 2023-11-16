using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Kodikos.Models.Dtos.Employee;

namespace Kodikos.Models.Dtos.Blog
{
    public class BlogReadDto
    {       
        required public int BlogId { get; set; }

        required public int WriterId { get; set; }

        public EmployeeReadDto Writer { get; set; } = null!;

        required public string Body { get; set; } = null!;

    }
}
