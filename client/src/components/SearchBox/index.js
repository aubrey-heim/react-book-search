import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Paper,
    IconButton,
    InputBase,
    Typography
} from "@material-ui/core/";
import SearchIcon from "@material-ui/icons/Search";
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
    fontSize: 20,
    textAlign: "left",
    color: "white"
  },
  caption: {
    fontSize:25,
    textAlign: "center",
    backgroundColor: "rgba(204, 204, 204, 0.5)",
  },
  formRoot: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: "100%",
  },
  input: {
    marginLeft: "5px",
    flex: 1,
    width: "100%"
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});



export default function SearchBox(props) {
  const classes = useStyles();
  const { handleInputChange, runSearch, formDataShown} = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title}>Books Search:</Typography>
        <Paper component="form" className={classes.formRoot}>
        <InputBase
            className={classes.input}
            onChange={handleInputChange}
            value={formDataShown}
            placeholder="Search Google Books"
        />
        <IconButton type="submit" onClick={runSearch} className={classes.iconButton} aria-label="search">
            <SearchIcon />
        </IconButton>
        </Paper>
      </CardContent>
    </Card>
  );
}

SearchBox.propTypes = {
    runSearch: PropTypes.func,
    handleInputChange: PropTypes.func,
    formDataShown: PropTypes.string
};