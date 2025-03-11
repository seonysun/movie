import { useEffect, useState } from "react";

const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => clearTimeout(debounceTimer);
  }, [value, delay]);
  return debouncedValue;
};

export default useDebouncedValue;
