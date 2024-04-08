const modal = document.getElementById('myModal');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButton = document.querySelector('.close');

function closeModal() {
    modal.classList.add("is-hidden");
}

modalOpenButtons[0].addEventListener('click', function () {
    modal.classList.remove("is-hidden");
});

modalCloseButton.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal-overlay")) {
        closeModal();
    }
})
