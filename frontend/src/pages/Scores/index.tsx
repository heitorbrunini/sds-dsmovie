
import axios from "axios";
import CommentCard from "components/CommentCard";
import Pagination from "components/pagination";
import { useEffect, useState } from "react";
import { ScorePage } from "types/movie";
import { BASE_URL } from "utils/request";

//yarn run v1.22.10
function Scores() {

    const [pageNumber, setPageNumber] = useState(0);

    const [page, setPage] = useState<ScorePage>({
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
        axios.get(`${BASE_URL}/scores?size=15&page=${pageNumber}&sort=id`).then(
            response => {
                const data = response.data as ScorePage;
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
                    {page.content.map(score => (
                        
                        <div className="col mb-3">
                            <CommentCard score={score} />
                        </div>

                    ))}
                </div>
            </div>
            <Pagination page={page} onChange={handlePageChange} />

        </>
    );
}

export default Scores;