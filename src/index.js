// import { BASE_URL, params } from "./themoviedb-api.js";
// const { language, key } = params.option;

// // Testing the api
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI4ZDNhN2M5MTE3MGM2MzNkY2E1OGNkMTc2MzM0NiIsInN1YiI6IjY2MTAwYmM0M2U2ZjJiMDEzMTM4OTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qexB_iqBS_60mzYwyATEfpKtUXCi2HtfdoouqNQvyts`,
//   },
// };
// async function fetchTrending() {
//     const res =  await fetch(`${BASE_URL}/trending/movie/day?api_key=${key}&language=${language}`,options);
//     const data = await res.json();
//     return data;
// }

// try {
//     fetchTrending().then(val => console.log(val));
// } catch (e) {
//     console.log(e);
// }
