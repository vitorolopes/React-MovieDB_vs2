import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();
// http://www.omdbapi.com/?apikey=[yourkey]&
// OMDb parameters
// s: Movie title to search for
// https://www.omdbapi.com/?apikey=[mykey]&s=matrix

export const baseUrl = `https://www.omdbapi.com/?apikey=abfefb4f&`

export const StateContextProvider = ( {children} ) => { 

    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [query, setQuery] = useState("matrix");
    const [error, setError] = useState({msg:"", show: false})
    const [singleMovieData, setSingleMovieData] = useState({});
//! HERE
    const fetchBothData = async (url) => { // 2) Substituted the 2 fetch functions 
        // by fetchBothData(). This function either fetches the Movies Data or
        // the Single Movie Data, depending on the argument of fetchBothData().
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json();
           
            if(data.Response === "True"){ 
                if(data.Search){
                    setMoviesData(data.Search)    
                    setError({show: false, msg: ""})  
                    console.log("Movies Data:", data) 
                } else {
                    setSingleMovieData(data)
                    console.log("Single Movie Data:", data) 
                }   
            } else {
                setError({show: true, msg: data.Error})
            }
            setIsLoading(false)
            } catch (error) {
                console.log(error);
            }
        }
   
    return(
        <StateContext.Provider
            value={{
                isLoading, moviesData, setQuery, error,
                singleMovieData, query, baseUrl, fetchBothData   
            }}
        >
            { children }
        </StateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(StateContext)