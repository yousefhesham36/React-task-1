import styles from "./styles.module.css"
const MovieItem = ({ movie }) => {
    return (
        <div className={styles["child"]}>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3 style={{ padding: "10px", color: "blue" }}>{movie.title}</h3>
            {/* <p>{movie.overview}</p> */}
            <p style={{ padding: "10px", fontSize: "20px", fontWeight: "bold" }}>Release date :{movie.release_date}</p>
            <p style={{ padding: "10px", fontSize: "20px", color: "gold", fontWeight: "bold" }}>Vote :{movie.vote_average}</p>
        </div>
    )
}

export default MovieItem