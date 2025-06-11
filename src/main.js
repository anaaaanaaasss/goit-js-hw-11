import { getImagesByQuery } from './pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('form');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.target.elements.searchQuery.value.trim();

  if (!query) {
    iziToast.warning({ message: 'Введите запрос', position: 'topRight' });
    return;
  }

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    const images = data.hits;

    if (images.length === 0) {
      iziToast.info({ message: 'Ничего не найдено', position: 'topRight' });
    } else {
      createGallery(images);
    }
  } catch (err) {
    iziToast.error({ message: 'Ошибка при загрузке изображений', position: 'topRight' });
  } finally {
    hideLoader();
  }
});