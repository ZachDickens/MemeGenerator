using System.Collections.Generic;
using memegenerator.Model;
using memegenerator.Repository;
using Microsoft.AspNetCore.Mvc;

namespace memegenerator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {
        MemeRepository memeRepo;

        public MemeController(MemeRepository memeRepo)
        {
            this.memeRepo = memeRepo;
        }
      
        [HttpGet]
        public ActionResult<IEnumerable<Meme>> Get()
        {
            return Ok(memeRepo.GetAll());
        }

        [HttpPost]
        public void Post([FromBody] Meme meme)
        {
            memeRepo.Add(meme);
        }
    }
}