namespace Cooperchip.MedicalManagement.Infra.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddMensagensClearance : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.MensagensClearance",
                c => new
                    {
                        MensagensClearanceId = c.Int(nullable: false, identity: true),
                        GenericoId = c.Int(nullable: false),
                        Substancia = c.Int(nullable: false),
                        ParametroInicial = c.Int(nullable: false),
                        ParametroFinal = c.Int(nullable: false),
                        Mensagem = c.String(nullable: false, maxLength: 4000, unicode: false),
                    })
                .PrimaryKey(t => t.MensagensClearanceId)
                .ForeignKey("dbo.Generico", t => t.GenericoId)
                .Index(t => t.GenericoId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.MensagensClearance", "GenericoId", "dbo.Generico");
            DropIndex("dbo.MensagensClearance", new[] { "GenericoId" });
            DropTable("dbo.MensagensClearance");
        }
    }
}
