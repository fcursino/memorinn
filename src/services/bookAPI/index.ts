import axios from 'axios'

const bookAPI = axios.create({
  baseURL: 'https://api.repo.nypl.org/api/v2',
  headers: {
    'Accept': 'application/json',
    'Authorization': 'Token token="ttxsbb6xnzimzjry"',
    'Access-Control-Cross-Origin': '*'
  },
});
export default bookAPI