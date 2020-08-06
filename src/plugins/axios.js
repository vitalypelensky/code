import axios from 'axios'

let ROOT_URL = 'http://'

export default axios.create({
  baseURL: `${ROOT_URL}`,
  headers: {
    //'Authorization': 'Bearer ' + '',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Headers' : 'Origin, X-Requested-With, Content-Type, Accept'
  }
})
