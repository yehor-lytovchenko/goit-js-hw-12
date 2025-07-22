import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  createLightbox,
  hideLoader,
  showLoader,
  clearMarkUp,
  hideLoadMoreButton,
  showLoadMoreButton,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');
const loadMoreBtnEl = document.querySelector('.load-more-btn');

let page = 1;
let perPage = 15;
let searchQuery = null;

// Handlers
async function onSubmit(e) {
  e.preventDefault();
  hideLoadMoreButton();
  clearMarkUp();
  showLoader();
  page = 1;

  searchQuery = e.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a valid search query.',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  try {
    const res = await getImagesByQuery(searchQuery, page);
    if (res.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please, try again!',
        position: 'topRight',
        icon: '',
      });
      return;
    }

    createGallery(res.hits);
    createLightbox();

    if (res.totalHits > perPage) {
      showLoadMoreButton();
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }
}

async function onClick(e) {
  hideLoadMoreButton();
  showLoader();
  page++;

  try {
    const res = await getImagesByQuery(searchQuery, page);

    createGallery(res.hits);
    createLightbox();

    showLoadMoreButton();

    const lastPage = Math.ceil(res.totalHits / perPage);

    if (lastPage === page) {
      hideLoadMoreButton();
      iziToast.info({
        message: "We're sorry, but you've reached the end of search results.",
      });
    }
  } catch (err) {
    console.log(err);
  } finally {
    hideLoader();
  }

  const firstItemEl = document.querySelector('.gallery-item');

  if (firstItemEl) {
    const cardHeight = firstItemEl.getBoundingClientRect().height;

    window.scrollBy({
      top: 2 * cardHeight,
      behavior: 'smooth',
    });
  }
}

// Event Listeners
formEl.addEventListener('submit', onSubmit);
loadMoreBtnEl.addEventListener('click', onClick);
