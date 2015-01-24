using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace TTMApp.Web.Models
{
    public class TTMDatabase : DbContext
    {
        public DbSet<Linkhay> LinkHay;

        public TTMDatabase()
            : base("DefaultConnection")
        {

        }
    }
}