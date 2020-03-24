import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import {editMovie} from '../redux/actions/actionCreators.js'
import { connect } from "react-redux";

 class EditMovie extends Component {


    state={
        show:false,
        movie :{
          title : '',
          img : '',
          rating : '',
          year: ''
        }
  
    }

    componentDidMount = ()=> {
      this.setState ({
        movie : this.props.oldMovie
      })
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


    handleclick=()=>{
        this.props.editMovie(
         this.state.movie,
         this.props.id
          
        );
     }
    render() {
        return (
            <div>
              <Button className='ebutton' variant="primary" onClick={this.handleShow}>
          Edit
        </Button>
        <Modal show={this.state.show} onHide={this.handleShow} animation={false}>
          <Modal.Header closeButton>
            <Modal.Title>

            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <h1 style={{color : "black"}} >Edit a Movie</h1>

          <form >
            <input name="title" value={this.state.movie.title} onChange={this.handlename}  type="text" placeholder="Movie name..." />
            <input name="img" value={this.state.movie.img} onChange={this.handlename} type="text" placeholder="Image URL ..." />
            <input name="rating"value={this.state.movie.rating}  onChange={this.handlename} type="text" placeholder="Rating..." />
            <input name="year" value={this.state.movie.year} onChange={this.handlename} type="text" placeholder="Year..." /></form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary"  onClick={(e) =>  this.props.editMovie( this.state.movie, this.props.oldMovie.id)} >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>  
            </div>
        )
    }
}

const mapStateToProps = state => ({ movielist: state.movielist });

const mapDispatchToProps = dispatch => {
  return {
    editMovie: (payload,id) => {
      dispatch(editMovie(payload,id));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie)