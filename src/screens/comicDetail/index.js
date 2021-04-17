import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedComic } from "../../features/comic/comicSlice";

const ComicDetail = () => {
  const comic = useSelector(selectedComic);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("comic selecionado: ", comic);
  }, []);
  return (
    <div>
      <span>{comic.characters.items[0].name}</span>
      <hr />
      <span>{comic.description}</span>
      <img src="http://gateway.marvel.com/v1/public/creators/370/portrait_xlarge.jpg" />
      <Link to="/home">go home</Link>
    </div>
  );
};
export default ComicDetail;
