import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Card, CardContent, Typography, 
} from '@material-ui/core/';
import API from '../utils/API';
import BookBox from "../components/BookBox"


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    marginBottom: "10px",
    padding: "20px",
    marginTop: "20px",
    backgroundColor: "#131836"
  },
  buttons: {
    marginRight: theme.spacing(2),
    height: "40px",
    textAlign: "left"
  },
  title: {
    fontSize: 20,
    textAlign: "left",
    color: "white"
  },
}));

export default function Search() {
  const [savedBooks, setSavedBooks] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    loadBooks()
  }, [])


  function loadBooks() {
    API.getBooks()
      .then(res => 
        setSavedBooks(res.data)
      )
      .catch(err => console.log(err));
  };

  const onDelete = (id) => {
    API.deleteBook(id)
      .then(res => loadBooks())
      .catch(err => console.log(err))
  }

  return (
    <div>
      <Card className={classes.root } variant="outlined">
        <CardContent>
          <Typography className={classes.title}>Saved Books:</Typography>
          { savedBooks  ? 
              savedBooks.map((value) => {
                return (
                  <BookBox page="save" key={value._id} bookId={value._id} onDelete={onDelete} {...value}/>
                );
              })
            :
            <Typography className={classes.title}><p>Save a book to get started</p></Typography>   
          }  
        </CardContent>

      </Card>
    </div>
  );
}
