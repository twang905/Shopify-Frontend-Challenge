import { useDispatch } from "react-redux"
import { removeMovie } from "../actions"

export default function Nomination(props) {
  const dispatch = useDispatch();
  const getPoster = () => {
    return props.movie.Poster !== "N/A"
    ? <img src={`${props.movie.Poster}`} className="h-44 rounded-md w-auto" />
    : <div className="h-44 w-32 rounded-md bg-vs-grey-2 flex items-center justify-center p-4">
        {props.movie.Title}
      </div>
  }
  // clickable movie poster to show nominated movie
  return(
    <button 
      className="px-1"
      onClick={() => dispatch(removeMovie(props.movie))}
    >
      {getPoster()}
    </button>
  )
}