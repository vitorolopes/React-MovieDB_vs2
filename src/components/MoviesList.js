import React from 'react';
import { useStateContext } from '../context/StateContextProvider';


const MoviesList = () => {

 const {dummyValue} = useStateContext();
 console.log(dummyValue);

  return (
    <div>MoviesList</div>
  )
}

export default MoviesList