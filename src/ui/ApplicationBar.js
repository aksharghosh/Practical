import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SurfingIcon from "@mui/icons-material/Surfing";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/Context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./ApplicationBar.module.css";

const ApplicationBar = () => {
  const [, setIsDark] = useContext(Context);
  const toggleDarkHandler = () => {
    const local = localStorage.getItem("isDark");
    if (local === "false") {
      localStorage.setItem("isDark", "true");
    } else if (local === "true") {
      localStorage.setItem("isDark", "false");
    }
    const changedMode = localStorage.getItem("isDark");
    setIsDark(changedMode);
  };

  const navigate = useNavigate();

  return (
    <AppBar
      position="static"
      color="primary"
      enableColorOnDark
      sx={{ paddingLeft: 2, width: "100%", overflow: "auto" }}
    >
      <Toolbar>
        <SurfingIcon sx={{ fontSize: 40 }} />
        <Typography
          variant="h5"
          component="div"
          sx={{
            flexGrow: 10,
            paddingLeft: 2,
            paddingRight: 5,
            fontSize: 30,
            fontWeight: "bold",
            letterSpacing: 7,
          }}
          onClick={() => {
            navigate("/");
          }}
        >
          USERZZZ
        </Typography>

        <NavLink
          to="/users"
          className={(navData) =>
            navData.isActive ? classes.active : classes.standard
          }
        >
          ALL USERS
        </NavLink>

        <NavLink
          to="/newuser"
          className={(navData) =>
            navData.isActive ? classes.active : classes.standard
          }
        >
          ADD NEW USER
        </NavLink>

        <Button
          color="inherit"
          size="lg"
          startIcon={<DarkModeIcon />}
          onClick={toggleDarkHandler}
        />
      </Toolbar>
    </AppBar>
  );
};

export default ApplicationBar;
