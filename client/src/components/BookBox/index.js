import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
    Link,
    Grid,
    Button
} from "@material-ui/core/";
import PropTypes from "prop-types";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "10px",
    backgroundColor:"#6f7281",
    padding: "20px",
    marginTop: "20px",
    textAlign: "left"
  },
  grid: {
    padding: "5px"
  },
  title: {
      color: "black",
      fontSize: "25px",
      fontWeight: "bold"
  }
});



export default function BookBox(props) {
  const classes = useStyles();
  const { title, authors, description, infoLink, imageLinks, page} = props;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Grid container>
            <Grid item xs={12} md={10} style={{marginBottom: "10px"}}>
                <div>
                    <Link className={classes.title}  href={infoLink}>{title}</Link>
                    <Typography>Written by {authors.toString()}</Typography>
                </div>
            </Grid>
            <Grid item xs={12} md={2} style={{marginBottom: "10px"}}>
                <Grid container>
                    <Grid item xs={4} sm={2} md={6}>
                        <Button variant="contained" color="primary" href={infoLink}>View</Button>
                    </Grid>
                    <Grid item xs={4} sm={2} md={6}>
                        {page==="search" ?
                          <Button variant="contained" color="primary" href={infoLink}>Save</Button>
                        :
                          <Button variant="contained" color="primary" href={infoLink}>Delete</Button>
                        }


                        
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container>
            <Grid  item md={2}><img src={imageLinks.thumbnail} style={{verticalAlign: "center"}} alt="Book cover" /></Grid>
            <Grid  item md={9}><div style={{marginLeft:"20px", margintop:"20px"}}>{description}</div></Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

BookBox.propTypes = {
    authors: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
    imageLinks: PropTypes.object,
    infoLink: PropTypes.string,
    page: PropTypes.string
};