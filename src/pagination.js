import { createCards } from './index.js'
import { BASE_URL, params } from './themoviedb-api.js';
const { language, key } = params.option;

const paginationContainer = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let totalPages = 20;
let currentPage = 1;
const pageSize = 50;

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
    const moviesData = await fetchMoviesByPage(
      currentPage,
      currentPage === 1 ? 20 : pageSize
    );
    totalPages = moviesData.total_pages;
    createCards(moviesData.results, true);
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
  if (currentPage > 10) {
    currentPage -= 10;
  } else {
    currentPage = 1;
  }
  fetchAndDisplayMovies();
});

nextButton.addEventListener('click', function () {
  if (currentPage + 10 <= totalPages) {
    currentPage += 10;
  } else {
    currentPage = 1;
  }
  fetchAndDisplayMovies();
});

// document.addEventListener('DOMContentLoaded', fetchAndDisplayMovies);
generatePaginationLinks();
