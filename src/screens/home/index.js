import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectCount, setSelectedComic } from "../../features/comic/comicSlice";
import { Container } from "./styles";
import useHome from "./hooks";
import Grid from "@material-ui/core/Grid";
import { ComicCard } from "../../components";
import { ListItemIcon } from "@material-ui/core";

const Login = () => {
  const comic = useSelector(selectCount);
  const dispatch = useDispatch();

  const { getComics, loading, marvelComics } = useHome();

  useEffect(() => {
    if (comic.length === 0) {
      getComics();
    }
    console.log("comig: ", comic);
  }, []);

  function setComic(item) {
    dispatch(setSelectedComic(item));
  }

  return (
    <Container>
      <span style={{ color: "#fff" }}>home</span>
      {/* <Link to="/login">go login</Link> */}
      <Grid container spacing={2}>
        {loading && <span>carregando comics</span>}
        {!loading &&
          comic !== [] &&
          comic.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              style={{ display: "flex", flexDirection: "column" }}
            >
              {/* <span style={{ color: "#fff" }} key={index}>
                {item.title}
              </span>
              <img
                style={{ height: 200, width: 120 }}
                src={item.thumbnail.path + "/portrait_xlarge.jpg"}
              /> */}
              <ComicCard
                title={item.title}
                uri={item.thumbnail.path + "/portrait_fantastic.jpg"}
                setComic={() => setComic(item)}
              />
            </Grid>
          ))}
      </Grid>
      {/* <button onClick={() => getComics()}>search comics</button> */}
    </Container>
  );
};

export default Login;
