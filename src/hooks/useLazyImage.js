import { useEffect, useRef } from "react";

const useLazyImage = () => {
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = entry.target.getAttribute("data-src");

            observer.unobserve(img);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(imgRef.current);
  }, []);

  return imgRef;
};

export default useLazyImage;
