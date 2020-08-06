import axios from '../../plugins/axios'

const get_documents = () => {
  return axios.get('/list/documents')
}

export default {
  get_documents
}

