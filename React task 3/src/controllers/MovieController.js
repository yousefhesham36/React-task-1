import axios from "axios";
import MovieModel from "../models/movieModel";
const apiKey = "a7c476e8f5c69fae990421fbb0289d4d";
class MovieController {
    static async fetchMovies() {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`);
            console.log(response)
            return response.data.results.map((movie) => {
                // console.log(movie)
                return new MovieModel(
                    movie.id,
                    movie.title,
                    movie.overview,
                    movie.poster_path,
                    movie.release_date,
                    movie.vote_average
                )
            })
        } catch (error) {
            console.log(error);
        }
    }
}
export default MovieController