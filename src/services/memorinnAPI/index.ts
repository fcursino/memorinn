import axios from 'axios'

const memorinnAPI = axios.create({
  baseURL: 'https://memorinn-webservice.vercel.app/',
  // baseURL: 'http://localhost:3333/'
});
export default memorinnAPI