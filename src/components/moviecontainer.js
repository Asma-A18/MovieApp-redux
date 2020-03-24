import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import { remove, editMovie } from "../redux/actions/actionCreators.js";
import { searchRating } from "../redux/actions/actionCreators.js";
import Stars from './Rating'
import Search from './search'
import EditMovie from './EditMovie'
import React, { Component } from 'react'








class Moviecontainer extends Component {
  

  render() {
    return (
      <div>
        <Stars count = {this.props.movierate} handleChangeRating={this.props.handleChangeRating}/>
      <Search />
      

      <div className='container'>
        {this.props.movielist
        .filter(
          movie => movie.title.toLowerCase().includes(this.props.searchmovie.toLowerCase().trim()) && movie.rating >= this.props.movierate

        )
        .map(el => (
          <div>
          <Stars count={el.rating}/>
          <MovieCard
            movie={el}
            key={el.id}
            remove={() => this.props.remove(el.id)}
          />
          <EditMovie oldMovie={el}/>
          </div>
            ))}
      </div>
    </div>)
  }
}



const mapStateToProps = state => {
  return {
    movielist: state.movielist,
    searchmovie: state.searchmovie,
    movierate: state.movierate
  };
};
const mapDispatchToProps = dispatch => {
  return {
    remove: id => dispatch(remove(id)),
handleChangeRating : payload => dispatch (searchRating(payload))

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Moviecontainer)
;


 








