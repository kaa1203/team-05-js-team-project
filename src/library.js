import header from './header.js';

function displayQueuedMovies() {
    const queueMovieList = document.querySelector('.movie-list');
    queueMovieList.innerHTML = ''; // Clear the existing list

    // Create and configure the title element
    const titleElement = document.createElement('h2');
    titleElement.textContent = 'Queued Movies';
    titleElement.style.textAlign = 'center';

    // Append the title element to the queue movie list
    queueMovieList.appendChild(titleElement);

    // Retrieve queued movies from localStorage
    const queuedMovies = JSON.parse(localStorage.getItem('queueList')) || [];

    // Render the queued movies as film poster cards
    queuedMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.classList.add('movie-card');

        const image = document.createElement('img');
        image.src = movie.imgURL;
        image.alt = movie.title;
        movieCard.appendChild(image);

        const title = document.createElement('h3'); // Changed 'h' to 'h3'
        title.textContent = movie.title;
        movieCard.appendChild(title);

        movieCard.style.width = '200px';
        movieCard.style.height = '300px';
        queueMovieList.appendChild(movieCard);
    });
}
