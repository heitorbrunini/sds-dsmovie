import MovieScore from "components/MovieScore";
import {Link} from "react-router-dom";
import { Movie } from "types/movie";

type Props = {
    movie: Movie;
}

function MovieCard( {movie} : Props  ) {
    
    return (
        <div>
            <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
            <div className="dsmovie-card-bottom-container">
                <h3 className="movie-title">{movie.title}</h3>
                <MovieScore score={movie.score} count={movie.count} />
                <Link to = {`/form/${movie.id}`}>
                    <div className="btn btn-success dsmovie-btn">Avaliar</div>
                </Link>
                

            </div>
        </div>
    );
}

export default MovieCard;
