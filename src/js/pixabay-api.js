import axios from 'axios';

const keyAPI = '55636858-c5012cce39e9f46aea8eda2c3';
axios.defaults.baseURL = `https://pixabay.com/api/?key${keyAPI}`;

axios
  .get(`https://pixabay.com/api/?key${keyAPI}`)
  .then(response => console.log(response).catch(erroe => console.log(error)));

  