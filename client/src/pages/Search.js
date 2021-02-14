import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from "../components/SearchBox"
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
  const [formData, setFormData] = useState({ newSearch: "" });
  const [searchResults, setSearchResults] = useState([]);
  const classes = useStyles();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setFormData({ newSearch: value });
    
  };

  const runSearch = (event) => {
    event.preventDefault()
    console.log(formData)
    API.getGoogle(formData.newSearch)
    .then(res => {
        setSearchResults(res.data.items)
        console.log(searchResults)
    })
    .catch(err => console.log(err))
    setFormData({newSearch: ""})
  }

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
                  <BookBox page="search" key={value.id} {...volumeInfo}/>
                );
              })
            :
            <Typography className={classes.title}><p>Search for a book to get started</p></Typography>   
          }  
        </CardContent>

      </Card>
    </div>
  );
}
