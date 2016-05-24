using AutoMapper;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyDiary.API.Infrastructure.Mappings
{
    public class AutoMapperConfiguration
    {
        public static void Configure()
        {
            Mapper.Initialize(x =>
            {
                x.AddProfile<DomainToViewModelMappingProfile>();
            });
        }
    }
}