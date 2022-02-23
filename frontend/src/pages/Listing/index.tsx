
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import './styles.css';

function Listing(){
    return(
        <>
            <Pagination/>
            <div className= "container">
                <div className="row" >
                    <div className="col mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col mb-3">
                        <MovieCard/>
                    </div>
                    <div className="col mb-3">
                        <MovieCard/>
                    </div>
                </div> 
            </div>
            
        </>
    );
}

export default Listing;