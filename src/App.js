import React, { useState } from "react";
import { Counter } from "./features/counter/Counter";
import { Login } from "./screens";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { Light, Dark } from "./theme";

function App() {
  const [currentTheme, setCurrentTheme] = useState(Dark);
  return (
    <ThemeProvider theme={currentTheme}>
      <div className="App">
        {/* <Counter /> */}
        <Login />
      </div>
    </ThemeProvider>
  );
}

export default App;
