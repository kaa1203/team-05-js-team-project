<<<<<<< Updated upstream
=======
const options = { method: 'GET', headers: { accept: 'application/json' } };
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzI4ZDNhN2M5MTE3MGM2MzNkY2E1OGNkMTc2MzM0NiIsInN1YiI6IjY2MTAwYmM0M2U2ZjJiMDEzMTM4OTVhNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qexB_iqBS_60mzYwyATEfpKtUXCi2HtfdoouqNQvyts',
  },
};

fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
>>>>>>> Stashed changes
// PAGINATION
const itemsPerPage = 5;
const data = Array.from({ length: 30 }, (_, i) => `Item ${i + 1}`);

const list = document.getElementById('list');
const paginationLinksWrapper = document.getElementById('pagination-links');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function displayList(items, wrapper, itemsPerPage, page) {
  wrapper.innerHTML = '';
  page--;

  const start = itemsPerPage * page;
  const end = start + itemsPerPage;
  const paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
    const item = paginatedItems[i];
    const li = document.createElement('li');
    li.textContent = item;
    wrapper.appendChild(li);
  }
}

function setupPagination(items, wrapper, itemsPerPage) {
  wrapper.innerHTML = '';

  const pageCount = Math.ceil(items.length / itemsPerPage);

  for (let i = 1; i <= pageCount; i++) {
    const link = document.createElement('a');
    link.href = '#';
    link.textContent = i;

    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default anchor behavior

      displayList(items, list, itemsPerPage, i);

      // Remove 'active' class from all pagination links
      const paginationLinks = document.querySelectorAll('.pagination-link');
      paginationLinks.forEach(link => link.classList.remove('active'));

      // Add 'active' class to the clicked pagination link
      this.parentNode.classList.add('active');
    });

    const listItem = document.createElement('div');
    listItem.classList.add('pagination-link');
    if (i === 1) {
      listItem.classList.add('active');
    }
    listItem.appendChild(link);
    wrapper.appendChild(listItem);
  }
}

prevButton.addEventListener('click', function () {
  const activeIndex = document.querySelector(
    '.pagination-link.active a'
  ).textContent;
  const prevIndex = parseInt(activeIndex) - 1;
  if (prevIndex > 0) {
    document
      .querySelector('.pagination-link.active')
      .classList.remove('active');
    displayList(data, list, itemsPerPage, prevIndex);
    paginationLinksWrapper.children[prevIndex - 1].classList.add('active');
  }
});

nextButton.addEventListener('click', function () {
  const activeIndex = document.querySelector(
    '.pagination-link.active a'
  ).textContent;
  const nextIndex = parseInt(activeIndex) + 1;
  const pageCount = Math.ceil(data.length / itemsPerPage);
  if (nextIndex <= pageCount) {
    document
      .querySelector('.pagination-link.active')
      .classList.remove('active');
    displayList(data, list, itemsPerPage, nextIndex);
    paginationLinksWrapper.children[nextIndex - 1].classList.add('active');
  }
});

displayList(data, list, itemsPerPage, 1);
setupPagination(data, paginationLinksWrapper, itemsPerPage);
