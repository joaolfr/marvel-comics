import React, { useEffect } from "react";
import Loader from "react-loader-spinner";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, setSelectedComic } from "../../redux/comic/comicSlice";
import { Container, LoadSpan } from "./styles";
import useHome from "./hooks";
import Grid from "@material-ui/core/Grid";
import { ComicCard } from "../../components";

const Login = () => {
  const comic = useSelector(selectCount);
  const dispatch = useDispatch();
  const { getComics, loading, marvelComics } = useHome();

  useEffect(() => {
    if (comic.length === 0) {
      getComics();
    }
  }, []);

  function setComic(item) {
    dispatch(setSelectedComic(item));
  }

  return (
    <Container>
      <Grid
        container
        spacing={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {loading && (
          <>
            <LoadSpan>Carregando comics</LoadSpan>
            <Loader type="Oval" color="#ed1d24" height={40} width={40} />
          </>
        )}
        {!loading &&
          comic !== [] &&
          comic.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={4}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
              key={index}
            >
              <ComicCard
                title={item.title}
                uri={item.thumbnail.path + "/portrait_xlarge.jpg"}
                setComic={() => setComic(item)}
              />
            </Grid>
          ))}
      </Grid>
    </Container>
  );
};

export default Login;
