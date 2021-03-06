import './styles.css';
import {Link } from "react-router-dom";
import { Movie } from 'types/movie';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from 'utils/request';

    
type Props ={
    movieId : string;
}

function FormCard({movieId} : Props) {

    const [movie,setMovie] = useState<Movie>();

    useEffect( () =>{
        axios.get(`${BASE_URL}/movies/${movieId}`)
        .then(
            response => {
                setMovie(response.data);
            }
        )
    },[movieId]);

    return (            
            <div className="dsmovie-form-container">
                <img className="dsmovie-movie-card-image" src={movie?.image} alt={movie?.title} />
                <div className="dsmovie-card-bottom-container">
                    <h3> {movie?.title}</h3>
                    <form className="form-group dsmovie-form-group">
                        <div className="dsmovie-form">
                            <label htmlFor="email">Informe seu Email</label>
                            <input type="email" className="form-control"></input>
                        </div>
                        <div className="form-group dsmovie-form-group">
                            <label htmlFor="score">Informe sua Avaliação</label>
                            <select className="form-control" id="score">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>                        
                        <div className="dsmovie-form-btn-container">
                            <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
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