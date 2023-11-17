using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Kodikos.Models.Dtos.Employee
{
    public class EmployeeRegisterDto
    {
          public int CompanyId { get; set; }

        [StringLength(50)]
         public string FirstName { get; set; } = null!;

        [StringLength(50)]
          public string LastName { get; set; } = null!;

        [StringLength(255)]
          public string Email { get; set; }

        [StringLength(20)]
          public string Phone { get; set; }

          public bool IsAdmin { get; set; }

        [MinLength(8),MaxLength(20)]
          public string Password { get; set; }
    }
}
