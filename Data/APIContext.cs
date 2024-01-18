using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using MovieAPI.Models;
using System.Data;

namespace MovieAPI.Data
{

    public class APIContext : DbContext
    {
        public DbSet<MovieEntry> MovieEntries { get; set; } 
        public APIContext(DbContextOptions<APIContext> options) : base(options) { }
    }
}
