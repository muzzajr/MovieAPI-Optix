import { useEffect, useState } from "react";
import InputSection from "./components/inputSection";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import Pagination from "./components/Pagination";

function MovieItem(data) {
  const itemData = data["data"];
  return (
    <>
      <div className="w-53 h-96 bg-slate-700 rounded-lg items-center justify-center mx-auto mb-1 hover:cursor-pointer hover:scale-[.97] ease-in duration-200 shadow-md shadow-black/60">
        <div className="">
          <img
            src={itemData["poster_url"]}
            className="w-52 h-4/5 rounded-t-lg"
            loading="lazy"
          />
          <div className="mt-2 w-52">
            <p className="text-sm text-left pl-2 break-words">
              {itemData["title"]}
            </p>
            <div className="flex items-center text-center gap-1">
              <p className="text-sm pl-2">
                {"Rating: " + itemData["vote_average"]}
              </p>
              <FaStar size={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  const [MovieList, setMovieList] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostsPerPage, setPostsPerPage] = useState(14);

  useEffect(() => {
    axios
      .get("https://localhost:7103/get-movies?maxReturn=280&sortType=alpha_asc")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const setMovieItems = (data) => {
    setMovieList(data);
  };

  const lastPostIndex = CurrentPage * PostsPerPage;
  const firstPostIndex = lastPostIndex - PostsPerPage;
  const currentPost = MovieList.slice(firstPostIndex, lastPostIndex);

  if (MovieList.length == 0 || MovieList[0] == undefined) {
    return (
      <div className="w-full h-screen">
        <InputSection setMovieItems={setMovieItems} />
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen">
        <InputSection setMovieItems={setMovieItems} />
        <Pagination
          totalPosts={MovieList.length}
          postsPerPage={PostsPerPage}
          setPage={setCurrentPage}
          setItemsPerPage={setPostsPerPage}
        />
        <div id="movieItem" className="flex flex-wrap justify-start">
          {currentPost.map((item) => {
            return <MovieItem key={item["id"]} data={item} />;
          })}
        </div>
      </div>
    );
  }
}

export default App;
