const modal = document.getElementById('myModal');
const modalOpenButtons = document.querySelectorAll('[data-modal-open]');
const modalCloseButton = document.querySelector('.close');
const teamMembers = document.querySelectorAll('.team-member');

let currentMemberIndex = 0;

function openModal() {
    modal.classList.remove("is-hidden");
    showMember(currentMemberIndex);
}

function closeModal() {
    modal.classList.add("is-hidden");
}

function showMember(index) {
    // Hide all team members
    teamMembers.forEach(member => {
        member.style.display = 'none';
    });
    // Show the selected team member
    teamMembers[index].style.display = 'block';
}

modalOpenButtons[0].addEventListener('click', openModal);

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
});

// Navigate to the next team member
document.getElementById('nextMember').addEventListener('click', () => {
    currentMemberIndex = (currentMemberIndex + 1) % teamMembers.length;
    showMember(currentMemberIndex);
});

// Navigate to the previous team member
document.getElementById('prevMember').addEventListener('click', () => {
    currentMemberIndex = (currentMemberIndex - 1 + teamMembers.length) % teamMembers.length;
    showMember(currentMemberIndex);
});
