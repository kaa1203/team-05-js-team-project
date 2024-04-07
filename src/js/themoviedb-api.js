export const BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = "334986b59c344f376defb99ce94fed26";

export default class NewApiService {
    constructor() {
        this.searchQuery="";
        this.page = 1;
    }

    fetchpopularArticles() {
        const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
        return fetch(url)
        .then(response => response.json())
        .then(({ results}) => {
            return results;
        })
    }
    fetchSearchArticles() {
        const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
        return fetch(url)
        .then(response => response.json())
        .then(({ results}) => {
            return results;
    });
}
fetchpopularArticlesPages() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url).then(response => response.json());
}
fetchSearchArticlesPages() {
    const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&page=${this.page}&query=${this.searchQuery}`;
    return fetch(url).then(response => response.json());
}
fetchGenres() {
    const url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${this.page}`;
    return fetch(url)
    .then(response => response.json())
    .then( data => {
        return data.genres;
    });
}
insertGenresToMovieObj() {
    return this.fetchpopularArticles().then(data => {
        return this.fetchGenres().then(genresList => {
            return data.map(movie => ({
                ...movie,
                release_date: movie.release_date.split('-')[0],
                genres:movie.genre_ids
                .map(id => genresList.filter(el =>el.id === id))
                .flat(),
            }));
        });
    });
}
insertGenresToSearchObj() {
    return this.fetchSearchArticles().then(data => {
        return this.fetchGenres().then(genresList => {
            let release_date;
            return data.map(movie => ({
                ...movie,
                release_date:movie.release_date
                ? movie.release_date.split('-')[0]
                : 'n/a',
                genres:movie.genre_ids
                ? movie.genre_ids
                .map(id => genresList.filter(el => el.id ===id))
                .flat()
                :'n/a',
            }));
        });
    });
}
get query() {
    return this.searchQuery;
}
set query(newQuery) {
    this.searchQuery =newQuery;
}
get pageNumber() {
    return this.page;
}
set pageNumber(newPage) {
    this.page = newPage;
}
}
  