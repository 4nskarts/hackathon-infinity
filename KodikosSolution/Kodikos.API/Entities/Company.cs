using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

public partial class Company
{
    [Key]
    [Column("Company_Id")]
    public int CompanyId { get; set; }

    [StringLength(70)]
    public string Name { get; set; } = null!;

    [InverseProperty("Company")]
    public virtual ICollection<Employee> Employees { get; set; } = new List<Employee>();
}
