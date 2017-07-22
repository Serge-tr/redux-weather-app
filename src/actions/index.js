import axios from 'axios';

const API_KEY = '80ad20c83d30d67ca26867a0b9525bad';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: 'FETCH_WEATHER',
    payload: request
  };
}
