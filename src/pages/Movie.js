import React, {useState, useEffect} from 'react';
import { baseUrl } from '../context/StateContextProvider';
import {useParams, Link} from 'react-router-dom';

const Movie = () => {

  const [singleMovieData, setSingleMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState({msg:"", show: false})

  const {id} = useParams();
 

  const fetchData = async (url) => {
    setIsLoading(true)
    try {
        const res = await fetch(url)
        const data = await res.json();
        console.log(data)

        if(data.Response === "True"){
            setSingleMovieData(data)    
            setError({show: false, msg: ""})      
        } else {
            setError({show: true, msg: data.Error})
        }
        setIsLoading(false)
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
      fetchData(`${baseUrl}i=${id}`)
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