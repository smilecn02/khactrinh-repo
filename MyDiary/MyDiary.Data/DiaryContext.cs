using MyDiary.Data.Configurations;
using MyDiary.Data.Entities;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDiary.Data
{
    public class DiaryContext : DbContext
    {
        public DiaryContext() : base("Diary")
        {
            Database.SetInitializer<DiaryContext>(null);
        }

        public IDbSet<Diary> Diaries { get; set; }

        public virtual void Commit()
        {
            base.SaveChanges();
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();

            modelBuilder.Configurations.Add(new DiaryConfiguration());
        }
    }
}
