import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
hideLoader()

form.addEventListener('submit', handlerGallery);

function handlerGallery(event) {
  event.preventDefault();
  const searchText = event.target.elements['search-text'].value.trim();
  showLoader();
  clearGallery();

  getImagesByQuery(searchText)
    .then(data => {
      if (data.length <= 0) {
        iziToast.error({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          position: "topLeft"
        });
        return
      }
      createGallery(data);
    })
    .catch(error => console.log(error))
    .finally(() => {
      hideLoader();
      event.target.reset();
    });
}
