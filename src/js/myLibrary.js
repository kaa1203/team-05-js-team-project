function displayQueueMovies() {
    const queueList = JSON.parse(localStorage.getItem('queueList')) || [];
  
    // Clear existing movies
    movieGalleryEl.innerHTML = '';
  
    // Fetch and display movies in the queue
    queueList.forEach(async (movieId) => {
      const movie = await fetchMovieDetails(movieId);
      createMovieCard(movie);
    });
  }
  
  async function fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=${language}`;
    const res = await fetch(url);
    const data = await res.json();
    return data;
  }
  
  function createMovieCard(movie) {
    const { id, poster_path, title, release_date, overview, vote_average, vote_count } = movie;
    const year = release_date.split('-')[0];
  
    const movieEl = document.createElement('li');
    movieEl.classList.add('movie-item');
    movieEl.dataset.id = id;
  
    const movieLink = document.createElement('a');
    movieLink.href = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    movieLink.classList.add('movie-link');
  
    const movieCard = document.createElement('div');
    movieCard.classList.add('movie-card');
    movieCard.dataset.popularity = vote_average.toFixed(1);
  
    const img = document.createElement('img');
    img.src = `https://image.tmdb.org/t/p/w500/${poster_path}`;
    img.alt = overview;
  
    const movieDetails = document.createElement('div');
    movieDetails.classList.add('movie-details');
  
    const movieTitle = document.createElement('p');
    movieTitle.classList.add('movie-title');
    movieTitle.dataset.title = title;
    movieTitle.textContent = title;
  
    const genresSpan = document.createElement('span');
    genresSpan.textContent = ''; // Set genres here
  
    const yearSpan = document.createElement('span');
    yearSpan.dataset.year = year;
    yearSpan.textContent = `| ${year}`;
  
    const ratingP = document.createElement('p');
    ratingP.dataset.count = vote_count;
    ratingP.textContent = vote_average.toFixed(1);
  
    movieDetails.appendChild(movieTitle);
    movieDetails.appendChild(genresSpan);
    movieDetails.appendChild(yearSpan);
    movieDetails.appendChild(ratingP);
  
    movieCard.appendChild(img);
    movieCard.appendChild(movieDetails);
  
    movieLink.appendChild(movieCard);
    movieEl.appendChild(movieLink);
  
    movieGalleryEl.appendChild(movieEl);
  }
  