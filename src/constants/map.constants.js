import { joinUrl } from "../utils/joinUrl";

const BASE = process.env.REACT_APP_API_HOST || 'https://israel-sky.s3-eu-west-1.amazonaws.com/';

export const MAP_CONTAINER_ID = 'map';
export const WEATHER_DATA_URL = BASE;

export const PHOTO_SPOTS_DATA_URL = BASE;
export const WEATHER_PARAMS_DATA_URL = joinUrl(BASE, 'weather-params.json');
export const PHOTO_PARAMS_DATA_URL = joinUrl(BASE, 'photo-params.json');

export const MAP_WEATHER_TAB_KEY = 'weather';
export const MAP_PHOTO_SPOTS_TAB_KEY = 'photo_spots';
