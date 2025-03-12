import { useCallback, useEffect, useRef } from "react";

const useDebouncedFn = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timerRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFunction = useCallback(
    (...args) => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }

      timerRef.current = setTimeout(() => {
        if (callbackRef.current) {
          callbackRef.current(...args);
        }
      }, delay);
    },
    [delay]
  );

  return debouncedFunction;
};

export default useDebouncedFn;
