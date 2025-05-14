import { useEffect, useState } from "react"
import MovieController from "../controllers/MovieController"
import MovieItem from "./MovieItem"
import Navbar from "./Navbar"

const MovieList = () => {
    const [movies, setMovies] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        MovieController.fetchMovies()
            .then((movies) => {
                console.log(movies)
                setMovies(movies)
                setLoading(false)
            })
            .catch((error) => {
                setError(error)
                setLoading(false)
            })
    }, [])


    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>


    return (
        <>
            <Navbar></Navbar>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch", gap: "10px", cursor: "pointer" }}>
                {movies.map((movie) => {
                    return <MovieItem key={movie.id} movie={movie} />
                })}
            </div>
        </>
    )
}




export default MovieList