using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

public partial class Issue
{
    [Key]
    [Column("Issue_Id")]
    public int IssueId { get; set; }

    [Column("Writer_Id")]
    public int? WriterId { get; set; }

    [StringLength(100)]
    public string Title { get; set; } = null!;

    [StringLength(1000)]
    public string? Body { get; set; }

    [InverseProperty("Issue")]
    public virtual ICollection<Blog> Blogs { get; set; } = new List<Blog>();

    [ForeignKey("WriterId")]
    [InverseProperty("Issues")]
    public virtual Employee? Writer { get; set; }
}
