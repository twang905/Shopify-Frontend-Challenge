import { useState, useEffect} from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../actions";

export default function MovieCard(props) {
  const [movie, setMovie] = useState(null);
  const dispatch = useDispatch();
  
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=9b7cb146&t=${props.title}`)
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

  return (
  <div 
    className="rounded-md flex flex-row bg-vs-grey-2 h-60"
  >
    <img 
      src={props.poster}
      alt="new"
      className="rounded-l-md h-60"
    />
    <div className="p-4 flex flex-col w-96 justify-between">
      <div>
        <div className="text-left">
            <h1 className="text-2xl font-bold text-gray-100">{props.title}</h1>
            <h1 className="text-sm text-gray-400">{`${props.year}, ${movie === null ? "" : movie.Director}`}</h1>
          </div>
          <div className="flex flex-row items-center">
          <h1 className="text-xs my-4 mr-3 rounded-md p-1 border-gray-400 text-gray-100 border-2 w-14">{movie === null ? "-" : movie.Runtime}</h1>
            <h1 className="text-md text-blue-600 font-bold">{movie === null ? "-" : movie.imdbRating}</h1>
            <h1 className="text-md text-gray-400">{"\xa0/10"}</h1>
          </div>
      </div>
      <div>
        <button 
          className="bg-white text-black rounded-md w-full py-2 hover:bg-black hover:text-white" 
          onClick={() => { dispatch(addMovie(movie)) }}
        >Nominate</button>
      </div>
    </div>
  </div>
  )
} 