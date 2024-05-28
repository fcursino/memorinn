import axios from 'axios'

const bookAPI = axios.create({
  baseURL: 'https://api2.isbndb.com',
  headers: {
    'Authorization': 'Token token=ttxsbb6xnzimzjry'
  },
});
export default bookAPI