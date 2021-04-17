import React from "react";
import { Wrapper } from "./styles";
import { Link } from "react-router-dom";

const ComicCard = ({ uri, title, setComic }) => {
  return (
    <Wrapper onClick={() => setComic()}>
      <Link
        to="/detail"
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          flexDirection: "column",
        }}
      >
        <img src={uri} style={{ width: "100%" }} />
        <span>{title}</span>
      </Link>
    </Wrapper>
  );
};
export default ComicCard;
