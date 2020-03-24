import {
    SEARCH,
    ADD_MOVIE,
    EDIT_MOVIE,
    SAVE_EDIT,
    DELETE_MOVIE,
    SEARCH_RATING
  } from "../const/actionTypes";

  import { movielist } from "../../components/data";
  
  const initialState = {
    movielist: movielist,
    searchmovie: "",
    movierate: 1,
  };
  
  const RootReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_MOVIE:
        return {
          ...state,
          movielist: state.movielist.concat(action.payload)
        };



        case EDIT_MOVIE:
          return {
            ...state,
            movielist: state.movielist.map(movie =>
              movie.id === action.id
                ? {...action.payload,
                  id:action.id

                  }
                : movie
            )
          };


      case DELETE_MOVIE:
        return {
          ...state,
          movielist: state.movielist.filter(movie => movie.id !== action.id)
        };


        
      case SEARCH:
        return {
          ...state,
          searchmovie: action.payload.searchmovie,
        
        };
  
        case SEARCH_RATING:
          return { ...state, movierate: action.payload };


      default:
        return state;
    }
  };
  
  export default RootReducer;