/* eslint-disable react/prop-types */
import { LuArrowUp, LuArrowDown } from "react-icons/lu";
import axios from "axios";

function Pagination({
  totalPosts,
  postsPerPage,
  setPage,
  setItemsPerPage,
  setMovieData,
}) {
  let pages = [];

  const handleChange = () => {
    let val = document.getElementById("itemCountInput").value;
    if (val == 14 || val == 28 || val == 42) {
      setItemsPerPage(val);
    }
  };

  const handleSort = (sortType) => {
    const genreInput = document.getElementById("genreInput").value;
    const titleInput = document.getElementById("titleInput").value;
    let searchLimit = 280;
    if (document.getElementById("searchLimit").value) {
      searchLimit = document.getElementById("searchLimit").value;
    }

    let searchUrl = "";
    if (genreInput && titleInput) {
      searchUrl = `http://localhost:8080/get-movies?maxReturn=${searchLimit}&title=${titleInput}&genre=${genreInput}&sortType=${sortType}`;
    } else if (genreInput && !titleInput) {
      searchUrl = `http://localhost:8080/get-movies?maxReturn=${searchLimit}&genre=${genreInput}&sortType=${sortType}`;
    } else if (!genreInput && titleInput) {
      searchUrl = `http://localhost:8080/get-movies?maxReturn=${searchLimit}&title=${titleInput}&sortType=${sortType}`;
    } else if (!genreInput && !titleInput) {
      searchUrl = `http://localhost:8080/get-movies?maxReturn=${searchLimit}&sortType=${sortType}`;
    }

    axios
      .get(searchUrl)
      .then((response) => {
        setMovieData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }

  return (
    <div className="flex flex-wrap items-center p-2">
      {pages.map((page, index) => {
        return (
          <button
            key={index}
            className="p-2 bg-slate-500 rounded-md border-2 border-slate-600 hover:bg-slate-400"
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        );
      })}
      <div className="flex items-center ml-auto right-0 gap-2">
        <div>
          <label className="mr-1">Sort ABC</label>
          <button
            className="p-2 bg-slate-500 rounded-md border-2 border-slate-600 hover:bg-slate-400"
            onClick={() => handleSort("alpha_asc")}
          >
            <LuArrowUp />
          </button>
          <button
            className="p-2 bg-slate-500 rounded-md border-2 border-slate-600 hover:bg-slate-400"
            onClick={() => handleSort("alpha_desc")}
          >
            <LuArrowDown />
          </button>
        </div>

        <form action="" className="ml-auto right-0">
          <input
            id="itemCountInput"
            list="count"
            placeholder="14"
            className="w-14 bg-slate-500 rounded-md p-1 placeholder:text-slate-300"
            onChange={handleChange}
          />
          <datalist id="count">
            <option value="14" />
            <option value="28" />
            <option value="42" />
          </datalist>
        </form>
      </div>
    </div>
  );
}

export default Pagination;
