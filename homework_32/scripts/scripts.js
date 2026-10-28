const API_KEY = "f28f3d76";
const BASE_URL = "https://www.omdbapi.com/";

const searchInput = document.querySelector(".search-box__input");
const moviesContainer = document.querySelector(".movies");
const errorMessage = document.querySelector(".error-message");
const loader = document.querySelector(".search-box__loader");

let debounceTimeout = null;


searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();

    clearTimeout(debounceTimeout);

    if (query.length < 3) {
        clearResults();
        if (query.length === 0) {
            hideError();
        } else {
            showError("Enter at least 3 characters to search.");
        }
        return;
    }

    debounceTimeout = setTimeout(() => {
        fetchMovies(query);
    }, 500);
});


async function fetchMovies(query) {
    showLoader();
    hideError();

    try {
        const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`);

        if (!response.ok) {
            throw new Error(`Data fetch error: ${response.status}`);
        }

        const data = await response.json();

        if (data.Response === "True") {
            displayMovies(data.Search);
        } else {
            clearResults();
            showError(data.Error);
        }
    } catch (error) {
        clearResults();
        showError("An error occurred while loading data. Check the connection.");
        console.error("API Error:", error);
    } finally {
        hideLoader();
    }
}


function displayMovies(movies) {
    clearResults();
    hideError();

    movies.forEach(movie => {
        const movieElement = document.createElement("div");
        movieElement.classList.add("movie");

        const posterUrl = (movie.Poster && movie.Poster !== "N/A")
            ? movie.Poster
            : "https://via.placeholder.com/300x450?text=No+Poster";

        movieElement.innerHTML = `
            <div class="movie__poster-wrapper">
                <img class="movie__poster" src="${posterUrl}" alt="${movie.Title}" loading="lazy">
            </div>
            <div class="movie__info">
                <h3 class="movie__title">${movie.Title}</h3>
                <div class="movie__meta">
                    <span class="movie__year">${movie.Year}</span>
                    <span class="movie__type">${movie.Type}</span>
                </div>
            </div>
        `;

        moviesContainer.appendChild(movieElement);
    });
}


function clearResults() {
    moviesContainer.innerHTML = "";
}

function showError(msg) {
    errorMessage.textContent = msg;
    errorMessage.classList.remove("error-message--hidden");
}

function hideError() {
    errorMessage.classList.add("error-message--hidden");
}

function showLoader() {
    loader.classList.remove("search-box__loader--hidden");
}

function hideLoader() {
    loader.classList.add("search-box__loader--hidden");
}