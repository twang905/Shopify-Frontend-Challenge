import { useDispatch } from "react-redux"
import { removeMovie } from "../actions"

export default function Nomination(props) {
  const dispatch = useDispatch();
  // clickable movie poster to show nominated movie
  return(
    <button 
      className="px-1"
      onClick={() => dispatch(removeMovie(props.movie))}
    >
      <img src={`${props.movie.Poster}`} className="h-44 rounded-md w-auto" />
    </button>
  )
}