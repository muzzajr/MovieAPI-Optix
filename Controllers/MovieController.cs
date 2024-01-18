using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Npgsql;
using System.Data;

namespace MovieAPI.Controllers
{
    
    [ApiController]
    public class MovieController : Controller
    {
        private readonly IConfiguration _configuration;
        public MovieController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [Route("movies-by-title")]
        [HttpGet]
        public string GetMoviesByTitle(string title = "", int maxReturn = 1) 
        {
            string query = @"SELECT * FROM Public.moviedata  WHERE title LIKE '%" + title + "%' LIMIT " + maxReturn;

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myConn = new NpgsqlConnection(sqlDataSource))
            {
                myConn.Open();
                using(NpgsqlCommand myCommand = new NpgsqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    dt.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return Newtonsoft.Json.JsonConvert.SerializeObject(dt);
        }

        [Route("movies-by-genre")]
        [HttpGet]
        public string GetMoviesByGenre(string genre = "Action", int maxReturn = 1)
        {
            string query = @"SELECT * FROM Public.moviedata  WHERE genre LIKE '%" + genre + "%' LIMIT " + maxReturn;

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myConn = new NpgsqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    dt.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return Newtonsoft.Json.JsonConvert.SerializeObject(dt);
        }

        [Route("movies-by-actor")]
        [HttpGet]
        public string GetMoviesByActor(string actor = "Tom Holland", int maxReturn = 10)
        {
            string query = @"SELECT * FROM Public.moviedata  WHERE overview LIKE '%" + actor + "%' LIMIT " + maxReturn;

            DataTable dt = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("WebApiDatabase");
            NpgsqlDataReader myReader;
            using (NpgsqlConnection myConn = new NpgsqlConnection(sqlDataSource))
            {
                myConn.Open();
                using (NpgsqlCommand myCommand = new NpgsqlCommand(query, myConn))
                {
                    myReader = myCommand.ExecuteReader();
                    dt.Load(myReader);
                    myReader.Close();
                    myConn.Close();
                }
            }

            return Newtonsoft.Json.JsonConvert.SerializeObject(dt);
        }
    }
}
