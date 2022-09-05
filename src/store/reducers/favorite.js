const INITIAL_STATE = {
    favoriteMovies:[],
  
  };
  
  export default function  favoritesReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_FAVORITES":
        return {
          ...state,
          favoriteMovies: action.payload,
        };
      default:
        return state;
    }
  }