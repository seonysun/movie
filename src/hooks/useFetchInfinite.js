import { useEffect, useState } from "react";
import { instance } from "./instance";

const useFetchInfinite = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(true);

  const fetchData = async () => {
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
    } catch (err) {
      console.log("API 요청 에러:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight; // 문서 전체 높이
      const scrollTop = window.scrollY; // 현재 스크롤 위치 (위쪽부터 얼마나 내렸는지)
      const clientHeight = window.innerHeight; // 화면 높이 (보이는 영역)

      if (
        scrollHeight - (scrollTop + clientHeight) <= 10 &&
        !loading &&
        hasNextPage
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasNextPage]);

  useEffect(() => {
    fetchData();
  }, [url, page]);

  return { data, loading, hasNextPage, fetchData };
};

export default useFetchInfinite;
