import axios from 'axios'

const bookAPI = axios.create({
  baseURL: 'https://openlibrary.org',
});
export default bookAPI