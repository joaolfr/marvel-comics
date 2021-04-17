import React, { useState, useEffect } from "react";
import { Login, Home, ComicDetail } from "./screens";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./theme";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navbar } from "./components";
import { useAuth } from "./services/hooks";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(Dark);
  const { getUserToken } = useAuth();

  const url = window.location.href;

  useEffect(() => {
    console.log("mudou rota: ", url);
    const hasCode = url.includes("?code=");

    if (hasCode) {
      setIsLogged(true);
      let urlLength = url.lengtht;
      let index = url.indexOf("=") + 1;
      let code = url.slice(index, urlLength);
      getUserToken(code);
    }
  }, [url]);

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        {!isLogged && <Login />}
        {isLogged && (
          <>
            <Navbar />
            <BrowserRouter>
              <Switch>
                {/* <Route path="/login" exact={true} component={Login} /> */}
                <Route path="/home" component={Home} />
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
