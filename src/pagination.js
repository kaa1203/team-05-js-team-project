const list = document.getElementById('list');
const paginationLinks = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

const itemsPerPage = 5; // Change this to set items per page
let currentPage = 1;

// Calculate total pages
const totalItems = list.children.length;
const totalPages = Math.ceil(totalItems / itemsPerPage);

// Generate pagination links
for (let i = 1; i <= totalPages; i++) {
  const link = document.createElement('a');
  link.href = '#';
  link.textContent = i;
  link.addEventListener('click', () => {
    showPage(i);
  });
  paginationLinks.appendChild(link);
}

// Show initial page
showPage(currentPage);

// Function to show items for a specific page
function showPage(page) {
  // Hide all items
  for (let i = 0; i < totalItems; i++) {
    list.children[i].style.display = 'none';
  }

  // Calculate start and end indexes of items to show
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

  // Show items for the current page
  for (let i = startIndex; i < endIndex; i++) {
    list.children[i].style.display = 'block';
  }

  // Update current page
  currentPage = page;

  // Update visibility of pagination arrows
  prevButton.classList.toggle('hidden', currentPage === 1);
  nextButton.classList.toggle('hidden', currentPage === totalPages);
}

// Pagination arrow functionality
prevButton.addEventListener('click', () => {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPage < totalPages) {
    showPage(currentPage + 1);
  }
});
