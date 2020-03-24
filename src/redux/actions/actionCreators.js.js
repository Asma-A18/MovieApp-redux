import {
    SEARCH,
    ADD_MOVIE,
    EDIT_MOVIE,
    DELETE_MOVIE,
    SEARCH_RATING
  } from "../const/actionTypes";
  
  export const searchMovie = payload => {
    return { type: SEARCH, payload };
  };
  export const addMovie = payload => {
    return { type: ADD_MOVIE, payload };
  };
 
  export const remove = id => {
    return { type: DELETE_MOVIE, id:id };
  };

  export const searchRating = payload => {
    return { type: SEARCH_RATING, payload };
  };

  export const editMovie = (payload, id) => {
    return { type: EDIT_MOVIE, payload,id };
  };