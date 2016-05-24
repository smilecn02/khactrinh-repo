using MyDiary.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDiary.Data.Configurations
{
    public class DiaryConfiguration : EntityBaseConfiguration<Diary>
    {
        public DiaryConfiguration()
        {
            Property(s => s.Title).HasMaxLength(250);
            Property(s => s.Image).HasMaxLength(250);
            Property(s => s.Tags).HasMaxLength(500);
        }
    }
}
