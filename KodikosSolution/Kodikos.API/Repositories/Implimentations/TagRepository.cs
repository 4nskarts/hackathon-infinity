using Kodikos.API.Data;
using Kodikos.API.Entities;
using Kodikos.API.Repositories.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Kodikos.API.Repositories.Implimentations
{
    public class TagRepository : ITagRepository
    {
        private readonly KodikosDbContext dbContext;
        public TagRepository(KodikosDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public async Task<IEnumerable<IssuesHasTag>> GetIssuesHasTags()
        {
            return await this.dbContext.IssuesHasTags.ToListAsync();
        }

        public async Task<IEnumerable<Tag>> GetTags()
        {
            return await this.dbContext.Tags.ToListAsync();
        }
    }
}
