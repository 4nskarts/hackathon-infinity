using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Kodikos.API.Entities;

namespace Kodikos.API.Data;

public partial class KodikosDbContext : DbContext
{
    public KodikosDbContext()
    {
    }

    public KodikosDbContext(DbContextOptions<KodikosDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Blog> Blogs { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Employee> Employees { get; set; }

    public virtual DbSet<Issue> Issues { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseSqlServer("Data Source = .; Initial Catalog = KodikosDB; User Id = sa; Password=sa123456; Trusted_Connection=true;Encrypt=false;");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Blog>(entity =>
        {
            entity.HasKey(e => e.BlogId).HasName("PK__Blogs__C164D0384FD36975");

            entity.HasOne(d => d.Issue).WithMany(p => p.Blogs).HasConstraintName("FK__Blogs__Issue_Id__412EB0B6");

            entity.HasOne(d => d.Writer).WithMany(p => p.Blogs).HasConstraintName("FK__Blogs__Writer_Id__403A8C7D");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.HasKey(e => e.CompanyId).HasName("PK__Companie__5F5D1912DDE76B9C");
        });

        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.EmployeeId).HasName("PK__Employee__781134A1B038515C");

            entity.HasOne(d => d.Company).WithMany(p => p.Employees).HasConstraintName("FK__Employees__Compa__3A81B327");
        });

        modelBuilder.Entity<Issue>(entity =>
        {
            entity.HasKey(e => e.IssueId).HasName("PK__Issues__B29F2BB87894A423");

            entity.HasOne(d => d.Writer).WithMany(p => p.Issues).HasConstraintName("FK__Issues__Writer_I__3D5E1FD2");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
