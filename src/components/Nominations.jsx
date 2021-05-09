import { useSelector } from "react-redux"
import Nomination from "./Nomination";

export default function Nominations() {
  const nominations = useSelector(state => state.nominations);
  return(
    <div className="w-full pt-3 p-4">
      <div className="h-16 h-0 flex items-start flex-col">
        <h1 className="text-3xl m-0 font-bold">My Nominations</h1>
        <h2>Click a movie to remove it</h2>
      </div>
      <div className="h-48 bg-vs-grey-2 rounded-md flex items-center px-2 overflow-scroll">
        {nominations.map(movie => <Nomination movie ={movie}/>)}
      </div>
    </div>
  ); 
}