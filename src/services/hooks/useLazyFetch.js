import { useCallback, useState } from "react";
import API from "../api";

export default (config = {}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  // console.log('config: ', config)

  const fetch = useCallback(
    async (options = {}) => {
      // console.log('option : ', { ...config, ...options })
      console.log("config : ", config);

      try {
        setLoading(true);
        setData(null);

        const response = await API.request({ ...config, ...options });
        setLoading(false);
        setData(response.data);
        console.log("response: ", response.data);

        return response.data;
      } catch (er) {
        console.log("erros: ", er);
        console.log("erro conf: ", config);
        setLoading(false);
        setError(er);
        // setError(null)
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
