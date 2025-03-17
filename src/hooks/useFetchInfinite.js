import { useCallback, useState } from "react";
import { instance } from "./instance";

const useFetchInfinite = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = useCallback(async () => {
    if (loading || !hasNextPage) return;

    setLoading(true);
    try {
      const response = await instance.get(url, {
        params: {
          page,
        },
      });

      setData((prev) => {
        const newData = response.data.results.filter(
          (newItem) => !prev.some((prevItem) => prevItem.id === newItem.id)
        );
        return [...prev, ...newData];
      });

      setHasNextPage(response.data.page < response.data.total_pages);
      setPage((prev) => prev + 1);
    } catch (err) {
      console.log("API 요청 에러:", err);
    } finally {
      setLoading(false);
    }
  }, [url, page]);

  return { data, loading, hasNextPage, fetchData };
};

export default useFetchInfinite;
