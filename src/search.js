import { BASE_URL, params } from "./themoviedb-api.js";
import { createCards, movieGalleryEl } from "./index.js";

const { language, key, include_adult } = params.option;


const navFormEl = document.querySelector(".nav-form");

navFormEl.addEventListener("submit", searchMovies); 

// still shows "sussy" movies even the include_adult was set to false
async function searchMovies(e) {
    e.preventDefault();
    const { search_bar } = e.target;
    q = search_bar.value;

    try {
        let res =  await fetch(`${BASE_URL}/search/movie?api_key=${key}&language=${language}&query=${q}&include_adult=${include_adult}`);
        let data = await res.json();
        console.log(data.results)
        movieGalleryEl.innerHTML = "";
        createCards(data.results, true);
    } catch (e) {
        console.log(e);
    } 
}
