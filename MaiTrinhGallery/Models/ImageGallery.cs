using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.ComponentModel.DataAnnotations;

namespace MaiTrinhGallery.Models
{
    public class ImageGallery
    {
        public ImageGallery()
        {
            ImageList = new List<string>();
        }
        [Key]
        public Guid ID { get; set; }
        public string Name { get; set; }
        public string ImagePath { get; set; }
        public List<string> ImageList { get; set; }
    }
}