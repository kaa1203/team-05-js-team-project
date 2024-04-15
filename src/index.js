import { BASE_URL, params } from './themoviedb-api.js';

let { language, key, page, include_adult, query } = params.option;
export const movieGalleryEl = document.querySelector('.movie-list');
export const loaderEl = document.querySelector('.loader');
const paginationContainer = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let totalPages = 20;
let currentPage = 1;
let fetchType = 'home';
let fetchLink;
let defaultLink = `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}&page=${page}`;

// fetch the genre list
async function fetchGenres() {
  const res = await fetch(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
  );
  const data = await res.json();
  return data.genres;
}

async function fetchTrending() {
  const res = await fetch(
    `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}&page=${page}`
  );
  const data = await res.json();
  return data;
}

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

export function displayMovies() {
  try {
    fetchTrending().then(val => {
      createCards(val.results, true);
    });
  } catch (e) {
    console.log(e);
  }
}

export function createCards(movies, boolean) {
  movieGalleryEl.innerHTML = '';
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
        let moviesEl = '';
        let poster_link = `https://image.tmdb.org/t/p/w500/${poster_path}`;

        loaderEl.classList.remove('is-hidden');
        poster_path === null
          ? (poster_link = 'https://fakeimg.pl/300x450?text=Movie%20Image')
          : poster_link;
        if (boolean === true) {
          let genres, year;
          release_date === ''
            ? (year = 'N/A')
            : (year = new Date(release_date).getFullYear());
          overview === '' ? (overview = 'N/A') : overview;
          if (genre_ids.length === 0) return (genres = 'N/A');
          genres = await getGenres(genre_ids);
          genres = genres.join(', ');
          moviesEl = `
                  <li class="movie-item" data-id=${id}>
                      <a href="${poster_link}" class="movie-link">
                          <div class="movie-card" data-popularity=${popularity.toFixed(
                            1
                          )}>
                              <img src="${poster_link}" alt="${overview}" loading="lazy">
                              <div class="movie-details-wrapper">
                                  <p class="movie-title" data-title="${original_title}">${title}</p>
                                  <div class="movie-details">
                                    <p data-genre="${genres}">${genres} | <span data-year="${year}">${year}</span>
                                    </p>
                                    <p class="movie-rating" data-count="${vote_count}">${vote_average.toFixed(
            1
          )}</p>
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
          loaderEl.classList.add('is-hidden');
          movieGalleryEl.insertAdjacentHTML('afterbegin', moviesEl);
        }, 700);
      }
    )
    .join('');
}

// A function that creates a quasi-database for movies
function localSetter() {
  let watchlist = localStorage.getItem('watchList');
  let queuelist = localStorage.getItem('queueList');

  if (watchlist === null) {
    localStorage.setItem('watchList', '[]');
  }
  if (queuelist === null) {
    localStorage.setItem('queueList', '[]');
  }
}

document.addEventListener('DOMContentLoaded', localSetter);
document.addEventListener('DOMContentLoaded', generatePaginationLinks);
fetchAndDisplayMovies();

async function fetchMoviesByPage(page, link = null) {
  try {
    const res = await fetch(
      link
        ? link
        : `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}&page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movies for page ${page}:`, error);
    throw error;
  }
}
// Function to fetch and display movies
async function fetchAndDisplayMovies() {
  try {
    let moviesData;
    if (fetchType === 'search') {
      // If fetch type is search, fetch movies by search query
      moviesData = await fetchMoviesBySearch(query);
    } else {
      // If not search, fetch movies by page
      moviesData = await fetchMoviesByPage(currentPage, fetchLink);
    }
    // Update total pages based on fetched data
    totalPages = moviesData.total_pages;
    // Create movie cards based on fetched results
    createCards(moviesData.results, true);
    // Generate pagination links
    generatePaginationLinks();
  } catch (error) {
    console.error('Error fetching or displaying movies:', error);
  }
}

function generatePaginationLinks() {
  paginationContainer.innerHTML = '';
  let startPage, endPage;
  if (currentPage % 10 === 1) {
    startPage = currentPage;
    endPage = Math.min(currentPage + 9, totalPages);
  } else {
    startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    endPage = Math.min(startPage + 9, totalPages);
  }
  for (let i = startPage; i <= endPage; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;
    if (i === currentPage) {
      link.classList.add('active');
    }
    link.addEventListener('click', function (event) {
      event.preventDefault();
      currentPage = parseInt(this.textContent);
      fetchAndDisplayMovies();
    });
    paginationContainer.appendChild(link);
  }
}

prevButton.addEventListener('click', function () {
  if (currentPage <= 1) {
    currentPage = 1;
  } else {
    currentPage -= 1;
  }
  page = currentPage;
  if (fetchType === 'search') {
    fetchAndDisplayMovies();
  } else {
    fetchAndDisplayMovies(fetchLink);
  }
});

nextButton.addEventListener('click', function () {
  currentPage += 1;
  page = currentPage;
  if (fetchType === 'search') {
    fetchAndDisplayMovies();
  } else {
    fetchAndDisplayMovies(fetchLink);
  }
});

// ========== SEARCH =========
const navFormEl = document.querySelector('.nav-form');
const delInputEl = document.querySelector('.del-input');
delInputEl.addEventListener('click', delClicked);
navFormEl.addEventListener('submit', searchMovies);
navFormEl.addEventListener('keyup', onInput);

function searchMovies(e) {
  e.preventDefault();
  const { search_bar } = e.target;
  query = search_bar.value;
  fetchType = 'search';
  currentPage = 1;
  fetchAndDisplayMovies();
}

function onInput(e) {
  let userInput = e.target.value;
  if (userInput !== '') {
    delInputEl.classList.remove('is-hidden');
  } else {
    delInputEl.classList.add('is-hidden');
  }
}

function delClicked() {
  let userInput = delInputEl.previousElementSibling.previousElementSibling;
  userInput.value = '';
  userInput.focus();
  this.classList.add('is-hidden');
}
