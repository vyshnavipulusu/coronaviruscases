import apiCall from '@/api/apiUtil/makeApiCall.js'

const url = 'https://api.covid19api.com/summary';

export default {
  coronaCasesDetails (callback, fail) {
    apiCall.makeGetRequest(url, callback, fail)
  }
}
