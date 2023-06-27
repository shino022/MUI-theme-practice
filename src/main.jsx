import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// const theme = createTheme({
//   palette: {
//       primary: {
//           main: '#2C5F2D',
//       },
//       secondary: {
//           main: '#97BC62',
//       }
//    }
// });

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <main>This app is using the dark mode</main>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  rootElement
);
