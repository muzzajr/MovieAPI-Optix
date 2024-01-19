/* eslint-disable react/prop-types */
import { LuArrowUp, LuArrowDown } from "react-icons/lu";

function Pagination({ totalPosts, postsPerPage, setPage, setItemsPerPage }) {
  let pages = [];

  const handleChange = () => {
    let val = document.getElementById("itemCountInput").value;
    if (val == 14 || val == 28 || val == 42) {
      setItemsPerPage(val);
    }
  };

  const SortAsc = () => {};

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="flex items-center p-2">
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
          <button className="p-2 bg-slate-500 rounded-md border-2 border-slate-600 hover:bg-slate-400">
            <LuArrowUp />
          </button>
          <button className="p-2 bg-slate-500 rounded-md border-2 border-slate-600 hover:bg-slate-400">
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
