import React from "react";
import { Wrapper, Title } from "./styles";
import { Link } from "react-router-dom";

const ComicCard = ({ uri, title, setComic }) => {
  return (
    <Link
      to="/detail"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        textDecoration: "none",
        width: "100%",
      }}
    >
      <Wrapper onClick={() => setComic()}>
        <img alt="comic" src={uri} style={{ width: 200, height: 270 }} />
        <Title>{title}</Title>
      </Wrapper>
    </Link>
  );
};
export default ComicCard;
