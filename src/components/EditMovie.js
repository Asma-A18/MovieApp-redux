import React, { Component } from 'react'
import {Button, Modal} from 'react-bootstrap'
import {editMovie, saveEdit} from '../redux/actions/actionCreators.js'
import { connect } from "react-redux";

 class EditMovie extends Component {


    state={
        show:false,
        movie :{
            title : '',
            year : '',
            img : '',
            rating: ''
        }
  
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


    handleclick=(id)=>{
        this.props.editMovie({
        title:this.props.title,
        rating:this.props.rating,
        img:this.props.img,
        year:this.props.year,
     
      });
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
            <input name="newtitle" onChange={this.handlename}  type="text" placeholder="Movie name..." />
            <input name="newimg"  onChange={this.handlename} type="text" placeholder="Image URL ..." />
            <input name="newrating"  onChange={this.handlename} type="text" placeholder="Rating..." />
            <input name="newyear"  onChange={this.handlename} type="text" placeholder="Year..." /></form>

          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleShow}>
              Close
            </Button>
            <Button variant="primary"  onClick={(e) => { this.handleclick()}} >
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
    editMovie: id => {
      dispatch(editMovie(id));
    },

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie)