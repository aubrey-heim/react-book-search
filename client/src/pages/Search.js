import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from "../components/SearchBox"
import {
    Card, CardContent, Typography, 
} from '@material-ui/core/';
import API from '../utils/API';
import BookBox from "../components/BookBox"
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


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
  const [open, setOpen] = React.useState(false);
  const [formData, setFormData] = useState({ newSearch: "" });
  const [searchResults, setSearchResults] = useState([]);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({ newSearch: value });
    
  };

  const runSearch = (event) => {
    event.preventDefault()
    API.getGoogle(formData.newSearch)
    .then(res => {
        setSearchResults(res.data.items)
    })
    .catch(err => console.log(err))
    setFormData({newSearch: ""})
  }

  const onSave = (bookInfo) => {
    API.saveBook({
      title: bookInfo.title,
      authors: bookInfo.authors,
      description: bookInfo.description,
      image: bookInfo.image,
      link: bookInfo.link
    })
      .then(res => setOpen(true))
      .catch(err => console.log(err))
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
      <SearchBox 
        formDataShown={formData.newSearch} 
        handleInputChange={handleInputChange}
        runSearch={runSearch}/>
      <Card className={classes.root } variant="outlined">
        <CardContent>
          <Typography className={classes.title}>Results:</Typography>
          { searchResults  ? 
              searchResults.map((value) => {
                const {volumeInfo} = value;
                return (
                  <BookBox page="search" key={value.id} onSave={onSave} image={volumeInfo.imageLinks.thumbnail}
                  link={volumeInfo.infoLink}  {...volumeInfo}/>
                );
              })
            :
            <Typography className={classes.title}><p>Search for a book to get started</p></Typography>   
          }  
        </CardContent>

      </Card>
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        message="Book saved!"
        action={
          <React.Fragment>
            <IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
              <CloseIcon fontSize="small" />
            </IconButton>
          </React.Fragment>
        }
      />
    </div>
  );
}
