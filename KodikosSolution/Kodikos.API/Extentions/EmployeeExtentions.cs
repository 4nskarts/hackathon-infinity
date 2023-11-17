using Kodikos.API.Entities;
using Kodikos.Models.Dtos.Employee;

namespace Kodikos.API.Extentions
{
    public static class EmployeeExtentions
    {

        public static EmployeeReadDto ToReadDto(this Employee employee)
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

        public static Employee ToEntity(this EmployeeRegisterDto registerDto)
        {
            return new Employee()
            {
                FirstName = registerDto.FirstName,
                LastName = registerDto.LastName,
                CompanyId = registerDto.CompanyId,
                Email = registerDto.Email,
                IsAdmin = registerDto.IsAdmin,
                HashedPassword = registerDto.Password,
                Phone = registerDto.Phone
            };
        }

    }
}
