// var newMovieArray = movies
var newMovieArray = movies

// target ul
const screenList = document.getElementById("screen-list")

// target radiobuttons
const radioButtons = document.getElementsByName("radioButton")

// get in DOM
const addMoviesToDom = (newMovieArray) => newMovieArray.map((movie) => {
    const newP = document.createElement("p")
    const newLi = document.createElement('li');
    const newImg = document.createElement("img")
    const newA = document.createElement("a")
    newA.appendChild(newImg).src = `${movie.Poster}`
    newLi.appendChild(newP).innerHTML = `${movie.Title}`
    newLi.appendChild(newA).href = "https://imdb.com/title/" + `${movie.imdbID}`;
    screenList.appendChild(newLi)
})

// add change event to RadioButtons
radioButtons.forEach((btn) => btn.addEventListener("change", (event) => handleOnChangeEvent(event)))

const handleOnChangeEvent = (event) => {
    value = event.target.value
    screenList.innerHTML = ("")

    // function to select movie by Name
    selectMovieByName = (array) => array.filter((movie) => movie.Title.includes(`${value}`));

    // function to select movie by year
    selectMovieByYear = (array) => array.filter((movie) => movie.Year >= ("2014"));

    switch (value) {
        case "all":
            newMovieArray = movies;
            break;
        case "Nieuwste":
            newMovieArray = selectMovieByYear(movies)
            break;

        case "Avengers":
            newMovieArray = selectMovieByName(movies)
            break;

        case "X-Men":
            newMovieArray = selectMovieByName(movies)
            break;

        case "Princess":
            newMovieArray = selectMovieByName(movies)
            break;

        case "Batman":
            newMovieArray = selectMovieByName(movies)
            break;
    }
    addMoviesToDom(newMovieArray)
}

addMoviesToDom(newMovieArray)

// search
const searchInput = document.getElementById("search-input")
searchInput.addEventListener("search", SearchValue);

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

function SearchValue() {
    const searchValue = searchInput.value.capitalize()
    screenList.innerHTML = ("")
    searchMovieByName = (array) => array.filter((movie) => movie.Title.includes(`${searchValue}`));
    newMovieArray = searchMovieByName(movies)
    addMoviesToDom(newMovieArray)
}
