/* eslint-disable react/prop-types */
import { IoCloseOutline } from "react-icons/io5";
import { FaStar, FaVoteYea } from "react-icons/fa";

function FullMovieDescription({ selectedMovie, setOpen }) {
  return (
    <div className="fixed flex w-full h-screen top-0 bg-slate-900/80">
      <div className="relative flex w-[80%] h-[80%] bg-slate-800 mx-auto mt-20 rounded-lg shadow-lg shadow-black/60">
        <img
          src={selectedMovie["poster_url"]}
          className="h-full w-1/3 rounded-l-lg object-cover object-center"
        />
        <div className="relative w-2/3 h-full">
          <div
            className="absolute p-4 right-0 ml-auto hover:cursor-pointer"
            onClick={() => setOpen(false)}
          >
            <IoCloseOutline size={30} />
          </div>
          <div className="mt-5 ml-4 items-center">
            <p className="text-4xl py-2">{selectedMovie["title"]}</p>
            <p>{selectedMovie["genre"]}</p>
            <div className="mt-4">
              <p>
                <span className="text-sm">Released: </span>
                {selectedMovie["release_date"]}
              </p>
            </div>
            <div>
              <div className="flex items-center text-center gap-1 mt-1">
                <p>
                  <span className="text-sm"> Rating: </span>
                  {selectedMovie["vote_average"] != null
                    ? selectedMovie["vote_average"]
                    : 0}
                </p>
                <FaStar size={16} />
              </div>
              <div className="flex items-center text-center gap-1 mt-1">
                <p>
                  <span className="text-sm">Rating Votes: </span>
                  {selectedMovie["vote_count"]}
                </p>
                <FaVoteYea size={16} />
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm">Overview</p>
              <p className="pt-1 pr-2">{selectedMovie["overview"]}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullMovieDescription;
