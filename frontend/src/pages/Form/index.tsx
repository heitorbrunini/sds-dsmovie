import './styles.css';

function Form() {
    const movie = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/original/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    }
    return (

            <div className="dsmovie-form-container">
                <img className="dsmovie-movie-card-image" src={movie.image} alt={movie.title} />
                <div className="dsmovie-card-bottom-container">
                    <h3> {movie.title}</h3>
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
                    </form>
                    <div className="dsmovie-form-btn-container">
                        <button type="submit" className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                    <div className="dsmovie-form-btn-container">
                        <button className="btn btn-primary dsmovie-btn mt-3">Cancelar</button>
                    </div>
                </div>
            </div>
    );
}

export default Form;