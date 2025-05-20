import Axios from 'axios';

const API_KEY = '50394880-18f1d62e7610047a874f2c643';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return Axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  })
    .then(response => response.data)
    .catch(error => {
      console.error('Request failed:', error);
    });
}
