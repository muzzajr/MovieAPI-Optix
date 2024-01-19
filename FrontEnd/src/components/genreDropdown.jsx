function GenreDropdown() {
  return (
    <div>
      <form action="">
        <input
          id="genreInput"
          list="genres"
          placeholder="Genre"
          className="bg-slate-400 rounded-md p-1 placeholder:text-slate-300"
        />
        <datalist id="genres">
          <option value="Action" />
          <option value="Adventure" />
          <option value="Animation" />
          <option value="Comedy" />
          <option value="Documentary" />
          <option value="Drama" />
          <option value="Family" />
          <option value="Fantasy" />
          <option value="History" />
          <option value="Horror" />
          <option value="Music" />
          <option value="Mystery" />
          <option value="Romance" />
          <option value="Science Fiction" />
          <option value="Thriller" />
          <option value="TV Movie" />
          <option value="War" />
          <option value="Western" />
        </datalist>
      </form>
    </div>
  );
}

export default GenreDropdown;
