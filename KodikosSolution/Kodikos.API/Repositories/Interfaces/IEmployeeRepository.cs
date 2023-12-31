﻿using Kodikos.API.Entities;

namespace Kodikos.API.Repositories.Interfaces
{
    public interface IEmployeeRepository
    {

        Task<Employee?> GetEmployee(int Id);

        Task<Employee?> GetEmployee(string email);

        Task<IEnumerable<Employee>> GetEmployees(int companyId);

        Task<Employee?> AddEmployee(Employee employee);

    }
}
