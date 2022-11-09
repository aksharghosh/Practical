import { createTheme } from "@mui/material/styles";

const themeLight = createTheme({
  palette: {
    primary: {
      light: "#ed4b82",
      main: "#e91e63",
      dark: "#a31545",
      contrastText: "#FFFFFF",
    },
    secondary: {
      light: "#c786d3",
      main: "#ba68c8",
      dark: "#82488c",
      contrastText: "#FFFFFF",
    },
    mode: "light",
  },
});

export default themeLight;
