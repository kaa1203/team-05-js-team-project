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

async function fetchAndDisplayMovies(screenSize) {
  try {
    const moviesData = await fetchMoviesByPage(
      currentPage,
      currentPage === 1 ? 20 : pageSize
    );
    totalPages = moviesData.total_pages;
    createCards(moviesData.results, true);
    generatePaginationLinks(screenSize);
  } catch (error) {
    console.error('Error fetching or displaying movies:', error);
  }
}

let screenSize = window.innerWidth;


function generatePaginationLinks(screenSize) {
  paginationContainer.innerHTML = '';
  let startPage, endPage, appendPage;
  
  screenSize < 780 ? appendPage = 4 : appendPage = 9; 

  if (currentPage % 10 === 1) {
    startPage = currentPage;
    endPage = Math.min(currentPage + appendPage, totalPages);
  } else {
    startPage = Math.floor((currentPage - 1) / 10) * 10 + 1;
    endPage = Math.min(startPage + appendPage, totalPages);
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
      fetchAndDisplayMovies(screenSize);
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
  fetchAndDisplayMovies(screenSize);
});

nextButton.addEventListener('click', function () {
  currentPage += 1;
  fetchAndDisplayMovies(screenSize);
});

// document.addEventListener('DOMContentLoaded', fetchAndDisplayMovies);
generatePaginationLinks(screenSize);

window.addEventListener("resize", () => {
    console.log(window.innerWidth);
  if (screenSize === 767) {
    generatePaginationLinks(window.innerWidth);
  }
  if (screenSize >= 767) {
    generatePaginationLinks(window.innerWidth);
  }
})