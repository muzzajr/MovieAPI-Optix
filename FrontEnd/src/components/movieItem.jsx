/* eslint-disable react/prop-types */
import { FaStar } from "react-icons/fa";

function MovieItem(props) {
  const itemData = props.data;
  let title = itemData["title"];
  // There is some bad data in the where if there is missing value the title gets set to the release date
  if (title == null) {
    title = itemData["release_date"];
  }
  const handleSelection = () => {
    props.setMovie(itemData);
    props.open(true);
  };
  return (
    <>
      <div
        onClick={handleSelection}
        className="w-53 h-96 bg-slate-700 rounded-lg items-center justify-center mx-auto mb-1 hover:cursor-pointer hover:scale-[.97] ease-in duration-200 shadow-md shadow-black/60"
      >
        <div className="">
          <img
            src={
              itemData["poster_url"] != null
                ? itemData["poster_url"]
                : "No-Image-Placeholder.svg"
            }
            className="w-52 h-4/5 rounded-t-lg"
            loading="lazy"
          />
          <div className="mt-2 w-52">
            <p className="text-sm text-left pl-2 break-words">{title}</p>
            <div className="flex items-center text-center gap-1">
              <p className="text-sm pl-2">
                {"Rating: " +
                  (itemData["vote_average"] != null
                    ? itemData["vote_average"]
                    : 0)}
              </p>
              <FaStar size={12} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieItem;
