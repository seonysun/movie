import { useCallback, useEffect, useRef } from "react";

const useDebouncedFn = (callback, delay) => {
  const callbackRef = useRef(callback);
  const timerRef = useRef(null);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  const debouncedFunction = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current); // 이전 타이머를 정리
    }

    timerRef.current = setTimeout(() => {
      if (callbackRef.current) {
        callbackRef.current();
      }
    }, delay);
  }, [delay]);

  return debouncedFunction;
};

export default useDebouncedFn;
