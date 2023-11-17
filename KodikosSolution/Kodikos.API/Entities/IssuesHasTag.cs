using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

public partial class IssuesHasTag
{
    [Key]
    [Column("IssueHasTag_Id")]
    public int IssueHasTagId { get; set; }

    [Column("Issue_Id")]
    public int? IssueId { get; set; }

    [Column("Tag_Id")]
    public int? TagId { get; set; }

    [ForeignKey("IssueId")]
    [InverseProperty("IssuesHasTags")]
    public virtual Issue? Issue { get; set; }

    [ForeignKey("TagId")]
    [InverseProperty("IssuesHasTags")]
    public virtual Tag? Tag { get; set; }
}
