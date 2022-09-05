import React ,{useContext, useState} from "react";
import { useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import addFavorites from './../../store/actions/favorite';
import axiosInstance from './../../axiosConfig/instance';



export default function Movies() {
  let[movies, setMovies]=useState([])
    let[page,  setPage]=useState(1)
     
     useEffect(()=>{
        axiosInstance.get("movie/popular",{params:{page:page}})
        .then((res)=>{
            console.log(res)
            setMovies(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })

     },[page]);
     
       function prevBtn(){
        if(page>0){
            setPage(page=> page-1)
        }
     }
     function nextBtn(){
        if(page>0){
            setPage(page=> page+1)
        }
     };

  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(changeMovies())
  // }, []);
  
 
  let[favorites, setFavorites]=useState([])
      
  const addFavMovie=(favmovie)=>{
   console.log(favmovie)
       if(favorites.some(fav=>fav.id===favmovie.id)){
         setFavorites(favorites.filter(fil=>fil.id !== favmovie.id))
       }else{
         setFavorites(favorites.concat(favmovie))
       }   
  }   
  dispatch(addFavorites(favorites)) //action

  return (
    <>
   
    <div className="container">
        <div className="row ">
          {movies.map((movie) => {
            return (
              <Card className="m-auto d-grid " style={{ width: "20rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Link to={`/details/${movie.id}`} key={movie.id}>
                 
                    <Button className="btn btn-primary">Details</Button>
                    <Link to="/favorites"><i

                    className={`fa-solid fa-star ${favorites.some(fav=>fav.id === movie.id)? 'text-warning':' text-white'}  `}

                    onClick={()=>addFavMovie(movie)} style={{  fontSize: '30px', position:"absolute",bottom:"2%", right:"2%"}}></i></Link>
                  </Link>
                </Card.Body>
              </Card>
            );
          })}
        </div>
      </div>
      <div className="container d-flex justify-content-between">
           <button   onClick={()=>prevBtn()} className="btn btn-secondary ms-5 my-5"> &larr; previous</button>
           <button   onClick={()=>nextBtn()} className="btn btn-primary me-5 my-5"> Next &rarr; </button>
            
           </div>
      </>
  );
}
  