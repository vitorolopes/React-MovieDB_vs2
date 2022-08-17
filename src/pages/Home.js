import React from 'react'
import MoviesList from '../components/MoviesList'
import SearchMovies from '../components/SearchMovies'

const Home = () => {
  return (
    <main className='section'>
        <SearchMovies/>
        <MoviesList/>
    </main>
  )
}

export default Home