using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDiary.Data.Infrastructure
{
    public class DbFactory : Disposable, IDbFactory
    {
        DiaryContext dbContext;

        public DiaryContext Init()
        {
            return dbContext ?? (dbContext = new DiaryContext());
        }

        protected override void DisposeCore()
        {
            if (dbContext != null)
                dbContext.Dispose();
        }
    }
}
