using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Employee;

namespace Kodikos.API.Extentions
{
    public static class EmployeeExtentions
    {

        public static EmployeeReadDto ToDto(this Employee employee)
        {
            return new EmployeeReadDto()
            {
                EmployeeId = employee.EmployeeId,
                CompanyId = employee.CompanyId,
                Email = employee.Email,
                FirstName = employee.FirstName,
                LastName = employee.LastName,
                IsAdmin = employee.IsAdmin,
                Phone = employee.Phone,
            };
        }

    }
}
