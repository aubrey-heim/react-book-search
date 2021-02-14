import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchBox from "../components/SearchBox"
import {
    Box
} from '@material-ui/core/';
import API from '../utils/API';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: "left"
  },
  buttons: {
    marginRight: theme.spacing(2),
    height: "40px",
    textAlign: "left"
  },
  title: {
    flexGrow: 1,
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
    <div className={classes.root}>
      <SearchBox 
        formDataShown={formData.newItem} 
        handleInputChange={handleInputChange}
        runSearch={runSearch}/>
      <Box >

      </Box>
    </div>
  );
}
