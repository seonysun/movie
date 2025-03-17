import { useEffect, useState } from "react";
import useDebouncedFn from "./useDebouncedFn";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(true);

  const handleResize = useDebouncedFn(() => {
    setIsMobile(window.innerWidth < 768);
  }, 300);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useResize;
