import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectedComic } from "../../redux/comic/comicSlice";
import {
  Wrapper,
  Title,
  SubTitle,
  InfoWrapper,
  ImageWrapper,
  ReturnWrapper,
  ReturnIcon,
  SmallTitle,
} from "./styles";
import Grid from "@material-ui/core/Grid";

const ComicDetail = () => {
  const comic = useSelector(selectedComic);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <ReturnWrapper>
        <ReturnIcon />
        <Link to="/">
          <SubTitle> Voltar </SubTitle>
        </Link>
      </ReturnWrapper>
      <Grid
        container
        style={{ display: "flex", flexDirection: "row", flex: 1 }}
      >
        <Grid item xs={12} sm={6} md={6}>
          <ImageWrapper>
            <img src={comic.thumbnail.path + "/portrait_uncanny.jpg"} />
          </ImageWrapper>
        </Grid>

        <Grid item xs={12} sm={6} md={6}>
          <InfoWrapper>
            <Title> {comic.title}</Title>
            <br></br>

            <SubTitle>{comic.description}</SubTitle>
            <hr />
            {comic.characters.available > 0 && (
              <div>
                <SubTitle>Characters: </SubTitle>
                {comic.characters.items.map((item, index) => (
                  <SmallTitle key={index}> {item.name}</SmallTitle>
                ))}
              </div>
            )}
          </InfoWrapper>
        </Grid>
      </Grid>
    </Wrapper>
  );
};
export default ComicDetail;
