import React, { createContext, useContext, useState, useEffect } from 'react';

const StateContext = createContext();
// http://www.omdbapi.com/?apikey=[yourkey]&
// OMDb parameters
// s: Movie title to search for
// https://www.omdbapi.com/?apikey=[mykey]&s=matrix

const baseUrl = `https://www.omdbapi.com/?apikey=abfefb4f&`

export const StateContextProvider = ( {children} ) => { 

    const [moviesData, setMoviesData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [query, setQuery] = useState("matrix");
    const [error, setError] = useState({msg:"", show: false})

      const fetchData = async (url) => {
        setIsLoading(true)
        try {
            const res = await fetch(url)
            const data = await res.json();
            console.log(data)

            if(data.Response === "True"){
                setMoviesData(data.Search)    
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
      fetchData(`${baseUrl}s=${query}`)
    }, [query])
    
    return(
        <StateContext.Provider
            value={{
                isLoading,
                moviesData,
                setQuery,
                error
            }}
        >
            { children }
        </StateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(StateContext)