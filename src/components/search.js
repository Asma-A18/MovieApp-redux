import React, { Component } from 'react'
import { connect } from "react-redux";
import { searchMovie } from "../redux/actions/actionCreators.js";

 class Search extends Component {

    state = {
        rating: 1,
        searchmovie: ""
      };

handleinput = (e) => {
this.setState({ searchmovie : e.target.value},
() => this.props.searchMovie({
        searchmovie: this.state.searchmovie,
      }),

)}


    render() {

        return (
            <div>
                   <input onChange={this.handleinput} className='search' placeholder='Search for a Movie Title...' type='search'></input>
            </div>
        )
    }
}



const mapStateToProps = state => {
    return {
      movielist: state.movielist,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      searchMovie: playload => dispatch(searchMovie(playload))
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Search);
