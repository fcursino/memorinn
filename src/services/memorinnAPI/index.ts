import axios from 'axios'

const memorinnAPI = axios.create({
  baseURL: 'https://memorinn-webservice.vercel.app/',
});
export default memorinnAPI