using memegenerator.Model;
using System.Collections.Generic;
using System.Linq;

namespace memegenerator.Repository
{
    public class MemeRepository
    {
        MemeContext db;

        public MemeRepository(MemeContext db)
        {
            this.db = db;
        }

        public IEnumerable<Meme> GetAll()
        {
            return db.Memes.ToList();
        }

        public void Add(Meme meme)
        {
            db.Memes.Add(meme);
            db.SaveChanges();
        }
    }
}
