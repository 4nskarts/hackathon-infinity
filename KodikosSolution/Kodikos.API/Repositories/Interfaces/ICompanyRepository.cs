using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface ICompanyRepository
    {
        public Task<Company?> GetCompany(int id);
    }
}
