import React, {useEffect} from 'react';
import { useStateContext } from '../context/StateContextProvider';
import {Link} from 'react-router-dom'

const backUpPoster =  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png"

const MoviesList = () => {
                                //! HERE
 const { moviesData, isLoading, fetchBothData, query, baseUrl} = useStateContext();
//! HERE
 useEffect(() => {
    fetchBothData(`${baseUrl}s=${query}`)
}, [query])

 if(isLoading) {
    return (
        <div className='loading'></div>
    )
 }

  return (
    <section className='movies'>
        {moviesData.map( movie => {
            const {Poster, Title, Year, imdbID} = movie;
            return(
                <div className="movie">
                    {
                        <Link to= {`/movies/${imdbID}` }>
                            <article>
                                <img src={Poster === "N/A" ? backUpPoster : Poster} alt={Title} />
                                <div className="movie-info">
                                    <h4>{Title}</h4>
                                    <p>{Year}</p>
                                </div>
                            </article>
                       </Link>
                    }
                </div>
            )
        })}
    </section>
  )
}

export default MoviesList