import axios from 'axios';
import { useEffect, useState } from 'react';

type UseFetchReturnType<T> = {
  data: T | null;
  isLoading: boolean;
  error: boolean;
};

function useFetch<T>(url: string): UseFetchReturnType<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<T>(url);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
