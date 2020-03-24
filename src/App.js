import React, {Component} from 'react';
import './App.css';
import Moviecontainer from './components/moviecontainer';
import { connect } from "react-redux";
import Addmovie from './components/addmovie'
import Stars from './components/Rating'
import Withloading from './components/Withloading'
import {movielist} from './components/data'
import Moviedescription from './components/moviedesciption'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



 class App extends Component {
  constructor(props){
    super(props)
    // this.state = {
    //   searchmovie : '',
    //   movielist: movielist,
    // movierate : 1
    // }
  }

 


// handleChangeRating =(star) =>{
//   this.setState({
//     movierate: star
//   })
// }

  render() {

   
    return (
      <div>
        <Router>
        
        {/* <Stars   */}
        {/* // count={this.state.movierate}
        //  handleChangeRating={this.handleChangeRating}
         /> */}
        <Route exact path="/" render={() =>( 
          <div>
        <Moviecontainer/>
        <Addmovie/>
        </div>)} />
        
        <Withloading/>
        <Switch>
        {this.props.movielist.map(el => (
        <Route key={el.id}  exact path={`/${el.id}`} render={() => (
            <div>
              <Stars count={el.rating}/>
              <Moviedescription movie={el} />
            </div>
           
          )}
        />
       
      ))}
       </Switch>
            </Router>

      </div>
    )
  }
}



const mapStateToProps = state => {
  return {
    movielist: state.movielist
  };
};








export default connect(mapStateToProps) (Withloading(App));
