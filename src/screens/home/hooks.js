import { useCallback, useState } from "react";
import { useLazyFetch } from "../../services/hooks";
import { useSelector, useDispatch } from "react-redux";
import { setList, selectCount } from "../../redux/comic/comicSlice";
// gateway.marvel.com/v1/public/comics?ts=1&apikey=2bc06882395b9339500cb01b1dfcbb6b&hash=5960290765b89d76491c34ed7f44521e

export default () => {
  const comic = useSelector(selectCount);
  const dispatch = useDispatch();
  const [marvelComics, setMarvelComics] = useState([]);
  const [searchComics, { loading, error }] = useLazyFetch({
    url: `/comics?ts=1&apikey=2bc06882395b9339500cb01b1dfcbb6b&hash=5960290765b89d76491c34ed7f44521e`,
    method: "GET",
  });

  const getComics = useCallback(async () => {
    try {
      const data = await searchComics();

      if (data) {
        console.log("dados marvel: ", data.data.results);
        setMarvelComics(data.data.results);
        dispatch(setList(data.data.results));
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return { getComics, loading, marvelComics };
};
