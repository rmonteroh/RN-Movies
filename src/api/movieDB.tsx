import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '035747fa620918ea646aa4910b8817d8',
    language: 'es-ES',
  },
});

export default movieDB;
