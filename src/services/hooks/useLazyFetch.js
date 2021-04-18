import { useCallback, useState } from "react";
import API from "../api";

export default (config = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetch = useCallback(
    async (options = {}) => {
      try {
        setLoading(true);
        setData(null);

        const response = await API.request({ ...config, ...options });
        setLoading(false);
        setData(response.data);

        return response.data;
      } catch (er) {
        setLoading(false);
        setError(er);
      }
    },
    [config]
  );

  return [
    fetch,
    {
      loading,
      data,
      error,
    },
  ];
};
