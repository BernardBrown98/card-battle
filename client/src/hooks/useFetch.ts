import { useState } from 'react';

interface StatusNotifications {
  onSuccess?: () => void;
  onError?: (error: ApiError) => void;
}
export interface ApiError {
  msg: string;
}

export const useFetch = <T>(url: string, { onSuccess, onError }: StatusNotifications = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<T | undefined>(undefined);

  const doFetch = async () => {
    setIsLoading(true);
    const res = await fetch(url);
    const data = (await res.json()) as T | ApiError;
    if (res.status !== 200) {
      onError?.(data as ApiError);
      setIsLoading(false);
      return;
    }

    setData(data as T);
    setIsLoading(false);
    onSuccess?.();
  };

  return { isLoading, data, fetch: doFetch };
};
