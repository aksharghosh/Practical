import { createTheme } from "@mui/material/styles";

const themeDark = createTheme({
  palette: {
    primary: {
      light: "#487e4c",
      main: "#1b5e20",
      dark: "#124116",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#dce778",
      main: "#d4e157",
      dark: "#949d3c",
      contrastText: "#000000",
    },
    mode: "dark",
  },
});

export default themeDark;
