import { createCards, movieGalleryEl } from "./index.js";
import { movieClicked, movieCon } from "./movie-modal.js";


let watchList = localStorage.getItem("watchList");
let queueList = localStorage.getItem("queueList");

function updateLists() {
    watchList = localStorage.getItem("watchList");
    queueList = localStorage.getItem("queueList");
}

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

function onClick(e) {
    let watchButton = document.querySelector('.ml-buttons .ml-button:nth-child(1)');
    let queueButton = document.querySelector('.ml-buttons .ml-button:nth-child(2)');
    if (e.target.tagName === "BUTTON") {
        if (e.target.innerText === "WATCHED") {
            updateLists(); // Update watchList and queueList
            renderList(watchList,"WATCHED"); // Render the watchlist
            // Update button active state
            // watchButton.disabled = true;
            // queueButton.disabled = false;
            watchButton.classList.add('active');
            queueButton.classList.remove('active');
        }

        if (e.target.innerText === "QUEUE") {
            updateLists(); // Update watchList and queueList
            renderList(queueList,"QUEUE"); // Render the queuelist
            // Update button active state
            // queueButton.disabled = true;
            // watchButton.disabled = false;
            watchButton.classList.remove('active');
            queueButton.classList.add('active');
        }
    }
}
