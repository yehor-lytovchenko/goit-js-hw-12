import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  createLightbox,
  hideLoader,
  showLoader,
  clearMarkUp,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const formEl = document.querySelector('.form');

const galleryEl = document.querySelector('.gallery');

function onSubmit(e) {
  e.preventDefault();
  clearMarkUp();
  showLoader();

  const searchQuery = e.target.elements['search-text'].value.trim();

  if (!searchQuery) {
    iziToast.error({
      message: 'Please enter a valid search query.',
      position: 'topRight',
    });
    hideLoader();
    return;
  }

  getImagesByQuery(searchQuery)
    .then(response => {
      if (response.hits.length === 0) {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please, try again!',
          position: 'topRight',
          icon: '',
        });
        return;
      }

      galleryEl.innerHTML = createGallery(response.hits);
      createLightbox();
    })
    .catch(err => console.log(err))
    .finally(() => {
      hideLoader();
    });
}

formEl.addEventListener('submit', onSubmit);
