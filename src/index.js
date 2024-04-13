import { BASE_URL, params } from './themoviedb-api.js';
let { language, key, page } = params.option;

export const movieGalleryEl = document.querySelector('.movie-list');
export const loaderEl = document.querySelector(".loader");

// fetch the genre list
async function fetchGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  );
  const data = await res.json();
  return data.genres;
}

export async function fetchTrending() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}&page=${page}`
  );
  const data = await res.json();
  return data;
}

// get the genre value from genre_ids
async function getGenres(genre_ids) {
  try {
    let allGenres = await fetchGenres();
    let matchingGenres = allGenres
      .filter(genre => genre_ids.includes(genre.id))
      .map(genre => genre.name);
    return matchingGenres;
  } catch (e) {
    console.log(e);
  }
}

// Display the movies that were fetch and create movie cards
export function displayMovies() {
  try {
    fetchTrending().then(val => {
      createCards(val.results, true);
    });
  } catch (e) {
    console.log(e);
  }
}

// Function that creates Cards has two parameters data and boolean, true if the data came from api, false if it were fetched from local storage
export function createCards(movies, boolean) {
  movieGalleryEl.innerHTML = "";
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
        let moviesEl = "";
        let poster_link = `https://image.tmdb.org/t/p/w500/${poster_path}`;
        
        loaderEl.classList.remove("is-hidden");

        poster_path === null ? poster_link = "https://fakeimg.pl/300x450?text=Movie%20Image" : poster_link;

        if (boolean === true) {
          let genres;
          let year = release_date.split('-');

          overview === "" ? overview = "N/A" : overview;
          if (genre_ids.length === 0) return genres = "N/A";
          genres = await getGenres(genre_ids);
          genres = genres.join(", ");

          moviesEl = `
                  <li class="movie-item" data-id=${id}>
                      <a href="${poster_link}" class="movie-link">
                          <div class="movie-card" data-popularity=${popularity.toFixed(1)}>
                              <img src="${poster_link}" alt="${overview}">
                              <div class="movie-details-wrapper">
                                  <p class="movie-title" data-title="${original_title}">${title}</p>
                                  <div class="movie-details">
                                    <p data-genre="${genres}">${genres} | <span data-year="${year[0]}">${year[0]}</span>
                                    </p>
                                    <p class="movie-rating" data-count="${vote_count}">${vote_average.toFixed(1)}</p>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </li>
              `;
        } else {
          moviesEl = `
                  <li class="movie-item" data-id=${id}>
                      <a href="${poster_link}" class="movie-link">
                          <div class="movie-card" data-popularity=${popularity}>
                              <img src="${poster_link}" alt="${overview}">
                              <div class="movie-details-wrapper">
                                  <p class="movie-title" data-title="${original_title}">${title}</p>
                                  <div class="movie-details">
                                    <p data-genre="${genre_ids}">${genre_ids} | <span data-year="${release_date}">${release_date}</span>
                                    </p>
                                    <p class="movie-rating" data-count="${vote_count}">${vote_average}</p>
                                  </div>
                              </div>
                          </div>
                      </a>
                  </li>
              `;
        }

        setTimeout(() => { 
          loaderEl.classList.add("is-hidden");
          movieGalleryEl.insertAdjacentHTML('afterbegin', moviesEl);
        }, 700);
  
      }
    )
    .join('');
}

// A function that creates a quasi-database for movies
function localSetter() {
  let watchlist = localStorage.getItem("watchList");
  let queuelist = localStorage.getItem("queueList");
  
  if (watchlist === null) {
    localStorage.setItem("watchList", "[]");
    
  }
  if (queuelist === null) {
    localStorage.setItem("queueList", "[]");    
  }
}

document.addEventListener('DOMContentLoaded', displayMovies);
document.addEventListener('DOMContentLoaded', localSetter);