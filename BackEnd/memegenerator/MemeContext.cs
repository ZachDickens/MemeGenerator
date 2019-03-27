using memegenerator.Model;
using Microsoft.EntityFrameworkCore;

namespace memegenerator
{
    public class MemeContext : DbContext
    {                
            public DbSet<Meme> Memes { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                var connectionString = "Server=(localdb)\\mssqllocaldb;Database=memegenerator;Trusted_Connection=True;";

                optionsBuilder.UseSqlServer(connectionString)
                              .UseLazyLoadingProxies();

                base.OnConfiguring(optionsBuilder);
            }
        }
}
