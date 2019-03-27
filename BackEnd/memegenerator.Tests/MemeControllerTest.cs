using memegenerator.Controllers;
using System;
using System.Linq;
using Xunit;

namespace memegenerator.Tests
{
    public class MemeControllerTest
    {
        [Fact]
        public void GET_Returns_List_Of_Memes()
        {
            var underTest = new MemeController();

            var result = underTest.Get();

            Assert.Equal(3, result.Value.Count());
        }

        [Fact]
        public void Post_Creates_New_Meme()
        {
            var underTest = new MemeController();

            var result = underTest.Post("Hello World");

            Assert.True(result.Value);
        }

        [Fact]
        public void Post_Increases_Meme_Count()
        {
            var underTest = new MemeController();

            underTest.Post("MemeTest");

            var result = underTest.Get();

            Assert.Equal(4, result.Value.Count());
        }
    }
}

