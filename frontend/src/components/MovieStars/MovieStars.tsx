import {ReactComponent as StarFull} from "assets/star-full.svg";
import {ReactComponent as StarHalf} from "assets/star-half.svg";
import {ReactComponent as StarEmpty} from "assets/star-empty.svg";

function MovieStars(){
    return(
        <div className="dsmovie-stars-container">
            <StarFull/>
            <StarFull/>
            <StarHalf/>
            <StarEmpty/>
            <StarEmpty/>
        </div>
    );
}

export default MovieStars;