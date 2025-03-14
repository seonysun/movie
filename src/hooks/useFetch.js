import { useEffect, useState } from "react";
import { instance } from "./instance";

const useFetch = (url, deps) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await instance.get(url);
        setData(response.data);
      } catch (err) {
        console.log("API 요청 에러:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, deps]);

  return { data, loading };
};

export default useFetch;
