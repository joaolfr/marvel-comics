import React, { useState, useEffect } from "react";
import { Login, Home, ComicDetail } from "./screens";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Dark } from "./theme";
import { Switch, Route, HashRouter } from "react-router-dom";
import { Navbar } from "./components";
import { useSelector, useDispatch } from "react-redux";

import { logged, logIn } from "./redux/user/userSlice";

function App() {
  const isLogged = useSelector(logged);

  const dispatch = useDispatch();

  const [currentTheme, setCurrentTheme] = useState(Dark);

  useEffect(() => {
    const tkn = localStorage.getItem("accessToken");
    if (tkn) {
      dispatch(logIn());
    }
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        {!isLogged && <Login />}
        {isLogged && (
          <div className="container">
            <Navbar />
            <HashRouter>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail" component={ComicDetail} />
              </Switch>
            </HashRouter>
          </div>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
