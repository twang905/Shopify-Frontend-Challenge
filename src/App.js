import './App.css';
import SearchSection from './components/SearchSection';
import { useState } from 'react';
import Nominations from './components/Nominations';
import MoviesSection from './components/MoviesSection';
import Banner from './components/Banner';
import { useSelector } from 'react-redux';

function App() {
  
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const nominations = useSelector(state => state.nominations);

  // refresh inquiries when search query changes
  const handleChange = async (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    await fetch(`https://www.omdbapi.com/?apikey=9b7cb146&type=movie&plot=full&s=${newQuery}`)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.Response && result.Search !== undefined) {
            setMovies(result.Search)
          }
        },
        (error) => { console.log(error) }
      )
  }
  // refresh search results when inquiry is cleared
  const handleClear = () => {
    setQuery("");
    setMovies([]);
  }
  
  return (
    <div className="App bg-vs-grey-1 text-white">
      <div className="flex flex-col justify-between m-auto w-full h-screen">
        {/* show banner when five movies are nominated */}
        {nominations.length === 5 && <Banner />}
        <SearchSection 
          query={query}
          onChange={handleChange}
          buttonClick={handleClear}
        />
        <MoviesSection movies={movies} />
        <Nominations />
      </div>
    </div>
  );
}

export default App;
