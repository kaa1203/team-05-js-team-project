import { createCards, movieGalleryEl } from "./index.js";
import { movieClicked, movieCon } from "./movie-modal.js";

let watchList = localStorage.getItem("watchList");
let queueList = localStorage.getItem("queueList");

// Function to render the appropriate list based on button click
function renderList(listType) {
    movieGalleryEl.innerHTML = ""; // Clear the gallery
    createCards(JSON.parse(listType), false); // Render the appropriate list
}

document.addEventListener("click", onClick);
movieCon.addEventListener("click", movieClicked)

// Event listener function for "My Library" link
document.querySelector('.nav-item:nth-child(2) .nav-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    const watchedButton = document.querySelector('.ml-buttons .ml-button:first-child');
    // Check if the watched button exists before trying to click it
    if (watchedButton) {
        watchedButton.classList.add('active');
        watchedButton.click(); 
        watchedButton.focus(); 
    } else {
        console.error("Watched button not found"); // Log an error if the button is not found
    }
});

function onClick(e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.innerText === "WATCHED") {
            updateLists(); // Update watchList and queueList
            renderList(watchList); // Render the watchlist
        }

        if (e.target.innerText === "QUEUE") {
            updateLists(); // Update watchList and queueList
            renderList(queueList); // Render the queuelist
        }
    }
}