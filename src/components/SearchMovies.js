import React from 'react';
import { useStateContext } from '../context/StateContextProvider';

const SearchMovies = () => {

  const {query, setQuery, error} = useStateContext();

  return (
    <div>
      
        <form className="search-form" onSubmit={e => e.preventDefault}>
          <h2>search movies</h2>
          <input type="text" className="form-input"
                 value={query}
                 onChange={(e) => setQuery(e.target.value)}
          />
           { error.show && <div className="error">{error.msg}</div>}
        </form>

       
       
    </div>
  )
}

export default SearchMovies