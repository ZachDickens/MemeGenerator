using memegenerator.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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

        internal void Add(Meme meme)
        {
            throw new NotImplementedException();
        }
    }
}
