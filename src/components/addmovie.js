import React, { Component } from "react";
import {Button, Modal} from 'react-bootstrap'
import { connect } from "react-redux";
import {addMovie} from '../redux/actions/actionCreators.js'




class Addmovie extends Component {
    state={
        show:false,
        movie :{title:'',
        year:'',
        img : '',
        rating: ''}
  
    }
  handleShow = () =>{
        this.setState({
            show: !this.state.show
    })};

  
    handlename = (e) => {
      this.setState({
        movie: {
          ...this.state.movie,
          [e.target.name]: e.target.value
        }
      });
    };      
    
    

  render() {
    return (
      <>
        <Button variant="primary" className='addmovie-btn' onClick={this.handleShow}>
          +
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h1 style={{color : "black"}} >Add a Movie</h1>

          <form >
            <input name="title"    onChange={this.handlename}  type="text" placeholder="Movie name..." />
            <input name="img"  onChange={this.handlename} type="text" placeholder="Image URL ..." />
            <input name="rating"  onChange={this.handlename} type="text" placeholder="Rating..." />
            <input name="year"  onChange={this.handlename} type="text" placeholder="Year..." /></form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary"  onClick={(e) => { e.preventDefault(); this.props.addMovie(this.state.movie)}} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}



const mapStateToProps = state => {
  return {
    movielist: state.movielist,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addMovie: payload => dispatch(addMovie(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Addmovie)


