import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedComic } from "../../redux/comic/comicSlice";

const ComicDetail = () => {
  const comic = useSelector(selectedComic);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("comic selecionado: ", comic);
  }, []);
  return (
    <div>
      <img src={comic.thumbnail.path + "/portrait_fantastic.jpg"} />
      <br></br>
      <hr />

      <span>Title: {comic.title}</span>
      <br></br>
      {comic.characters.available > 0 && (
        <>
          <span>Characters: </span>
          {comic.characters.items.map((item, index) => (
            <span key={index}> {item.name}</span>
          ))}
        </>
      )}
      <hr />
      <span>{comic.description}</span>
      <Link to="/">go home</Link>
    </div>
  );
};
export default ComicDetail;
