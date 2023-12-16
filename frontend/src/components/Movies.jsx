import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";

function Movies(props) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState("");
  const [search, setSearch] = useState("");

  const { yumeth, count, name } = props;

  const inputField = useRef();

  async function fetchFilms() {
    try {
      setLoading(true);
      const response = await Axios.get(
        "https://yts.mx/api/v2/list_movies.json"
      );
      setMovies(response.data.data.movies);
    } catch (error) {
      setState(error.response?.data || "An error occurred");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFilms();
  }, []);

  async function searchx(event) {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await Axios.get(
        `https://yts.mx/api/v2/list_movies.json?query_term=${search}`
      );
      setMovies(response.data.data.movies);
    } catch (error) {
      setState(error.response?.data || "An error occurred");
    } finally {
      inputField.current.value = "";
      setLoading(false);
    }
  }

  return (
    <>
      <h1>{name}</h1>
      <p>{count}</p>
      <button onClick={yumeth}>Increase</button>
      <form onSubmit={searchx}>
        <input
          ref={inputField}
          onChange={(event) => {
            setSearch(event.target.value);
          }}
          placeholder="Search"
        ></input>
        <button disabled={loading}>
          {loading ? "Loading..." : "Search..."}
        </button>
      </form>
      <div>
        {loading ? (
          "Loading..."
        ) : movies ? (
          movies &&
          movies.map((movie) => (
            <div key={movie.id}>
              <h1>{movie.title}</h1>
              <label>
                <img
                  style={{ height: "40vh" }}
                  src={
                    movie.large_cover_image
                      ? movie.large_cover_image
                      : "No image available"
                  }
                  alt={movie.title}
                ></img>
              </label>
              <p>
                {movie.description_full
                  ? movie.description_full
                  : "No description available"}
              </p>
            </div>
          ))
        ) : (
          <h1>No results found</h1>
        )}
        <h1>{state ? state : ""}</h1>
        <h1>
          Click <Link to="/yumeth">here </Link> to view Yumeth AND HIS MACBOOK
          lol
        </h1>
      </div>
    </>
  );
}

export default Movies;
