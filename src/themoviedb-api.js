export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "334986b59c344f376defb99ce94fed26";

export const params = {
    option: {
        key: API_KEY,
        query: "",
        include_adult: false,
        language: "en-US",
        primary_release_year: "",
        page: 1,
        region: "",
        year: ""
    },

    export const fetchpopularArticles = () => {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${params.page}`;
        return fetch(url)
            .then(response => response.json())
            .then(({ results }) => results);
    },
    
    export const fetchSearchArticles = () => {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${params.page}&query=${params.query}`;
        return fetch(url)
            .then(response => response.json())
            .then(({ results }) => results);
    },
    
    export const fetchpopularArticlesPages = () => {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${params.page}`;
        return fetch(url).then(response => response.json());
    },
    
    export const fetchSearchArticlesPages = () => {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${params.page}&query=${params.query}`;
        return fetch(url).then(response => response.json());
    },
    
    export const fetchGenres = () => {
        const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
        return fetch(url)
            .then(response => response.json())
            .then(data => data.genres);
    },
    
    export const insertGenresToMovieObj = () => {
        return fetchpopularArticles().then(data => {
            return fetchGenres().then(genresList => {
                return data.map(movie => ({
                    ...movie,
                    release_date: movie.release_date.split('-')[0],
                    genres: movie.genre_ids.map(id => genresList.find(el => el.id === id)),
                }));
            });
        });
    },
    
    export const insertGenresToSearchObj = () => {
        return fetchSearchArticles().then(data => {
            return fetchGenres().then(genresList => {
                return data.map(movie => ({
                    ...movie,
                    release_date: movie.release_date ? movie.release_date.split('-')[0] : 'n/a',
                    genres: movie.genre_ids ? movie.genre_ids.map(id => genresList.find(el => el.id === id)) : 'n/a',
                }));
            });
        });
    },
    
    export const getQuery = () => params.query,
    export const setQuery = newQuery => { params.query = newQuery; },
    
    export const getPageNumber = () => params.page,
    export const setPageNumber = newPage => { params.page = newPage; },
}