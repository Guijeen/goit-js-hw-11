import axios from 'axios';

const keyAPI = '55636858-c5012cce39e9f46aea8eda2c3';
const params = {
  key: keyAPI,
  q: 'piece',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 9,
};

axios.defaults.baseURL = `https://pixabay.com/api/`;

const div = document.querySelector('ul');
console.log(div);

axios
  .get(``, { params })
  .then(response => {
    // console.log(response.data.hits);
   div.innerHTML = markUp(response.data.hits)
  })
  .catch(error => console.log(error));

function markUp(arr) {
  console.log(arr);

  return arr
    .map(({webformatURL}) => {
      return`<li>
        <img src=${webformatURL} alt="text"/>
        </li>`;
    })
    .join('');
}
