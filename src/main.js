import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

// Описаний у документації
import SimpleLightbox from 'simplelightbox';
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', handlerGallery);

function handlerGallery(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();
  showLoader();
  clearGallery();

  getImagesByQuery(searchText)
    .then(response => {
      if (response.data.hits.length <= 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: "topLeft"
        });
      }
      createGallery(response.data.hits);
      let galleryViewer = new SimpleLightbox('.gallery-card a', {
        captionsData: 'alt',
        captionDelay: 250,
      });
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
