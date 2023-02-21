import axios from 'axios'

function handleErrors (err, fail) {
  if (err.response) {
    if (err.response.status === 302 || err.response.status === 401) {
      console.log('error log');
    }
    fail(err)
  }
}

export default {
  makeGetRequest (path, callback, fail) {
    axios.get(path)
      .then(callback)
      .catch((err) => {
        handleErrors(err, fail)
      })
  },
  makePostRequest (path, callback, payload, fail, headerType = 'application/json') {
    axios.post(path, payload, {
      headers: {
        'Content-Type': headerType
      }
    })
      .then(callback)
      .catch((err) => {
        handleErrors(err, fail)
      })
  },
  makeDeleteRequest (path, callback, fail) {
    axios.delete(path)
      .then(callback)
      .catch((err) => {
        handleErrors(err, fail)
      })
  }
}
