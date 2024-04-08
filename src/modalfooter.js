document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
    const modalCloseButton = document.querySelector('.close');

    function closeModal() {
        modal.style.display = 'none';
    }

    modalOpenButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            modal.style.display = 'block';
        });
    });

    modalCloseButton.addEventListener('click', closeModal);

    window.addEventListener('click', function (event) {
        if (event.target == modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && modal.style.display === 'block') {
            closeModal();
        }
    });
});
