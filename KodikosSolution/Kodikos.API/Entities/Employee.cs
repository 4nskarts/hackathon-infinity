using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

[Index("Email", Name = "UQ__Employee__A9D105340BDCF1A7", IsUnique = true)]
public partial class Employee
{
    [Key]
    [Column("Employee_Id")]
    public int EmployeeId { get; set; }

    [Column("Company_Id")]
    public int? CompanyId { get; set; }

    [StringLength(50)]
    public string FirstName { get; set; } = null!;

    [StringLength(50)]
    public string LastName { get; set; } = null!;

    [StringLength(255)]
    public string? Email { get; set; }

    [StringLength(20)]
    public string? Phone { get; set; }

    public bool? IsAdmin { get; set; }

    [StringLength(100)]
    public string? HashedPassword { get; set; }

    [InverseProperty("Writer")]
    public virtual ICollection<Blog> Blogs { get; set; } = new List<Blog>();

    [ForeignKey("CompanyId")]
    [InverseProperty("Employees")]
    public virtual Company? Company { get; set; }

    [InverseProperty("Writer")]
    public virtual ICollection<Issue> Issues { get; set; } = new List<Issue>();
}
