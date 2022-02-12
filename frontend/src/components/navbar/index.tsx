
import { ReactComponent as Githubicon } from 'assets/Vector.svg'
import './styles.css';
function Navbar() {
    return (
        <div>
            <header>
                <nav className="container">
                    <div className="dsmovie-nav-content">
                        <h1>DSMovie</h1>
                        <a href="https://github.com/heitorbrunini">
                            <div className="dsmovie-contact-container">
                                <Githubicon />
                                <p className="contact-link">
                                    /heitorbrunini
                                </p>
                            </div>
                        </a>
                    </div>
                </nav>
            </header>
        </div>
    );

}

export default Navbar;