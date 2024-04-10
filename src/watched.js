import { createCards, movieGalleryEl } from "./index.js";
import { movieClicked, movieCon } from "./movie-modal.js";


let watchList = localStorage.getItem("watchList");
let queueList = localStorage.getItem("queueList");

function updateLists() {
    watchList = localStorage.getItem("watchList");
    queueList = localStorage.getItem("queueList");
}

// Function to render the appropriate list based on button click
// Function to render the appropriate list based on button click
function renderList(listType,library_type) {
    movieGalleryEl.innerHTML = ""; // Clear the gallery

    if (!listType || JSON.parse(listType).length === 0) {
        // If the list is empty or undefined, display "No Movie Added"
        movieGalleryEl.innerText = "NO MOVIES ADDED TO " + library_type + " YET";
    } else {
        // If the list is not empty, render the list
        createCards(JSON.parse(listType), false);
    }
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
            renderList(watchList,"WATCHED"); // Render the watchlist
            // Update button active state
            document.querySelector('.ml-buttons .ml-button:nth-child(1)').classList.add('active');
            document.querySelector('.ml-buttons .ml-button:nth-child(2)').classList.remove('active');
        }

        if (e.target.innerText === "QUEUE") {
            updateLists(); // Update watchList and queueList
            renderList(queueList,"QUEUE"); // Render the queuelist
            // Update button active state
            document.querySelector('.ml-buttons .ml-button:nth-child(1)').classList.remove('active');
            document.querySelector('.ml-buttons .ml-button:nth-child(2)').classList.add('active');
        }
    }
}