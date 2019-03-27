using Microsoft.EntityFrameworkCore.Migrations;

namespace memegenerator.Migrations
{
    public partial class InitialTry : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "Id", "CurrentBottomText", "CurrentImage", "CurrentTopText" },
                values: new object[] { 1, "MASTER CODING", "/images/LordOfRings.png", "ONE DOES NOT SIMPLY" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Memes",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
