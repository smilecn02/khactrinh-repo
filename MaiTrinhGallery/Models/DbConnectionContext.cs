using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace MaiTrinhGallery.Models
{
    public class DbConnectionContext : DbContext
    {
        public DbConnectionContext()
            : base("name=DefaultConnection")
        {
            Database.SetInitializer(new DropCreateDatabaseIfModelChanges
            <DbConnectionContext>());
        }
        public DbSet<ImageGallery> ImageGallery { get; set; }
    }
}