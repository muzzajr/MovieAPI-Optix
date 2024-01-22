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

        [Route("get-movies")]
        [HttpGet]
        public string GetMoviesByTitle(int maxReturn = 1, string? title = "", string? genre = "", string? sortType = "" ) 
        {

            // A Get function that quires the database based on given inputs

            string query = "";

            if(title != "" && genre != "" && sortType != "")
            {
                query = @"SELECT * FROM Public.moviedata  WHERE title LIKE '%" + title + "%' " +
                "AND genre LIKE '%" + genre + "%'";
            }
            else if (title == "" && genre != "")
            {
                query = @"SELECT * FROM Public.moviedata  WHERE genre LIKE '%" + genre + "%'";
            }
            else if (title != "" && genre == "")
            {
                query = @"SELECT * FROM Public.moviedata  WHERE title LIKE '%" + title + "%'";
            }
            else
            {
                query = @"SELECT * FROM Public.moviedata";
            }

            if(sortType != "")
            {
                if(sortType == "alpha_asc")
                {
                    query += " ORDER BY title";
                }
                else if(sortType == "alpha_desc")
                {
                    query += " ORDER BY title DESC";
                }
            }

            if (maxReturn != 0)
            {
                query += " LIMIT " + maxReturn;
            }
            

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
