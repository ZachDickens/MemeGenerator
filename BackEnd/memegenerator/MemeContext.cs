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

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Meme>().HasData(
                new Meme()
                {
                    Id = 1,
                    CurrentImage = "/images/LordOfRings.png",
                    CurrentTopText = "ONE DOES NOT SIMPLY",
                    CurrentBottomText = "MASTER CODING"
                },

                new Meme()
                {
                    Id = 2,
                    CurrentImage = "/images/Picard.png",
                    CurrentTopText = "WHAT THE HECK",
                    CurrentBottomText = "DOES THIS ERROR MEAN"
                },

                new Meme()
                {
                    Id = 3,
                    CurrentImage = "/images/SuspectBaby.png",
                    CurrentTopText = "SO YOU'RE TELLIN ME",
                    CurrentBottomText = "ALL I HAD TO DO IS RESTART VISUAL STUDIO?"
                });
        }
    }
}
