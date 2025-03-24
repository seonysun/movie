import { useEffect, useRef } from "react";

const useIntersectionObserver = ({ hasNextPage, fetchData }) => {
  const observerRef = useRef(null);

  useEffect(() => {
    if (!hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 0.5 } //요소가 100% 다 보일때 감지
    );

    if (observerRef.current) observer.observe(observerRef.current);
    //ref 요소 렌더링이 완료되면(DOM 요소 참조 시 null 아님)

    return () => observer.disconnect();
  }, [hasNextPage, fetchData]);

  return observerRef;
};

export default useIntersectionObserver;
