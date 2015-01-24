using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using eManager.Web.Models;

namespace eManager.Web.Controllers
{
    public class HomeController : Controller
    {
        private const int defaultEntryCount = 10;

        public ActionResult Index()
        {
            ViewBag.Message = "Modify this template to jump-start your ASP.NET MVC application.";

            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your app description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

        public ActionResult Angular()
        {
            return View();
        }

        private IEnumerable<Entry> GetLatestEntries(int p1, int p2, out int totalItems)
        {
            var data = new List<Entry>(){
                new Entry(){ Id = 1, Name = "a"},
                new Entry(){Id = 2, Name = "b"},
                new Entry(){Id = 3, Name = "c"},

                new Entry(){ Id = 4, Name = "d"},
                new Entry(){Id = 5, Name = "e"},
                new Entry(){Id = 6, Name = "f"},

                new Entry(){ Id = 7, Name = "g"},
                new Entry(){Id = 8, Name = "h"},
                new Entry(){Id = 9, Name = "i"},

                new Entry(){ Id = 10, Name = "j"},
                new Entry(){Id = 11, Name = "k"},
                new Entry(){Id = 12, Name = "l"},

                new Entry(){Id = 13, Name = "m"},
                new Entry(){ Id = 14, Name = "n"},
                new Entry(){Id = 15, Name = "o"},

                new Entry(){Id = 16, Name = "p"},
                new Entry(){ Id = 17, Name = "q"},
                new Entry(){Id = 18, Name = "r"},

                new Entry(){Id = 19, Name = "s"},
                new Entry(){ Id = 20, Name = "t"},
                new Entry(){Id = 21, Name = "u"},

                new Entry(){Id = 22, Name = "v"},
                new Entry(){ Id = 23, Name = "w"},
                new Entry(){Id = 24, Name = "x"},

                new Entry(){Id = 25, Name = "y"},
                new Entry(){ Id = 25, Name = "z"}
            };

            totalItems = data.Count;
            return data;
        }
    }
}
