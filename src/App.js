import { movies } from "./Component/Data";
import "./App.css";
import MovieList from "./Component/MovieList";
import Filter from "./Component/Filter";
import { useSelector } from "react-redux";
function App() {
  const title = useSelector((state) => state.movieReducer.title);
  const rating = useSelector((state) => state.movieReducer.rating);

  const add = (newMovie) => {
    movies.push(newMovie);

    console.log(movies);
    console.log(newMovie);
  };

  return (
    <div className="App">
      <Filter />
      <MovieList
        movies={movies.filter(
          (movie, i) =>
            movie.title.toLowerCase().includes(title.toLowerCase()) &&
            movie.rating == rating
        )}
      />
    </div>
  );
}

export default App;
