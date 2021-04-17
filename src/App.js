import React, { useState, useEffect } from "react";
import { Login, Home, ComicDetail } from "./screens";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
// import { useAuth } from "./services/hooks";
import { authWithGitHub } from "./services/hooks/useAuth";
import { useSelector, useDispatch } from "react-redux";

import { logged, email, logOut, logIn } from "./redux/user/userSlice";

function App() {
  const isLogged = useSelector(logged);
  const userEmail = useSelector(email);
  const dispatch = useDispatch();

  // const [isLogged, setIsLogged] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(Dark);
  // const { getUserToken } = useAuth();

  // const url = window.location.href;
  useEffect(() => {
    console.log("is logged: ", isLogged);
    const tkn = localStorage.getItem("accessToken");
    if (tkn) {
      dispatch(logIn());
    }
  }, []);
  // useEffect(() => {
  //   console.log("mudou rota: ", url);
  //   const hasCode = url.includes("?code=");

  //   if (hasCode) {
  //     setIsLogged(true);
  //     let urlLength = url.lengtht;
  //     let index = url.indexOf("=") + 1;
  //     let code = url.slice(index, urlLength);
  //     // getUserToken(code);
  //   }
  // }, [url]);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        {!isLogged && <Login />}
        {isLogged && (
          <>
            <Navbar email={userEmail} />
            <BrowserRouter>
              <Switch>
                <Route path="/home" exact={true} component={Home} />
                <Route path="/detail" component={ComicDetail} />
                {/* <Route path="*"  component={404} /> */}
              </Switch>
            </BrowserRouter>
          </>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
