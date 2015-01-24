namespace TTMApp.Web.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;
    using TTMApp.Web.Models;

    internal sealed class Configuration : DbMigrationsConfiguration<TTMApp.Web.Models.TTMDatabase>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = true;
        }

        protected override void Seed(TTMApp.Web.Models.TTMDatabase context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //

            context.LinkHay.AddOrUpdate(l => "Title",
                new Linkhay() { Id = 1, Title = "Dân trí", Description = "description" });
            
        }
    }
}
