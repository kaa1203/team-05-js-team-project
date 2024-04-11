import { BASE_URL, params } from './themoviedb-api.js';
const { language, key } = params.option;

const movieGalleryEl = document.querySelector('.movie-list');
const paginationContainer = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let totalPages = 20; 
let currentPage = 1;
const pageSize = 50; 

async function fetchGenres() {
  try {
    const res = await fetch(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`
    );
    const data = await res.json();
    return data.genres;
  } catch (error) {
    console.error('Error fetching genres:', error);
    throw error;
  }
}

async function fetchMoviesByPage(page, pageSize) {
  try {
    const res = await fetch(
      `${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}&page=${page}&page_size=${pageSize}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching movies for page ${page}:`, error);
    throw error;
  }
}

async function fetchAndDisplayMovies() {
  try {
    const moviesData = await fetchMoviesByPage(currentPage, pageSize);
    totalPages = moviesData.total_pages; // Update total pages based on API response
    createCards(moviesData.results);
    generatePaginationLinks();
  } catch (error) {
    console.error('Error fetching or displaying movies:', error);
  }
}

async function getGenres(genre_ids) {
  try {
    const allGenres = await fetchGenres();
    const matchingGenres = allGenres
      .filter(genre => genre_ids.includes(genre.id))
      .map(genre => genre.name);
    return matchingGenres;
  } catch (error) {
    console.error('Error getting genres:', error);
    throw error;
  }
}

async function createCards(movies) {
  movieGalleryEl.innerHTML = ''; 
  for (const movie of movies) {
    const {
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
    } = movie;

    try {
      const genres = await getGenres(genre_ids);
      const year = release_date.split('-');
      const movieEl = `
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
      movieGalleryEl.insertAdjacentHTML('afterbegin', movieEl);
    } catch (error) {
      console.error('Error creating movie cards:', error);
    }
  }
}

function generatePaginationLinks() {
  paginationContainer.innerHTML = ''; 
  const startPage = Math.max(1, currentPage - 5);
  const endPage = Math.min(startPage + 9, totalPages);

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
  if (currentPage > 1) {
    currentPage--; 
    fetchAndDisplayMovies();
  }
});

nextButton.addEventListener('click', function () {
  if (currentPage < totalPages) {
    currentPage++; 
    fetchAndDisplayMovies();
  }
});

// Arrow button to skip to the 10th pagination link
prevButton.addEventListener('click', function () {
  if (currentPage > 10) {
    currentPage -= 9; 
  } else {
    currentPage = 1; 
  }
  fetchAndDisplayMovies();
});

nextButton.addEventListener('click', function () {
  if (currentPage + 9 <= totalPages) {
    currentPage += 9;
  } else {
    currentPage = totalPages;
  }
  fetchAndDisplayMovies();
});

window.addEventListener('DOMContentLoaded', fetchAndDisplayMovies);

function localSetter() {
  let watchlist = localStorage.getItem('watchList');
  let queuelist = localStorage.getItem('queueList');

  if (watchlist === null || watchlist.length === 0) {
    localStorage.setItem('watchList', '[]');
  }
  if (queuelist === null || watchlist.length === 0) {
    localStorage.setItem('queueList', '[]');
  }
}

localSetter();
