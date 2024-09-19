export type Movie = {
    id: number;
    title: string;
    score: number;
    count: number;
    image: string;
}

export type Comment = {
    movieId: number;
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

export type CommentPage = {
    content: Comment[];
    last: boolean;
    totalPages: number;
    totalElements: number;
    size: number;
    number: number;
    first: boolean;
    numberOfElements: number;
    empty: boolean;
}