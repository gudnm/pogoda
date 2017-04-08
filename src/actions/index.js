import axios from 'axios';

const API_KEY = "3afd590f679dc38c25c6762fd246a77d";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

function splitTerm(term) {
  let parts = term.split(', ');
  let location = {city: parts[0], country: 'US'}
  if (parts.length > 1) {
    location.country = parts[1]
  }
  console.log(location);
  return location;
}

export function fetchWeather(term) {

  const { city, country } = splitTerm(term);

  const url = `${ROOT_URL}&q=${city},${country}`;
  console.log(url);
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}

export function applyDefaultLocation(location) {
  return fetchWeather(location);
}
