import MovieCard from "../components/movieCard";
import { useState } from "react";
function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const movies = [
    {
      id: 1,
      title: "inception ",
      release_date: "09/09/2090",
    },
    {
      id: 2,
      title: "the shawshank redemption",
      release_date: "09/10/2006",
    },
    {
      id: 3,
      title: "interstellar",
      release_date: "09/10/2006",
    },
  ];
  const handleSearch = (e) => {
    e.preventDefault();
    alert(searchQuery);
  };
  return (
    <>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies... "
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-btn">
          Search
        </button>
      </form>
      <div className="movies-grid">
        {movies.map(
          (m) =>
            m.title.toLowerCase().startsWith(searchQuery) && (
              <MovieCard movie={m} key={m.id} />
            )
        )}
      </div>
    </>
  );
}
export default Home;
