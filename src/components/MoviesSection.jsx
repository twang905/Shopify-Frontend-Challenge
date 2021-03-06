import MovieCard from "./MovieCard";

export default function MoviesSection(props) {
  // lists all movies from search inquiry
  return(
    <div className="h-full overflow-scroll bg-black">
      <div className="grid grid-flow-row lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-4 py-4 lg:max-w-7xl m-auto">
        {props.movies.map((movie) => 
          <MovieCard
            movie={movie}
            title={movie.Title}
            year={movie.Year}
            poster={movie.Poster}
          />
        )}
      </div>
    </div>
  )
}