const container = document.querySelector('.container');
const movieTitle = document.querySelector('.userInputTitle');
const moviePosterUrl = document.querySelector('.userInputPosterUrl');
const movieReleaseYear = document.querySelector('.userInputReleaseYear');
const btn = document.querySelector('.button');
const movieTitleToDisplay = document.querySelector('.favouriteMovieTitle');
const movieReleaseYearToDisplay = document.querySelector('.favouriteMovieReleaseYear');

let titleInStorage = localStorage.getItem('title');
let imageUrlInStorage = localStorage.getItem('imageUrl');
let releaseYearInStorage = localStorage.getItem('releaseYear');


if(titleInStorage && imageUrlInStorage && releaseYearInStorage) {
    movieTitleToDisplay.textContent = titleInStorage;
    container.style.backgroundImage = `linear-gradient(rgba(18, 18, 69, 0.6), rgba(33, 33, 33, 0.815)), 
    url('${imageUrlInStorage}')`;
    movieReleaseYearToDisplay.textContent = releaseYearInStorage;
}

btn.addEventListener('click', () => {
    let movieTitleInput = movieTitle.value;
    let posterUrlInput = moviePosterUrl.value;
    let releaseYearInput = movieReleaseYear.value;
    localStorage.setItem('title', movieTitleInput);
    localStorage.setItem('imageUrl', posterUrlInput)
    localStorage.setItem('releaseYear', releaseYearInput);
    movieTitleToDisplay.textContent = movieTitleInput;
    movieReleaseYearToDisplay.textContent = releaseYearInput
    container.style.backgroundImage = `linear-gradient(rgba(18, 18, 69, 0.6), rgba(33, 33, 33, 0.815)), 
    url('${posterUrlInput}')`;
    movieTitle.value = '';
    moviePosterUrl.value = '';
    movieReleaseYear.value = '';
});
