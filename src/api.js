const API_URL = process.env === 'production' ? 'http://localhost:34567' : 'http://localhost:34567'
const URL_DATA = Object.keys(obj).map(k => `${k}=${obj[k]}`)


const _fetchApi = (
  url,
  success = (f) => f,
  error = (f) => f,
  empty = (f) => f
) => {
  fetch(API_URL + url)
    .then((raw) => raw.json())
    .then((response) => {
      if (response) {
        success(response);
      } else {
        // console.log('Empty response');
        empty();
      }
    })
    .catch((err) => {
      // console.log(url);
      console.log(err)
      error(err);
    });
};

export default {
  _fetchApi, API_URL, URL_DATA
}