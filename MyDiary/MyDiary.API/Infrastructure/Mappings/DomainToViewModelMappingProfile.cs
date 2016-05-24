using AutoMapper;
using MyDiary.API.Models;
using MyDiary.Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace MyDiary.API.Infrastructure.Mappings
{
    public class DomainToViewModelMappingProfile : Profile
    {
        public override string ProfileName
        {
            get { return "DomainToViewModelMappings"; }
        }

        protected override void Configure()
        {
            Mapper.CreateMap<Diary, DiaryViewModel>().ReverseMap();

        }
    }
}