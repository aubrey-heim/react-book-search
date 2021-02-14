import React from "react";
import "./App.css";
import Saved from "./pages/Saved"
import Search from "./pages/Search"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  AppBar, 
  Toolbar,
  Typography,
  MenuItem,
  IconButton,
  Container,
}from '@material-ui/core/';
import PageviewIcon from '@material-ui/icons/Pageview';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import { makeStyles } from '@material-ui/core/styles';
import Jumbotron from './components/Jumbotron';

const classes = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left"
  },
  buttons: {
    marginRight:"5px",
    height: "40px",
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography edge="start" variant="h6" className={classes.title}>
            Google Books Search
          </Typography>
          <MenuItem style={{marginLeft:"10px"}}>
            <IconButton 
                href="/search"
                color="inherit"
                style={{fontSize:"12px"}}>
                    <PageviewIcon /> Search
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton 
                href="/saved"
                color="inherit"
                style={{fontSize:"12px"}}>
                    <BookmarksIcon /> Saved
            </IconButton>
          </MenuItem>
        </Toolbar>
      </AppBar>
      
      <Container>
        <Jumbotron />
        <Router>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path="/saved">
              <Saved />
            </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}


export default App;
