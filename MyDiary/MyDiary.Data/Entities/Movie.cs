using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MyDiary.Data.Entities
{
    public class Movie : IEntityBase
    {
        public Movie()
        {
        }
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Image { get; set; }
        public int GenreId { get; set; }
        public string Director { get; set; }
        public string Writer { get; set; }
        public string Producer { get; set; }
        public DateTime ReleaseDate { get; set; }
        public byte Rating { get; set; }
        public string TrailerURI { get; set; }
    }
}
