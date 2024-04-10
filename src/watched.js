import { createCards, movieGalleryEl } from "./index.js";
import { movieClicked, movieCon } from "./movie-modal.js";

let watchList = localStorage.getItem("watchList");
let queueList = localStorage.getItem("queueList");

// testing the imported functions

document.addEventListener("click", onClick);
movieCon.addEventListener("click", movieClicked)

function onClick(e) {
    if (e.target.tagName === "BUTTON") {
        if (e.target.innerText === "WATCHED") {
            movieGalleryEl.innerHTML = "";
            createCards(JSON.parse(watchList), false);
        }

        if (e.target.innerText === "QUEUE") {
            movieGalleryEl.innerHTML = "";
            createCards(JSON.parse(queueList), false);
        }
    }
}