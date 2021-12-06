import React from "react";

/** import from materail ui */
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    fontSize: "20px",
    verticalAlign: "middle",
    paddingBottom:25,
    // fontFamily: "",
  },
}));

export default function SecondAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#0097FE", height: "40px" }}
      >
        <Toolbar>
          <Box display="flex" flexGrow={1}>
            <Typography variant="h4" className={classes.title}>
             Recommended Movies
            </Typography>
          </Box>
          <Typography variant="h4" className={classes.title}>
           The Best Of Entertainment
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
