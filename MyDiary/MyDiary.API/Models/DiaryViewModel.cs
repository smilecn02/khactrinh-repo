using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyDiary.API.Models
{
    public class DiaryViewModel
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Image { get; set; }

        public string Content { get; set; }

        public string Tags { get; set; }

        public DateTime CreateDate { get; set; }

        public DateTime UpdateDate { get; set; }
    }
}