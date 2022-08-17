import React, { createContext, useContext, useEffect } from 'react';

const StateContext = createContext();
// http://www.omdbapi.com/?apikey=[yourkey]&
// OMDb parameters
// s: Movie title to search for
// https://www.omdbapi.com/?apikey=[mykey]&s=matrix

export const StateContextProvider = ( {children} ) => { 

    const dummyValue = "This is a dummy value";

    const fetchData = async () => {
        try {
            const res = await fetch("https://www.omdbapi.com/?apikey=abfefb4f&s=matrix")
            const data = await res.json();
            console.log(data)
        } catch (error) {
            console.log(error);
        }
       
    }

    useEffect(() => {
      fetchData()
    }, [])
    

    return(
        <StateContext.Provider
            value={{
                dummyValue
            }}
        >
            { children }
        </StateContext.Provider>
    )
 }

 export const useStateContext = () => useContext(StateContext)