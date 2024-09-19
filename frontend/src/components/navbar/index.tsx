import { Link } from "react-router-dom";
import { useEffect, useState, ChangeEvent } from "react";
import { Movie } from 'types/movie';
import { BASE_URL } from 'utils/request';
import axios from 'axios';


function Navbar() {
    const [searchValue, setSearchValue] = useState('');
    const [movie, setMovie] = useState<Movie>();

    const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    useEffect(() => {
        axios.get(`${BASE_URL}/movies/name/${searchValue}`)
            .then(response => {
                setMovie(response.data);
                console.log(response.data);
            });
    }, [searchValue]);

    return (
        <div>
            <header>
                <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">

                    <div className="container-fluid">

                        <a className="navbar-brand text-success"> CineNine</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <Link to="/">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" >Home</a>
                                </li>
                            </Link>
                            <li className="nav-item">
                                <a className="nav-link">Comentarios</a>
                            </li>

                            <Link to="/about">
                                <li className="nav-item">
                                    <a className="nav-link" >Sobre</a>

                                </li>
                            </Link>
                            <Link to="/Contact">
                                <li className="nav-item">
                                    <a className="nav-link" >Contato</a>

                                </li>
                            </Link>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 " onChange={handleSearchChange} type="search" placeholder="Pesquisar" aria-label="Search"></input>

                            <Link to={`/form/${movie?.id}`}>
                                <button className="btn btn-outline-success" type="submit">Buscar</button>
                            </Link>

                        </form>

                    </div>
                </nav>

            </header>
        </div>
    );

}
export default Navbar;