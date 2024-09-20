export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type Score = {
    movieId: number;
    value: number;
    email: string;
    comment: string;
}

export type MoviePage = {
    content: Movie[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type ScorePage = {
    content: Score[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}

export type User ={
    id: number;
    email: string;
}

export type PaginationProps<T extends { first: boolean; last: boolean; number: number; totalPages: number }> = {
    page: T;
    onChange: (pageNumber: number) => void;
};