using Microsoft.AspNetCore.Mvc;
using Mission12_clhwang.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission12_clhwang.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }
        public IEnumerable<Movie> Get()
        {
            return context.Movies.ToArray();
        }
    }
}
