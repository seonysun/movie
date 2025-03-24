import axios from "axios";
import { API_URL } from "../constants/config";

export const instance = axios.create({
  baseURL: API_URL,
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
  params: {
    language: "ko",
    include_adult: false,
  },
});
