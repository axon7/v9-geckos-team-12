import React from "react";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    top: "auto",
    bottom: 0
  }
});

const NavigationBottom = () => {
  const classes = useStyles();

  return (
    <div>
      <AppBar position="fixed" color="primary" className={classes.appBar}>
        <Toolbar style={{ alignSelf: "center" }}>
          <Box p={2}>
            <Typography
              variant="button"
              color="inherit"
              style={{ borderRight: "0.1em solid ", paddingRight: "33px" }}
            >
              Our Catalog
            </Typography>
          </Box>
          <Box p={2}>
            <Typography
              variant="button"
              color="inherit"
              style={{ borderRight: "0.1em solid ", paddingRight: "33px" }}
            >
              Terms & Conditions
            </Typography>
          </Box>
          <Box p={2}>
            <Typography variant="button" color="inherit">
              Privacy
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBottom;
