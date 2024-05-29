import axios from 'axios'

const bookAPI = axios.create({
  baseURL: 'https://openlibrary.org/search.json?title=',
});
export default bookAPI