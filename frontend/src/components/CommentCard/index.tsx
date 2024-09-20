import { Movie, Score, User } from "types/movie";
import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from 'utils/request';

type Props = {
    score: Score
}

function CommentCard({ score }: Props) {

    const [movie,setMovie] = useState<Movie>();

    useEffect( () =>{
        axios.get(`${BASE_URL}/movies/${score.movieId}`)
        .then(response => {
            setMovie(response.data);
        });
    },[score.movieId]);

    return (
        <div>

            <div className="card" data-bs-theme="dark">
                <div className="card-header">
                    {movie?.title}
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>{score.value}</p>
                        <p>{score.comment}</p>
                        <footer className="blockquote-footer">{score.email}</footer>
                    </blockquote>
                </div>
            </div>

        </div>
    );
}

export default CommentCard;
