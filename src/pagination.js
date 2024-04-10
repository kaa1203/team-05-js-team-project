const apiKey = '9328d3a7c91170c633dca58cd1763346';
const apiUrl = 'https://api.themoviedb.org/3';
const imageBaseUrl = 'https://image.tmdb.org/t/p/w342';
console.log(apiUrl);
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI4ZDNhN2M5MTE3MGM2MzNkY2E1OGNkMTc2MzM0NiIsInN1YiI6IjY2MTAwYmM0M2U2ZjJiMDEzMTM4OTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qexB_iqBS_60mzYwyATEfpKtUXCi2HtfdoouqNQvyts`,
  },
};

const itemsPerPage = 10;
let movieData = [];
let genreMap = {};

const list = document.getElementById('list');
const paginationLinksWrapper = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

async function fetchGenreData() {
  try {
    const response = await fetch(
      `${apiUrl}/genre/movie/list?language=en-US&api_key=${apiKey}`
    );
    const data = await response.json();
    console.log(data);
    genreMap = {};
    data.genres.forEach(genre => {
      genreMap[genre.id] = genre.name;
    });
    fetchMovieData(1);
  } catch (error) {
    console.error('Error fetching genre data:', error);
  }
}

async function fetchMovieData(pageNumber) {
  try {
    const response = await fetch(
      `${apiUrl}/trending/all/day?language=en-US&page=${pageNumber}&api_key=${apiKey}`,
      options
    );
    const data = await response.json();
    movieData = data.results.map(movie => ({
      title: movie.title,
      poster_path: movie.poster_path,
      genre: movie.genre_ids.map(id => genreMap[id]),
      year: movie.release_date
        ? new Date(movie.release_date).getFullYear()
        : 'N/A',
    }));
    displayList(movieData, list, itemsPerPage, 1);
    setupPagination(movieData, paginationLinksWrapper, itemsPerPage);
  } catch (error) {
    console.error('Error fetching movie data:', error);
  }
}

function displayList(items, wrapper, itemsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  const start = itemsPerPage * page;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];
    const li = document.createElement('li');

    const img = document.createElement('img');
    img.src = imageBaseUrl + item.poster_path;
    img.alt = item.title;
    img.style.borderRadius = '5px';
    li.appendChild(img);

    const titleDiv = document.createElement('div');
    titleDiv.textContent = item.title;
    li.appendChild(titleDiv);

    const flexContainer = document.createElement('div');
    flexContainer.style.display = 'flex';

    const genreDiv = document.createElement('div');
    genreDiv.textContent = item.genre.join(', ');
    genreDiv.style.color = '#ff6b08';
    flexContainer.appendChild(genreDiv);

    const pipeSpan = document.createElement('span');
    pipeSpan.textContent = ' | ';
    pipeSpan.style.color = '#ff6b08';
    flexContainer.appendChild(pipeSpan);

    const yearDiv = document.createElement('div');
    yearDiv.textContent = item.year;
    yearDiv.style.color = '#ff6b08';
    flexContainer.appendChild(yearDiv);

    li.appendChild(flexContainer);

    wrapper.appendChild(li);
  }
}

function setupPagination(items, wrapper, itemsPerPage) {
  wrapper.innerHTML = '';

  const pageCount = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;

    link.addEventListener('click', function (event) {
      event.preventDefault();

      displayList(items, list, itemsPerPage, i);

      const paginationLinks = document.querySelectorAll('.pagination-link');
      paginationLinks.forEach(link => link.classList.remove('active'));

      this.parentNode.classList.add('active');
    });

    const listItem = document.createElement('div');
    listItem.classList.add('pagination-link');
    if (i === 1) {
      listItem.classList.add('active');
    }
    listItem.appendChild(link);
    wrapper.appendChild(listItem);
  }
}

prevButton.addEventListener('click', function () {
  const activeIndex = document.querySelector(
    '.pagination-link.active a'
  ).textContent;
  const prevIndex = parseInt(activeIndex) - 1;
  if (prevIndex > 0) {
    document
      .querySelector('.pagination-link.active')
      .classList.remove('active');
    displayList(movieData, list, itemsPerPage, prevIndex);
    paginationLinksWrapper.children[prevIndex - 1].classList.add('active');
  }
});

nextButton.addEventListener('click', function () {
  const activeIndex = document.querySelector(
    '.pagination-link.active a'
  ).textContent;
  const nextIndex = parseInt(activeIndex) + 1;
  const pageCount = Math.ceil(movieData.length / itemsPerPage);
  if (nextIndex <= pageCount) {
    document
      .querySelector('.pagination-link.active')
      .classList.remove('active');
    displayList(movieData, list, itemsPerPage, nextIndex);
    paginationLinksWrapper.children[nextIndex - 1].classList.add('active');
  }
});

fetchGenreData();
