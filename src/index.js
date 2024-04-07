import { BASE_URL, params } from './themoviedb-api.js';
const { language, key } = params.option;

const movieGalleryEl = document.querySelector('.movie-list');

async function fetchGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  );
  const data = await res.json();
  return data.genres;
  //{genres: [{}, {}]}
}

async function fetchTrending() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}`
  );
  const data = await res.json();
  return data;
}

async function getGenres(genre_ids) {
  try {
    let allGenres = await fetchGenres();
    // console.log(allGenres);
    let matchingGenres = allGenres
      .filter(genre => genre_ids.includes(genre.id))
      .map(genre => genre.name);
    return matchingGenres;
    //['Drama', 'History']
  } catch (e) {
    console.log(e);
  }
}

function displayMovies() {
  try {
    fetchTrending().then(val => {
      createCards(val.results);
    });
  } catch (e) {
    console.log(e);
  }
}

function createCards(movies) {
  movies
    .map(
      async ({
        id,
        popularity,
        poster_path,
        original_title,
        title,
        release_date,
        overview,
        genre_ids,
        vote_average,
        vote_count,
      }) => {
        let genres = await getGenres(genre_ids);
        let year = release_date.split('-');
        let moviesEl = `
                <li class="movie-item" data-id=${id}>
                    <a href="https://image.tmdb.org/t/p/w500/${poster_path}" class="movie-link">
                        <div class="movie-card" data-popularity=${popularity.toFixed(1)}>
                            <img src="https://image.tmdb.org/t/p/w500/${poster_path}" alt="${overview}">
                            <div class="movie-details">
                                <p class="movie-title" data-title="${original_title}">${title}</p>
                                <span>${genres.map(genre => ` ${genre}`)}</span>
                                <span data-year="${year[0]}">| ${year[0]}</span>
                                <p data-count="${vote_count}">${vote_average.toFixed(1)}</p>
                            </div>
                        </div>
                    </a>
                </li>
            `;
        movieGalleryEl.insertAdjacentHTML('afterbegin', moviesEl);
      }
    )
    .join('');
}

function localSetter() {
  let watchlist = localStorage.getItem("watchList");
  let queuelist = localStorage.getItem("queueList");
  
  if (watchlist === null || watchlist.length === 0) {
    localStorage.setItem("watchList", "[]");
    
  }
  if (queuelist === null || watchlist.length === 0) {
    localStorage.setItem("queueList", "[]");    
  }
}

localSetter();
document.addEventListener('DOMContentLoaded', displayMovies);
