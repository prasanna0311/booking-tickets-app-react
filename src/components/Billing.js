import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


/** import from materail ui */
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    minWidth: 275,
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 20,
  },
  pos: {
    marginBottom: 12,
  },
  text:{
    fontWeight:"bold"
  }
});

const Billing = () => {
  const [price, setPrice] = useState("");
  const [seat, setSeat] = useState("");
  const [movie, setMovie] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const classes = useStyles();

  useEffect(() => {
    const retrieve = window.localStorage.getItem("seat");
    const val = JSON.parse(retrieve);
    const price = window.localStorage.getItem("price");
    const val1 = JSON.parse(price);
    console.log(val1);
    const movie = window.localStorage.getItem("book");
    var val3 = [];
    val3 = JSON.parse(movie);
    console.log(val3);
    const data = window.localStorage.getItem("date");
    const date = new Date().toISOString().slice(0, 10);
    setDate(date);
    setMovie(val3);
    setSeat(val);
    setPrice(val1);
  }, []);
  return (
    <div>
      <div>
        <Card className={classes.root} variant="outlined">
          <CardContent>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            ></Typography>

            <Typography className={classes.text} variant="h2" component="p">
              BOOKING TICKETS
            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
              Number of Seats --- {seat.length}

            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
              Seats --- {seat}
            </Typography>
            <Typography className={classes.text} variant="h5" component="p">
              Show Time --- 10:00am
            </Typography>
           
            <Typography className={classes.text} variant="h5" component="p">
              Show Date --- {date}
            </Typography>
            <Typography variant="h5" component="p">
              ----------------------------------------------------
            </Typography>
            <Typography className={classes.text} variant="h4" component="p">
              TOTAL = ₹{price}
            </Typography>
            <Typography variant="h5" component="p">
              ----------------------------------------------------
            </Typography>
  
        <Link to={{
                                                    pathname: 'https://rzp.io/l/k74Jecw',
                                                }} target="_blank"><Button type="button" variant="contained"
                                                color="secondary"  >Buy Now</Button></Link>





            <Typography
              className={classes.title}
              color="textprimary"
              gutterBottom
            >
              {`T&C`}
            </Typography>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              {`Amount Not Return`}
            </Typography>
            
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Billing;
