import { BASE_URL, params } from "./themoviedb-api.js";
import { createCards, movieGalleryEl } from "./index.js";

let { language, key, include_adult, q } = params.option;


const navFormEl = document.querySelector(".nav-form");
const delInputEl = document.querySelector(".del-input");

delInputEl.addEventListener("click", delClicked);
navFormEl.addEventListener("submit", searchMovies); 
navFormEl.addEventListener("keyup", onInput);

// still shows "sussy" movies even the include_adult was set to false
async function searchMovies(e) {
    e.preventDefault();
    const { search_bar } = e.target;
    q = search_bar.value;

    try {
        let res =  await fetch(`${BASE_URL}/search/movie?api_key=${key}&language=${language}&query=${q}&include_adult=${include_adult}`);
        let data = await res.json();
        createCards(data.results, true);
        console.log(data)
    } catch (e) {
        console.log(e);
    } 
}

function onInput(e) {
    let userInput = e.target.value;

    if (userInput !== "") {
        delInputEl.classList.remove("is-hidden");
    } else {
        delInputEl.classList.add("is-hidden");
    }

}

function delClicked() {
    let userInput = delInputEl.previousElementSibling.previousElementSibling;

    userInput.value = "";
    userInput.focus();
    this.classList.add("is-hidden");
}
