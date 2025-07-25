import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export function createGallery(arr) {
  const markup = arr
    .map(
      item =>
        `<li class="gallery-item">
      <a href="${item.largeImageURL}">
        <img src="${item.webformatURL}" alt="${item.tags}" width="360" height="200" />
      </a>
     <ul class="info-list">
    <li class="info-item">
      <p class="info-title">Likes</p>
      <p class="info-value"> ${item.likes}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Views</p>
      <p class="info-value">${item.views}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Comments</p>
      <p class="info-value">${item.comments}</p>
    </li>
    <li class="info-item">
      <p class="info-title">Downloads</p>
      <p class="info-value">${item.downloads}</p>
    </li>
  </ul>
    </li>`
    )
    .join('');

  galleryEl.insertAdjacentHTML('beforeend', markup);
}

const gallery = new SimpleLightbox('.gallery a');
const loaderEl = document.querySelector('.loader');
const galleryEl = document.querySelector('.gallery');
const loadMoreBtnEl = document.querySelector('.load-more-btn');

export function createLightbox() {
  gallery.refresh();
}

export function hideLoader() {
  loaderEl.classList.add('is-hidden');
}

export function showLoader() {
  loaderEl.classList.remove('is-hidden');
}

export function clearMarkUp() {
  galleryEl.innerHTML = '';
}

export function showLoadMoreButton() {
  loadMoreBtnEl.classList.remove('is-hidden-load-more');
}

export function hideLoadMoreButton() {
  loadMoreBtnEl.classList.add('is-hidden-load-more');
}
