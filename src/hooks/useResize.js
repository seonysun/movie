import { useEffect, useState } from "react";
import useDebouncedFn from "./useDebouncedFn";

const useResize = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleResize = useDebouncedFn(() => {
    setIsMobile(window.innerWidth < 768);
  }, 300);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return isMobile;
};

export default useResize;
