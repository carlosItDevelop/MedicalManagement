using Cooperchip.MedicalManagement.Infra.Data.ORM.EF.Contexto;

namespace Cooperchip.MedicalManagement.Infra.Data.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<MedicalManagementDbContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(MedicalManagementDbContext context)
        {

           
        }
    }
}