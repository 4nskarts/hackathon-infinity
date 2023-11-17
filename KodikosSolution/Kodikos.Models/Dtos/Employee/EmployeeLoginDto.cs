using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kodikos.Models.Dtos.Employee
{
    public class EmployeeLoginDto
    {
        public string Email { get; set; } = string.Empty;

        [MinLength(8),MaxLength(20)]
        public string Password { get; set; } = string.Empty;
    }
}
