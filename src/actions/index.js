export const addMovie = (movie) => {
  return {
    type: 'ADDMOVIE',
    payload: movie,
  }  
}

export const removeMovie = (movie) => {
  return {
    type: 'REMOVEMOVIE',
    payload: movie,
  }
}

export const clearMovies = () => {
  return {
    type: 'CLEAR',
  }
}