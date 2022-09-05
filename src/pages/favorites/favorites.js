import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import { useState} from 'react';
import {Link} from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import addFavorites from './../../store/actions/favorite';

const FavoritesMovies = () => {

    const dispatch=useDispatch()
    const moviesList=useSelector((state)=>state.favoriteMovies) //reducer
    const[newFavList, setNewFavList]=useState(moviesList)
// console.log(moviesList)
    const removeFavMovie=(movieID)=>{
        setNewFavList(moviesList.filter(remove=>remove.id !== movieID))
    }
    dispatch(addFavorites(newFavList)) //action

    return (
         <>
          <div className='container'>
                    <div className='row m-2'>
                 {moviesList.map((movie) => {
            return (
                <div className=" col-md-4 col-sm-6 v my-2 " > 
                <div className="card shadow-sm w-100 bg-secondary text-white" style={{  position:'relative',height:800}} >
                
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:300}} alt="O  "/>
                    <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">{movie.overview}</p>

                    <Link to={`/details/${movie.id}`}><a  className="btn btn-primary">show details</a></Link>
                    {/* <i className={`fa-solid fa-star ${favorites.some(fav=>favorites.id==m.id)?'text-danger':'text-white'}`}
                    onClick={()=>addFavMovie(m)}></i> */}
                    <i className="fa-solid fa-star text-warning"
                    onClick={()=>removeFavMovie(movie.id)} 
                    style={{  fontSize: '30px', position:"absolute",bottom:"2%", right:"2%"}}></i>

                </div>          
                </div>
                </div> 
            );
          })}
          </div>
           </div>
          </>        
    );
}

export default FavoritesMovies;
