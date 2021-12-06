import React from "react";
import { Link } from "react-router-dom";

/** import from materail ui */

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 500,
   paddingTop:0,
   paddingLeft:500,
  //  paddingRight:500,
    alignItems:"centre",
   
    direction:"row",
    justifyContent:"center",
    alignItems:"center",
    
  },
  media: {
    height: 170,
    paddingTop: "60%", // 16:9
    alignItems:"centre"
   
    
  },

  avatar: {
    backgroundColor: red[500],
  },


}));

export default function MovieSelect() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <CardMedia 
        className={classes.media}
        image="https://www.deccanherald.com/sites/dh/files/articleimages/2021/11/25/file7ikclazlxpi5dp6pgdb-1054494-1637853307.jpg"
        title="maanaadu"
      />
      <CardContent >
        <Typography variant="h5" component="h2">
          Maanaadu
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer are stuck in a time loop.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Button className={classes.Button} variant="contained" color="primary" component={Link} to="/Booking">
          Book Tickets
        </Button>
      </CardActions>
      

      <CardMedia 
        className={classes.media}
        image="https://in.bmscdn.com/content-buzz/2021/08/jaibhimsq.jpg"
        title="jai bhim"
      />
      <CardContent>
        <Typography variant="h5" component="h2">
          Jai Bhim
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice. When a tribal man is arrested for a case of alleged theft, his wife turns to a human-rights lawyer to help bring justice.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <Button variant="contained" color="primary" component={Link} to="/Book">
          Book Tickets
        </Button>
      </CardActions>
      
     


    </Card>



    
  );
}





