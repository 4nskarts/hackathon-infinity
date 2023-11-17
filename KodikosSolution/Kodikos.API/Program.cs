using Kodikos.API.Data;
using Kodikos.API.Repositories.Implimentations;
using Kodikos.API.Repositories.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<KodikosDbContext>();
builder.Services.AddScoped< IEmployeeRepository , EmployeeRepository >();
builder.Services.AddScoped< IBlogRepository     , BlogRepository     >();
builder.Services.AddScoped< IIssueRepository    , IssueRepository    >();

var app = builder.Build();


app.UseSwagger();
app.UseSwaggerUI();


app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
