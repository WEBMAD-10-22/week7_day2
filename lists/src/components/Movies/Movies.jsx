import { useState } from 'react'
import data from '../../movies.json'
import MovieCard from '../MovieCard/MovieCard'
import './Movies.css'

const Movies = () => {

    const [movies, setMovies] = useState(data)

    const deleteMovie = (id) => {
        const newMovies = movies.filter(movie => movie._id !== id)
        setMovies(newMovies)
    }

    return (
        <div className='movies'>
            {
                movies.map(movie => {
                    return (
                        <MovieCard key={movie._id} movie={movie} deleteMovie={deleteMovie} />
                    )
                })
            }
        </div>
    )
}

export default Movies