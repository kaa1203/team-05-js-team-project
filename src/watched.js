import { createCards, movieGalleryEl } from "./index.js";
import { movieClicked, movieCon } from "./movie-modal.js";

// Function to update watchList and queueList from localStorage
function updateLists() {
    watchList = localStorage.getItem("watchList");
    queueList = localStorage.getItem("queueList");
}

// Initialize watchList and queueList
let watchList = localStorage.getItem("watchList");
let queueList = localStorage.getItem("queueList");

// Function to render the appropriate list based on button click
function renderList(listType) {
    movieGalleryEl.innerHTML = ""; // Clear the gallery
    createCards(JSON.parse(listType), false); // Render the appropriate list
}

// Event listeners
document.addEventListener("click", onClick);
movieCon.addEventListener("click", movieClicked);

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

