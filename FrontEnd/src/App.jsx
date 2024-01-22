import { useEffect, useState } from "react";
import InputSection from "./components/inputSection";
import MovieItem from "./components/movieItem";
import axios from "axios";
import Pagination from "./components/Pagination";
import FullMovieDescription from "./components/fullMovieDescription";

function App() {
  const [MovieList, setMovieList] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [PostsPerPage, setPostsPerPage] = useState(14);
  const [selectedMovie, setSelectedMovie] = useState("");
  const [Open, setOpen] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8080/get-movies?maxReturn=280")
      .then((response) => {
        setMovieList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const lastPostIndex = CurrentPage * PostsPerPage;
  const firstPostIndex = lastPostIndex - PostsPerPage;
  const currentPost = MovieList.slice(firstPostIndex, lastPostIndex);

  if (MovieList.length == 0 || MovieList[0] == undefined) {
    return (
      <div className="w-full h-screen max-w-[1920px]">
        <InputSection
          setMovieItems={setMovieList}
          setCurrentPage={setCurrentPage}
        />
      </div>
    );
  } else {
    return (
      <div className="w-full h-screen md:max-w-[1920px]">
        <InputSection
          setMovieItems={setMovieList}
          setCurrentPage={setCurrentPage}
        />
        <Pagination
          totalPosts={MovieList.length}
          postsPerPage={PostsPerPage}
          setPage={setCurrentPage}
          setItemsPerPage={setPostsPerPage}
          setMovieData={setMovieList}
        />
        <div
          id="movieItems"
          className="w-full h-full flex flex-wrap justify-start"
        >
          {currentPost.map((item) => {
            return (
              <MovieItem
                key={item["id"]}
                data={item}
                setMovie={setSelectedMovie}
                open={setOpen}
              />
            );
          })}
        </div>
        {Open ? (
          <FullMovieDescription
            selectedMovie={selectedMovie}
            setOpen={setOpen}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
