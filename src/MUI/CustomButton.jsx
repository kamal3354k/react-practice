import React from "react";
import Button from "@mui/material/Button";
import {makeStyles,useTheme} from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
  root: {
    height: "100vh",
  },
  button: {
    backgroundColor: "blue !important",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "red !important",
    },
  },
}));

const CustomButton = () => {
  const classes = useStyle();
  const hookTheme = useTheme();
  console.log(hookTheme)

  return (
    <div className={classes.root}>
      <Button className={classes.button} variant="contained">
        Button
      </Button>
    </div>
  );
};

export default CustomButton;
