export default function SearchSection(props) {
  // search bar
  return(
    <div className="p-4">
      <div className="flex flex-row h-14 border-white">
        <input 
          className="w-full text-4xl font-bold text-white"
          placeholder="Search"
          onChange={props.onChange}
          value={props.query}
        ></input>
        {/* clears search inquiry */}
        <button onClick={props.buttonClick}>
          <i className="fas fa-times text-3xl"></i>
        </button>
      </div>
      <div className="flex flex-row py-1">
        <h1 className="text-xl">{`Search results for "${props.query}"`}</h1>
      </div>
    </div>
  )
}