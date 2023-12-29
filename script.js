const APILINK='https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=89d52978cbfd03786127f61570bbc650&page=1';
const IMG_PATH='https://image.tmdb.org/t/p/w1280';
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?&api_key=89d52978cbfd03786127f61570bbc650&query=";


const main = document.getElementById("section");
const form = document.getElementById("form");
const search = document.getElementById("query");

// function returnMovies(url){
//     fetch(url).then(res => res.json())
//     .then(function(data)){
//         console.log(data.results);
//     }
// }