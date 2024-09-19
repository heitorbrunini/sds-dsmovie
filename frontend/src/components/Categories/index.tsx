import { MouseEvent } from "react";
import { MoviePage } from "types/movie";
import { useEffect, useState } from "react";
import { BASE_URL } from "utils/request";
import axios from "axios";

type CategoriasProps = {
    setPageParent: React.Dispatch<React.SetStateAction<MoviePage>>;
};

function Categorias({ setPageParent }: CategoriasProps) {
    const [activeCategory, setActiveCategory] = useState<string>("Todos os filmes");

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 15,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    const onClick = (event: MouseEvent<HTMLButtonElement>) => {
        const category = event.currentTarget.textContent;

        if (!category) return;

        setActiveCategory(category);  // Atualiza a categoria ativa

        if (category === "Todos os filmes") {
            axios.get(`${BASE_URL}/movies?size=15&page=0&sort=id`).then(
                response => {
                    const data = response.data as MoviePage;
                    setPage(data);
                }
            );
        } else {
            axios.get(`${BASE_URL}/movies/filter/${category}`).then(
                response => {
                    const data = response.data as MoviePage;
                    setPage(data);
                }
            );
        }
    };

    useEffect(() => {
        setPageParent(page);
    }, [page, setPageParent]);

    const categorias = [
        "Todos os filmes",
        "Drama",
        "Action",
        "Animation",
        "Comedy",
        "Crime",
        "Horror",
        "Romance",
        "Sci-Fi",
        "Thriller",
        "War",
    ];

    const Buttons = categorias.map((categoria, index) => (
        <button
            key={index}
            className={`btn btn-outline-success me-2 ${categoria === activeCategory ? "active" : ""}`}
            onClick={onClick}
            type="button"
            style={{ width: "150px" }}
        >
            {categoria}
        </button>
    ));

    return (
        <>
            <h2 style={{ textAlign: "center" }}>Categorias</h2>
            <nav className="navbar" data-bs-theme="dark">
                <form
                    className="container-fluid justify-content-start flex-nowrap"
                    style={{ overflowX: "auto", whiteSpace: "nowrap" }}
                >
                    {Buttons}
                </form>
            </nav>
        </>
    );
}

export default Categorias;
