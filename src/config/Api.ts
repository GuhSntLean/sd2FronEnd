import axios from "axios";

const API_URL = "https://cors-anywhere.herokuapp.com/https://guhsntlean-sds2.herokuapp.com/"

export function fetchProducts(){
  axios.defaults.headers['Access-Control-Allow-Origin'] ='*'
  return axios(`${API_URL}products`,{
    headers: {
      'crossDomain': true,
      'Access-Control-Allow-Origin': true,
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, DELETE',
    }
});
}