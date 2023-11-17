using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Entities;

[Index("Name", Name = "UQ__Tags__737584F6E4345B82", IsUnique = true)]
public partial class Tag
{
    [Key]
    [Column("Tag_Id")]
    public int TagId { get; set; }

    [StringLength(20)]
    public string Name { get; set; } = null!;

    [InverseProperty("Tag")]
    public virtual ICollection<IssuesHasTag> IssuesHasTags { get; set; } = new List<IssuesHasTag>();
}
