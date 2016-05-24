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
    [RoutePrefix("api/movies")]
    public class MoviesController : ApiControllerBase
    {
        private readonly IEntityBaseRepository<Movie> _moviesRepository;

        public MoviesController(IEntityBaseRepository<Movie> moviesRepository,
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
                var movies = _moviesRepository.GetAll().OrderByDescending(m => m.ReleaseDate).Take(6).ToList();

                IEnumerable<MovieViewModel> moviesVM = Mapper.Map<IEnumerable<Movie>, IEnumerable<MovieViewModel>>(movies);

                response = request.CreateResponse<IEnumerable<MovieViewModel>>(HttpStatusCode.OK, moviesVM);

                return response;
            });
        }
    }
}
