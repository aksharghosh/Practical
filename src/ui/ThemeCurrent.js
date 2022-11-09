import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Context } from "../store/Context";
import { useContext } from "react";
import themeDark from "./ThemeDark";
import themeLight from "./ThemeLight";

const ThemeCurrent = (props) => {
  const [isDark] = useContext(Context);
  let theme;
  if (isDark === "true") {
    theme = themeDark;
  } else if (isDark === "false") {
    theme = themeLight;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default ThemeCurrent;
