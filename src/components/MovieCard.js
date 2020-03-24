import React from 'react'
import {  Link } from "react-router-dom"



 function MovieCard({ movie,  remove = () => {} }) {
    return (
        <>
        <div>            
</div>
            <div className="moviecard">            
            <button className='rbutton' onClick={remove}>x</button>
            <img className='poster' src ={movie.img}/>
            <p>{movie.title}</p>
            <span>{movie.count}</span>
            <p className='year'>{movie.year}</p>
            </div>
            <div>
            <Link   to ={`/${movie.id}`}><button className='dbutton'>About</button></Link>
        </div> </>
    )
}


 
  export default MovieCard