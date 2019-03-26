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
            "./images/LordOfRings.png",
            "./images/Picard.png",
            "./images/PrincessBride.png",
            "./images/SuspectBaby.png",
            "./images/CrazyGirl.jpg",
            "./images/ManFinger.jpeg"
        };

        [HttpGet]
        public ActionResult<IEnumerable<string>> Get()
        {
            return all;
        }

        [HttpPost]
        public ActionResult<bool> Post([FromBody] string todo)
        {
            all.Add(todo);
            return true;
        }
    }
}
