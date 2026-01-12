import React from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import { chosenTheme } from "./theme";
import { GlobalStyles } from "./global";
import { BrowserRouter } from "react-router-dom"; // import BrowserRouter

function App() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <BrowserRouter basename="/FMportfolio">
          <Main theme={chosenTheme} />
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
