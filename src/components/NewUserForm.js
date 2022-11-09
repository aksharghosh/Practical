import { Button } from "@mui/material";
import { Card } from "@mui/material";
import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import classes from "./NewUserForm.module.css";

import { useReducer, useState } from "react";

const reducerFn = (state, action) => {
  if (action.type === "FIRSTNAME_ONCHANGE") {
    return { ...state, firstName: action.payload };
  }
  if (action.type === "LASTNAME_ONCHANGE") {
    return { ...state, lastName: action.payload };
  }
  if (action.type === "EMAIL_ONCHANGE") {
    return { ...state, email: action.payload };
  }
  if (action.type === "FIRSTNAME_ONBLUR") {
    return { ...state, firstNameTouched: action.payload };
  }
  if (action.type === "LASTNAME_ONBLUR") {
    return { ...state, lastNameTouched: action.payload };
  }
  if (action.type === "EMAIL_ONBLUR") {
    return { ...state, emailTouched: action.payload };
  }
};

const NewUserForm = (props) => {
  const [firstNameHasError, setFirstNameHasError] = useState(false);
  const [lastNameHasError, setLastNameHasError] = useState(false);
  const [emailHasError, setEmailHasError] = useState(false);

  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    firstNameTouched: false,
    lastNameTouched: false,
    emailTouched: false,
  };
  const [newState, dispatch] = useReducer(reducerFn, initialState);

  const firstNameChangeHandler = (e) => {
    if (e.target.value.trim().length === 0 && newState.firstNameTouched) {
      setFirstNameHasError(true);
    } else {
      setFirstNameHasError(false);
    }
    dispatch({ type: "FIRSTNAME_ONCHANGE", payload: e.target.value });
  };

  const lastNameChangeHandler = (e) => {
    if (e.target.value.trim().length === 0 && newState.lastNameTouched) {
      setLastNameHasError(true);
    } else {
      setLastNameHasError(false);
    }
    dispatch({ type: "LASTNAME_ONCHANGE", payload: e.target.value });
  };

  const emailChangeHandler = (e) => {
    if (
      (e.target.value.trim().length < 5 ||
        !e.target.value.includes(".") ||
        !e.target.value.includes("@")) &&
      newState.emailTouched
    ) {
      setEmailHasError(true);
    } else {
      setEmailHasError(false);
    }
    dispatch({ type: "EMAIL_ONCHANGE", payload: e.target.value });
  };

  const firstNameBlurHandler = () => {
    if (newState.firstName.trim().length === 0) {
      setFirstNameHasError(true);
    } else {
      setFirstNameHasError(false);
    }
    dispatch({ type: "FIRSTNAME_ONBLUR", payload: true });
  };

  const lastNameBlurHandler = () => {
    if (newState.lastName.trim().length === 0) {
      setLastNameHasError(true);
    } else {
      setLastNameHasError(false);
    }
    dispatch({ type: "LASTNAME_ONBLUR", payload: true });
  };

  const emailBlurHandler = () => {
    if (
      newState.email.trim().length < 5 ||
      !newState.email.includes(".") ||
      !newState.email.includes("@")
    ) {
      setEmailHasError(true);
    } else {
      setEmailHasError(false);
    }
    dispatch({ type: "EMAIL_ONBLUR", payload: true });
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (firstNameHasError || lastNameHasError || emailHasError) {
      return;
    }
    if (!firstNameHasError && !lastNameHasError && !emailHasError) {
      props.formDataHandler(newState);
      dispatch({ type: "FIRSTNAME_ONCHANGE", payload: "" });
      dispatch({ type: "LASTNAME_ONCHANGE", payload: "" });
      dispatch({ type: "EMAIL_ONCHANGE", payload: "" });
      dispatch({ type: "FIRSTNAME_ONBLUR", payload: false });
      dispatch({ type: "LASTNAME_ONBLUR", payload: false });
      dispatch({ type: "EMAIL_ONBLUR", payload: false });
    }
  };

  return (
    <>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          mt: "70px",
          transform: "scale(1.2)",
          width: "300px",
        }}
      >
        <Card variant="elevation" elevation={10}>
          <h2>NEW USER FORM</h2>
          <form onSubmit={formSubmitHandler}>
            <CardContent>
              <div>
                <label htmlFor="firstname" />
                <input
                  className={
                    firstNameHasError ? classes.error : classes.standard
                  }
                  type="text"
                  id="firstname"
                  placeholder="First Name"
                  value={newState.firstName}
                  onChange={firstNameChangeHandler}
                  onBlur={firstNameBlurHandler}
                />
                <p
                  className={
                    firstNameHasError ? classes.error : classes.standard
                  }
                >
                  First Name should at least be 1 character long
                </p>
              </div>
              <div>
                <label htmlFor="lastname" />
                <input
                  className={
                    lastNameHasError ? classes.error : classes.standard
                  }
                  type="text"
                  id="lastname"
                  placeholder="Last Name"
                  value={newState.lastName}
                  onChange={lastNameChangeHandler}
                  onBlur={lastNameBlurHandler}
                />
                <p
                  className={
                    lastNameHasError ? classes.error : classes.standard
                  }
                >
                  Last Name should at least be 1 character long
                </p>
              </div>
              <div>
                <label htmlFor="emailid" />
                <input
                  className={emailHasError ? classes.error : classes.standard}
                  type="email"
                  id="emailid"
                  placeholder="Email"
                  value={newState.email}
                  onChange={emailChangeHandler}
                  onBlur={emailBlurHandler}
                />
                <p className={emailHasError ? classes.error : classes.standard}>
                  Email should at least be 5 characters long including @ and .
                </p>
              </div>
            </CardContent>
            <CardActions>
              <Button
                color="secondary"
                variant="contained"
                sx={{ width: "100%", marginBottom: "20px" }}
                type="submit"
                disabled={
                  !firstNameHasError && !lastNameHasError && !emailHasError
                    ? false
                    : true
                }
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </Card>
      </Box>
    </>
  );
};

export default NewUserForm;
