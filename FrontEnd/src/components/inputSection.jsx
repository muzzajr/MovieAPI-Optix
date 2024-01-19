/* eslint-disable react/prop-types */
import GenreDropdown from "./genreDropdown";
import axios from "axios";

function InputSection({ setMovieItems }) {
  const handleSearch = () => {
    const genreInput = document.getElementById("genreInput").value;
    const titleInput = document.getElementById("titleInput").value;
    let searchLimit = 28;
    if (document.getElementById("searchLimit").value) {
      searchLimit = document.getElementById("searchLimit").value;
    }

    let searchUrl = "";
    if (genreInput && titleInput) {
      searchUrl = `https://localhost:7103/get-movies?maxReturn=${searchLimit}&title=${titleInput}&genre=${genreInput}`;
    } else if (genreInput && !titleInput) {
      searchUrl = `https://localhost:7103/get-movies?maxReturn=${searchLimit}&genre=${genreInput}`;
    } else if (!genreInput && titleInput) {
      searchUrl = `https://localhost:7103/get-movies?maxReturn=${searchLimit}&title=${titleInput}`;
    }
    axios
      .get(searchUrl)
      .then((response) => {
        setMovieItems(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div id="searchArea" className=" items-center">
      <div className=" p-4 flex gap-8">
        <div className="flex gap-2">
          <label className="">Film Title</label>
          <input
            id="titleInput"
            type="text"
            placeholder="Search text"
            className=" bg-slate-400 text-white rounded-md placeholder:text-slate-300 pl-2"
          />
        </div>
        <div className="flex gap-2">
          <label>Genre</label>
          <GenreDropdown />
        </div>
        <div className="flex gap-2">
          <label className="">Search Limit</label>
          <input
            id="searchLimit"
            type="text"
            placeholder="280"
            className=" bg-slate-400 text-white rounded-md placeholder:text-slate-300 pl-2"
          />
        </div>
        <button
          className=" border-2 border-slate-400 hover:bg-slate-600 rounded px-2"
          onClick={handleSearch}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default InputSection;
