import './App.css';
import SearchSection from './components/SearchSection';
import { useState } from 'react';
import Nominations from './components/Nominations';
import MoviesSection from './components/MoviesSection';

function App() {
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleChange = (e) => {
    setQuery(e.target.value);
    fetch(`http://www.omdbapi.com/?apikey=9b7cb146&type=movie&plot=full&s=${query}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response && result.Search !== undefined) {
            setMovies(result.Search)
          }
        },
        (error) => {
          console.log(error)
        }
      )
  }
  
  return (
    <div className="App bg-vs-grey-1 text-white">
      <div className="flex flex-col justify-between m-auto w-full h-screen">
        <SearchSection 
          query={query}
          onChange={handleChange}
          buttonClick={() => {setQuery("")}}
        />
        <MoviesSection movies={movies} />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
