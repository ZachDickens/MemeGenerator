using Microsoft.EntityFrameworkCore.Migrations;

namespace memegenerator.Migrations
{
    public partial class AddedMemeSeedData : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "Id", "CurrentBottomText", "CurrentImage", "CurrentTopText" },
                values: new object[] { 2, "DOES THIS ERROR MEAN", "/images/Picard.png", "WHAT THE HECK" });

            migrationBuilder.InsertData(
                table: "Memes",
                columns: new[] { "Id", "CurrentBottomText", "CurrentImage", "CurrentTopText" },
                values: new object[] { 3, "ALL I HAD TO DO IS RESTART VISUAL STUDIO?", "/images/SuspectBaby.png", "SO YOU'RE TELLIN ME" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Memes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "Memes",
                keyColumn: "Id",
                keyValue: 3);
        }
    }
}
