import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/config";

export const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`,
  },
  params: {
    language: "ko",
  },
};

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + url, options);
        setData(response.data);
      } catch (err) {
        console.log("API 요청 에러:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
