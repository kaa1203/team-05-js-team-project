export const movieCon = document.querySelector(".movie-list");
const overlay = document.getElementsByClassName("overlay");

movieCon.addEventListener("click", movieClicked);
document.addEventListener("click", onClick);

export function movieClicked(e) {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        const movieDetails = {
            id: e.target.parentElement.parentElement.parentElement.dataset.id,
            backdropImage: e.target.parentElement.parentElement.href,
            popularity: e.target.parentElement.dataset.popularity,
            about: e.target.alt,
            originalTitle: e.target.nextElementSibling.children[0].dataset.title,
            title: e.target.nextElementSibling.children[0].innerText,
            genre: e.target.nextElementSibling.children[0].nextElementSibling.children[0].dataset.genre,
            release_date: e.target.nextElementSibling.children[0].nextElementSibling.children[0].children[0].dataset.year,
            vote: e.target.nextElementSibling.children[0].nextElementSibling.children[1].innerText,
            voteCount: e.target.nextElementSibling.children[0].nextElementSibling.children[1].dataset.count,
        }

        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.insertAdjacentElement("afterbegin", overlay);
        createModal(movieDetails);
        isMovieOnList(movieDetails.id);
    }
}

function createModal(movieDetails) {
    const {
        id,
        backdropImage,
        popularity,
        about,
        originalTitle,
        title,
        release_date,
        genre,
        vote,
        voteCount } = movieDetails;
    let modal = `
        <div class="modal-container">
            <div class="modal-close">&times;</div>
            <div class="modal-content" data-id="${id}">
                <div class="modal-image">
                    <img src="${backdropImage}" alt="movie photo">
                </div>
                <div class="modal-details" data-year="${release_date}">
                    <ul class="modal-list">
                        <li class="modal-item">
                            <h1 class="movie-title">${title.toUpperCase()}</h1>
                        </li>
                        <li class="modal-item">
                            <p class="modal-header">vote/votes</p>
                            <p><span class="modal-rating">${vote}</span> / ${voteCount}</p>
                        </li>
                        <li class="modal-item">
                            <p class="modal-header">popularity</p>
                            <p>${popularity}</p>
                        </li>
                        <li class="modal-item">
                            <p class="modal-header">title</p>
                            <p>${originalTitle.toUpperCase()}</p>
                        </li>
                        <li class="modal-item">
                            <p class="modal-header">genre</p>    
                            <p>${genre}</p>
                        </li>
                    </ul>
                    <div class="modal-about">
                        <h4>ABOUT</h4>
                        <p>${about}</p>
                    </div>
                    <div class="modal-buttons">
                        <button type="button" class="modal-button" data-button="watched">add to watched</button>
                        <button type="button" class="modal-button" data-button="queue">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    overlay[0].insertAdjacentHTML("beforeend", modal);
    //should've passed the movieDetails to a function here
} 

function onClick(e) {
    if (e.target.classList.contains("modal-close")) {
        closeModal();
    }

    if (e.target.classList.contains("modal-button")) {
        // will be back to this later once i find a much better approach to this
        let votes = e.target.parentElement.previousElementSibling.previousElementSibling.children[1].children[1].innerText;
        votes = votes.split("/");

        const movieData = {
            id: e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.parentElement.dataset.id,
            poster_path: e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.children[0].src,
            release_date: e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.nextElementSibling.dataset.year,
            title: e.target.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].innerText,
            vote_average: votes[0],
            vote_count: votes[1],
            popularity: e.target.parentElement.previousElementSibling.previousElementSibling.children[2].children[1].innerText,
            original_title: e.target.parentElement.previousElementSibling.previousElementSibling.children[3].children[1].innerText,
            genre_ids: e.target.parentElement.previousElementSibling.previousElementSibling.children[4].children[1].innerText,
            overview: e.target.parentElement.previousElementSibling.children[1].innerText
        }

        console.log(e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling)

        if (e.target.dataset.button === "watched") {
            if (e.target.innerText === "ADD TO WATCHED") {
                addToList(movieData, "watchList");
                e.target.innerText = "remove from watched"; 
                removeFromList(movieData.id, "queueList");
                e.target.nextElementSibling.innerText = "add to queue";
                e.target.classList.add("selected");
            } else {
                removeFromList(movieData.id, "watchList");
                e.target.innerText = "add to watched";
                e.target.classList.remove("selected");
            }

            if (e.target.nextElementSibling.classList.contains("selected")) {
                e.target.nextElementSibling.classList.remove("selected");
            }
        }
        
        if (e.target.dataset.button === "queue") {
            if (e.target.innerText === "ADD TO QUEUE") {
                addToList(movieData, "queueList");
                e.target.innerText = "remove from queue";
                removeFromList(movieData.id, "watchList");
                e.target.previousElementSibling.innerText = "add to watched";
                e.target.classList.add("selected");
            } else {
                removeFromList(movieData.id, "queueList");
                e.target.innerText = "add to queue";
                e.target.classList.remove("selected");
            }

            if (e.target.previousElementSibling.classList.contains("selected")) {
                e.target.previousElementSibling.classList.remove("selected");
            }
        }
    }
}

function isMovieOnList(movieId) {
    let watchList = JSON.parse(localStorage.getItem("watchList"));
    let queueList = JSON.parse(localStorage.getItem("queueList"));
    let modalCont = document.querySelector(".modal-container");
    let watchedButton = modalCont.children[1].children[1].children[2].children[0];
    let queueButton = modalCont.children[1].children[1].children[2].children[1];
    
    if (watchList.length != 0) {
        watchList.forEach(movie => {
            if (movie.id === movieId) {
                watchedButton.innerText = "remove from watched";
                watchedButton.classList.add("selected");
            }
        });
    }

    if (queueList.length != 0) {
        queueList.forEach(movie => {
            if (movie.id === movieId) {
                queueButton.innerText = "remove from queue";
                queueButton.classList.add("selected");
            }
        });
    }
}

function addToList(movieData, list) {
    let listStorage = JSON.parse(localStorage.getItem(list));
    let onList = false

    // Not sure but this block looks kinda awkward...
    for (const movie of listStorage) {
        if (movie.id == movieData.id) {
            onList = true;
        }
    }

    if (onList === false) {
        listStorage.push(movieData);
        localStorage.setItem(list, JSON.stringify(listStorage));
    }

}

function removeFromList(movieId, list) {
    let listStorage = JSON.parse(localStorage.getItem(list));

    listStorage
        .filter(movie => movie.id == movieId)
        .map(movie => {
            let index = listStorage.indexOf(movie)
            listStorage.splice(index, 1), listStorage;
            localStorage.setItem(list, JSON.stringify(listStorage))
        });
}

function closeModal() {
    overlay[0].children[0].classList.add("close-animation");

    setTimeout(() => {
        overlay[0].remove();
    }, 450);
}