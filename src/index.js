import { BASE_URL, params } from "./themoviedb-api.js";
const { language, key } = params.option;

// Testing the api

async function fetchTrending() {
    const res =  await fetch(`${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}`);
    const data = await res.json();
    return data;
}

try {
    fetchTrending().then(val => console.log(val));
} catch (e) {
    console.log(e);
}
