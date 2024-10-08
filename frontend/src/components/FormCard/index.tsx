import './styles.css';
import { Link } from "react-router-dom";
import { Movie } from 'types/movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import { BASE_URL } from 'utils/request';
import { color } from 'framer-motion';

type Props ={
    movieId : string;
}

function FormCard({movieId} : Props) {
    const navigate = useNavigate();

    const [movie,setMovie] = useState<Movie>();
    const [email, setEmail] = useState<string>('');
    const [comment, setComment] = useState<string>('');
    const [score, setScore] = useState<number>(1); // Define o valor inicial da avaliação como 1

    useEffect( () =>{
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(response => {
            setMovie(response.data);
        });
    },[movieId]);

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleScoreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setScore(Number(e.target.value));
    }

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setComment(e.target.value);
    }

    const handleSaveButtonClick = () => {
        
        axios.post(`${BASE_URL}/scores`, {
            movieId: movieId,
            email: email,
            score: score,
            comment: comment
        }).then(response => {
            console.log('Avaliação salva com sucesso!');
            navigate('/');  // Redireciona para a página inicial "/"
        }).catch(error => {
            console.error('Erro ao tentar salvar a avaliação:', error);
        });

    }

    return (            
        <div className="dsmovie-form-container" data-bs-theme="dark">
            <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
            <div className="dsmovie-card-bottom-container">
                <h3 style={{color:'white'}}> {movie?.title}</h3>
                <form className="form-group dsmovie-form-group">
                    <div className="dsmovie-form">
                        <label htmlFor="email">Informe seu Email</label>
                        <input type="email" className="form-control" onChange={handleEmailChange}></input>
                    </div>
                    <div>
                        <label htmlFor="text">Informe um breve comentário:</label>
                        <input type="text" className="form-control" onChange={handleCommentChange}></input>
                    </div>
                    <div className="form-group dsmovie-form-group">
                        <label htmlFor="score">Informe sua Avaliação:</label>
                        <select className="form-control" id="score" onChange={handleScoreChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>                    

                    <div className="dsmovie-form-btn-container">
                        <button type="button" className="btn btn-primary dsmovie-btn" onClick={handleSaveButtonClick}>Salvar</button>
                    </div>
                </form>

                <Link to = "/">
                    <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                </Link>
            </div>
        </div>
    );
}

export default FormCard;
