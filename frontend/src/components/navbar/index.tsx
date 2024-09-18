import { ReactComponent as Githubicon } from 'assets/Vector.svg'
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div>
            <header>
                <nav className="navbar bg-dark navbar-expand-lg " data-bs-theme="dark">

                    <div className="container-fluid">

                        <a className="navbar-brand"> CineNine</a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#"><Link to="/">Home</Link></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Comentarios</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Sobre</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </header>
        </div>
    );

}
/*
<nav classNameNameName="container">
                    <div classNameNameName="dsmovie-nav-content">

                   
                        
                        <a href="https://github.com/heitorbrunini">
                            <div classNameNameName="dsmovie-contact-container">
                                <Githubicon />
                                <p classNameNameName="contact-link">
                                    <br/>
                                    /heitorbrunini
                                </p>
                            </div>
                        </a>
                    </div>
                </nav>


*/
export default Navbar;