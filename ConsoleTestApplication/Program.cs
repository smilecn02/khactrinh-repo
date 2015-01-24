using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleTestApplication
{
    class Program
    {
        static void Main(string[] args)
        {
            Product product = new Product()
            {
                Id = 1,
                Name = "trinh"
            };

            Mapper.CreateMap<Product, ProductViewModel>();

            ProductViewModel p = Mapper.Map<ProductViewModel>(product);
            
            Console.WriteLine(string.Format("{0} co ten la {1}", p.Id, p.Name));
        }
    }

    class Product
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

    class ProductViewModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }
}
