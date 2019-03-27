using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace memegenerator.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MemeController : ControllerBase
    {

        private static List<string> all = new List<string>()
        {
             "test", "test1", "test2"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }
       
        [HttpPost]
        public ActionResult<bool> Post([FromBody] string meme)
        {
            all.Add(meme);
            return true;
        }


    }
}