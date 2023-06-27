import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
//   typography: {
//     fontFamily: "Times New Roman",
//     fontSize: 15,
//     h1: {
//       fontFamily: "Roboto",
//       fontSize: 15,
//     },
//   },
// });
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
const ToggleColorMode = () => {
  const [mode, setMode] = React.useState("light");
  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );
  return (
    <ThemeProvider theme={theme}>
      <App mode={mode} setMode={setMode} />
    </ThemeProvider>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>,
  rootElement
);
