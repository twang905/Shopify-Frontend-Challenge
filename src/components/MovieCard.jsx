import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../actions";
import posterPlaceholder from "../assets/poster-placeholder.png"

export default function MovieCard(props) {
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    // using movie title, fetch other information about movie including ratings, director, etc
    fetch(`https://www.omdbapi.com/?apikey=9b7cb146&t=${props.title}`)
      .then(res => res.json())
      .then(
        (result) => {
          setMovie(result)
        },
        (error) => {
          console.log(error)
        }
      )
  }, [])

  const getSrc = () => {
    return props.poster !== "N/A"
    ? props.poster
    : posterPlaceholder
  }

  const getRating = () => {
    if (movie === null) {
      return "-"
    } else {
      if (movie.imdbRating === "N/A") {
        return "-"
      } else {
        return movie.imdbRating
      }
    }
  }

  const getDirector = () => {
    if (movie === null) {
      return "Unknown"
    } else {
      if (movie.Director === "N/A") {
        return "Unknown"
      } else {
        return movie.Director
      }
    }
  }

  return (
  <div  className="rounded-md flex flex-row bg-vs-grey-2 h-60">
    {/* movie poster */}
    <img 
      src={getSrc()}
      alt="new"
      className="rounded-l-md h-60"
    />
    <div className="p-4 flex flex-col w-96 justify-between">
      <div className="h-40 overflow-hidden overflow-scroll">
        {/* MOVIE title, year and director */}
        <div className="text-left">
          <h1 className="text-2xl font-bold text-gray-100">{props.title}</h1>
          <h1 className="text-sm text-gray-400">{`${props.year}, ${getDirector()}`}</h1>
        </div>
        {/* movie runtime and rating */}
        <div className="flex flex-row items-center">
          <h1 className="text-xs my-4 mr-3 rounded-md p-1 border-gray-400 text-gray-100 border-2 w-14">{movie === null ? "-" : movie.Runtime}</h1>
          <h1 className="text-md text-blue-600 font-bold">{getRating()}</h1>
          <h1 className="text-md text-gray-400">{"\xa0/10"}</h1>
        </div>
      </div>
      {/* nominate movie button */}
      <div>
        <button 
          className="bg-white text-black rounded-md w-full py-2 hover:bg-black hover:text-white" 
          onClick={() => { dispatch(addMovie(props.movie)) }}
        >Nominate</button>
      </div>
    </div>
  </div>
  )
} 