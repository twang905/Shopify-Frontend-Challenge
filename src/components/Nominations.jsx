import { useSelector } from "react-redux"
import Nomination from "./Nomination";

export default function Nominations() {
  // shows all your nominations at bottom of screen
  const nominations = useSelector(state => state.nominations);
  return(
    <div className="w-full pt-3 p-4">
      <div className="h-16 h-0 flex items-start flex-col">
        <h1 className="text-3xl m-0 font-bold">My Nominations</h1>
        <h2>Click a movie to remove it</h2>
      </div>
      <div className="flex flex-row h-48">
        {/* posters of nominated movies */}
        {nominations.map(movie => <Nomination movie ={movie}/>)}
      </div>
    </div>
  ); 
}