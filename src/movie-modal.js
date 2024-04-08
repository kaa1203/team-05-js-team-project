const movieCon = document.querySelector(".movie-list");
const overlay = document.getElementsByClassName("overlay");

movieCon.addEventListener("click", movieClicked);
document.addEventListener("click", onClick);

function movieClicked(e) {
    e.preventDefault();
    if (e.target.tagName === "IMG") {
        const movieDetails = {
            id: e.target.parentElement.parentElement.parentElement.dataset.id,
            backdropImage: e.target.parentElement.parentElement.href,
            popularity: e.target.parentElement.dataset.popularity,
            about: e.target.alt,
            originalTitle: e.target.nextElementSibling.children[0].dataset.title,
            title: e.target.nextElementSibling.children[0].innerText,
            genre: e.target.nextElementSibling.children[0].nextElementSibling.innerText,
            release: e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.dataset.year,
            vote: e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.nextElementSibling.innerText,
            voteCount: e.target.nextElementSibling.children[0].nextElementSibling.nextElementSibling.nextElementSibling.dataset.count,
        }
        let overlay = document.createElement("div");
        overlay.className = "overlay";
        document.body.insertAdjacentElement("afterbegin", overlay);
        createModal(movieDetails);
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
                <div class="modal-details">
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
                        <button class="modal-button" data-button="watched">add to watched</button>
                        <button class="modal-button" data-button="queue">add to queue</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    overlay[0].insertAdjacentHTML("beforeend", modal);
}

function onClick(e) {
    if (e.target.classList.contains("overlay") || e.target.classList.contains("modal-close")) {
        overlay[0].remove();
    }

    if (e.target.classList.contains("modal-button")) {
        // will be back to this later once i find a much better approach to this
        const movieData = {
            id: e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.parentElement.dataset.id,
            imgURL: e.target.parentElement.previousElementSibling.previousElementSibling.parentElement.previousElementSibling.children[0].src,
            title: e.target.parentElement.previousElementSibling.previousElementSibling.children[0].children[0].innerText,
            votes: e.target.parentElement.previousElementSibling.previousElementSibling.children[1].children[1].innerText,
            popularity: e.target.parentElement.previousElementSibling.previousElementSibling.children[2].children[1].innerText,
            originalTitle: e.target.parentElement.previousElementSibling.previousElementSibling.children[3].children[1].innerText,
            genre: e.target.parentElement.previousElementSibling.previousElementSibling.children[4].children[1].innerText,
            about: e.target.parentElement.previousElementSibling.children[1].innerText
        }

        if (e.target.dataset.button === "watched") {
            addToList(movieData, "watchList");
        }

        if (e.target.dataset.button === "queue") {
            addToList(movieData, "queueList");
        }
    }
}

function addToList(movieData, list) {
    let listStorage = JSON.parse(localStorage.getItem(list));
    let onList = false

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