import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "10px",
    backgroundColor:"#131836",
    padding: "20px",
    marginTop: "20px"
  },
  title: {
    fontSize: 50,
    textAlign: "center",
    backgroundColor: "rgba(204, 204, 204, 0.5)"
  },
  caption: {
    fontSize:25,
    textAlign: "center",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
  }
});



export default function Jumbotron() {
  const classes = useStyles();

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          (React) Google Books Search
        </Typography>
        <Typography className={classes.caption} gutterBottom>
          Search for and Save Books of Interest
        </Typography>
      </CardContent>
    </Card>
  );
}

