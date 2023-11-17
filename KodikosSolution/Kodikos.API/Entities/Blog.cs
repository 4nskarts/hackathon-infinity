using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

public partial class Blog
{
    [Key]
    [Column("Blog_Id")]
    public int BlogId { get; set; }

    [Column("Writer_Id")]
    public int? WriterId { get; set; }

    [Column("Issue_Id")]
    public int? IssueId { get; set; }

    [StringLength(4000)]
    public string Body { get; set; } = null!;

    [Column(TypeName = "datetime")]
    public DateTime? PublishTime { get; set; }

    [ForeignKey("IssueId")]
    [InverseProperty("Blogs")]
    public virtual Issue? Issue { get; set; }

    [ForeignKey("WriterId")]
    [InverseProperty("Blogs")]
    public virtual Employee? Writer { get; set; }
}
