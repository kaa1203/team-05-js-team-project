import { displayMovies, movieGalleryEl } from "./index.js";

const navEl = document.querySelector(".nav-bar");
const navFormEl = document.querySelector(".nav-form");
const mlButtonsEl = document.getElementsByClassName("ml-buttons");
const headerEl = document.querySelector("header");

navEl.addEventListener("click", navigation);

function navigation(e) {
    e.preventDefault();
    const home = e.currentTarget.children[1].children[0].children[0];
    const lib = e.currentTarget.children[1].children[1].children[0];

    if (e.target.tagName === "H2") {
        navFormEl.classList.remove("is-hidden");
        if (mlButtonsEl.length > 0) mlButtonsEl[0].remove();
        headerEl.removeAttribute("class");
        displayMovies();
    }

    if (e.target.tagName === "A") {
        if (e.target.innerText === "HOME") {
            if (mlButtonsEl.length > 0) mlButtonsEl[0].remove()
            navFormEl.classList.remove("is-hidden");
            headerEl.removeAttribute("class");
            displayMovies();
        } else {
            navFormEl.classList.add("is-hidden");
            if (mlButtonsEl.length <= 0) createButtons();
            headerEl.classList.add("library");
        }
    }
    
    if (headerEl.classList.contains("library")) {
        home.classList.remove("active");
        lib.classList.add("active");
        mlButtonsEl[0].children[0].classList.add("active");
    } else {
        lib.classList.remove("active");
        home.classList.add("active");
    }
}


function createButtons() {
    const mlButtonWrapper =
    `
        <div class="ml-buttons">
            <button type="button" class="ml-button">watched</button>
            <button type="button" class="ml-button">queue</button>
        </div>
    ` ;
    navEl.insertAdjacentHTML("afterend", mlButtonWrapper);
}





