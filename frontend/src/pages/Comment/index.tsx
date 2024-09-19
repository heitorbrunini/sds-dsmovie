
import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/request";

//yarn run v1.22.10
function Comment() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 15,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true
    });

    useEffect(() => {
        axios.get(`${BASE_URL}/comments?size=15&page=${pageNumber}&sort=id`).then(
            response => {
                const data = response.data as MoviePage;
                setPage(data);
            }
        );
    }, [pageNumber]);

    const handlePageChange = (newPageNumber: number) => {
        setPageNumber(newPageNumber);
    }

    return (
        <>
           <br></br>
            <div className="container">
                <div className="row" >
                    {page.content.map(movie => (
                        <div key={movie.id} className="col mb-3">
                            <MovieCard movie={movie} />
                        </div>
                    ))}
                </div>
            </div>
            <Pagination page={page} onChange={handlePageChange} />

        </>
    );
}

export default Comment;