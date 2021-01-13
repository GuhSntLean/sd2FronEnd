import axios from "axios";
import { OrderPayload } from "../pages/Orders/types";

const API_URL = "https://cors-anywhere.herokuapp.com/https://guhsntlean-sds2.herokuapp.com/";
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX ;

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

export function saveOrder(payload: OrderPayload){
  return axios.post(`${API_URL}orders`, payload);
}

export function fetchLocalMapBox(local: string){
  return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}