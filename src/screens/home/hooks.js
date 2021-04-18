import { useCallback } from "react";
import { useLazyFetch } from "../../services/hooks";
import { useDispatch } from "react-redux";
import { setList } from "../../redux/comic/comicSlice";

export default () => {
  const dispatch = useDispatch();
  const [searchComics, { loading, error }] = useLazyFetch({
    url: `/comics?ts=1&apikey=${process.env.REACT_APP_MARVEL_API_KEY}&hash=${process.env.REACT_APP_MARVEL_API_HASH}`,
    method: "GET",
  });

  const getComics = useCallback(async () => {
    try {
      const data = await searchComics();

      if (data) {
        dispatch(setList(data.data.results));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { getComics, loading };
};
