import React, {useState, useEffect} from 'react';
import { baseUrl } from '../context/StateContextProvider';
import {useParams, Link} from 'react-router-dom';
import { useStateContext } from '../context/StateContextProvider';

const Movie = () => {
//! HERE
 // 1a) Removed the state variables previously defined in Movie.js
 // to StateContextProvider. Get them with useStateContext()
  const { singleMovieData, isLoading, error, fetchBothData} = useStateContext();

  const {id} = useParams();
 //! HERE
 // 1b) Moved fetchDataSingleMovie to StateContextProvider
  
  useEffect(() => {
      fetchBothData(`${baseUrl}i=${id}`)
  }, [id])
    

  if(isLoading){
      return(<div className='loading'></div>)
  }

    if(error.show){
      return(
        <div className="page-error">
          <h1>{error.msg}</h1>
          <Link to="/" className='btn'>
            back to movies
          </Link>
        </div>
      )
    }
 
  const { Poster, Title, Plot, Year  } = singleMovieData

  return ( 
    <section className='single-movie'>
    <img src={Poster} alt={Title} />
    <div>
      <h2>{Title}</h2>
      <p>{Plot}</p>
      <h4>{Year}</h4>
      <Link to="/" className='btn'>
        back to movies
      </Link>
    </div>
    </section>
  )
}

export default Movie