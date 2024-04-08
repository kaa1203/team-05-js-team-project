import { BASE_URL, params } from "./themoviedb-api.js";
const { language, key } = params.option;


const navFormEl = document.querySelector(".nav-form");

navFormEl.addEventListener("submit", searchMovies); 

async function searchMovies(e) {
    e.preventDefault();
    const { search_bar } = e.target;
    q = search_bar.value;

    console.log(q);

    try {
        const res =  await fetch(`${BASE_URL}/search/movie?api_key=${key}&language=${language}&query=${q}`);
        const data = await res.json();

        console.log(data);
    } catch (e) {
        console.log(e);
    } 
}
