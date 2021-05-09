// reducer for adding and removing movies fro nominated list
const nominationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADDMOVIE':
      if (state.length < 5 && !state.includes(action.payload)) {
        return [...state, action.payload]
      } else {
        return state;
      }
    case 'REMOVEMOVIE':
      return state.filter(movie => 
        movie !== action.payload
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  } 
}

export default nominationsReducer;