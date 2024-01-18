using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;

namespace MovieAPI.Models
{
    public class MovieEntry
    {
        [Key]
        public int ID { get; set; }
        public string? Release_Date { get; set; }
        public string? Title { get; set; }
        public string? Overview { get; set; }
        public string? Popularity { get; set; }
        public string? Vote_Count { get; set; }
        public string? Vote_Average { get; set; }
        public string? Original_Language { get; set; }
        public string? Genre { get; set; }
        public string? Poster_Url { get; set;}
    }
}
