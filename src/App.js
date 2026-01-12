import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { HashRouter } from "react-router-dom"; // import HashRouter

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <HashRouter>
          <Main theme={chosenTheme} />
        </HashRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
