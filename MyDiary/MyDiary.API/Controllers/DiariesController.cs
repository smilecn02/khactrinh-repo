using AutoMapper;
using MyDiary.API.Models;
using MyDiary.Data.Entities;
using MyDiary.Data.Infrastructure;
using MyDiary.Data.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace MyDiary.API.Controllers
{


    [Authorize(Roles = "Admin")]
    [RoutePrefix("api/diaries")]
    public class DiariesController : ApiControllerBase
    {
        private readonly IEntityBaseRepository<Diary> _moviesRepository;

        public DiariesController(IEntityBaseRepository<Diary> moviesRepository,
            IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
            : base(_errorsRepository, _unitOfWork)
        {
            _moviesRepository = moviesRepository;
        }

        [AllowAnonymous]
        [Route("latest")]
        public HttpResponseMessage Get(HttpRequestMessage request)
        {
            return CreateHttpResponse(request, () =>
            {
                HttpResponseMessage response = null;

                var diaries = _moviesRepository.GetAll().OrderByDescending(x => x.UpdateDate).Take(6).ToList();

                IEnumerable<DiaryViewModel> diariesVM = Mapper.Map<IEnumerable<Diary>, IEnumerable<DiaryViewModel>>(diaries);

                response = request.CreateResponse<IEnumerable<DiaryViewModel>>(HttpStatusCode.OK, diariesVM);

                return response;
            });
        }
    }
}
