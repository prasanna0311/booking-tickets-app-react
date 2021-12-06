import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

/** import from materail ui */
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import EventSeatIcon from "@material-ui/icons/EventSeat";
import CheckBoxOutlineBlankRoundedIcon from "@material-ui/icons/CheckBoxOutlineBlankRounded";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

/** defining style  */
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  cover: {
    height: 0,
    paddingTop: "56.25%",
  },
}));

/** main function  */
const Book = () => {
  const classes = useStyles();
  const [book, setBook] = useState([]);
  const [date, setDate] = useState("");
  const [button, setButton] = useState(true);

  useEffect(() => {
    const result = window.localStorage.getItem("book");
    const val = JSON.parse(result);
    const dateRet = window.localStorage.getItem("date");
    const date = JSON.parse(dateRet);
    const n = new Date(date);
    const sep = new Date().toLocaleDateString();
    setDate(sep);
    setBook(val);
  }, []);

  /** useState */
  const [seat, setSeat] = useState([]);
  const [display, setDisplay] = useState([]);
  const [price, setPrice] = useState("price");

  /** setting seat using use Effect */
  useEffect(() => {
    if (seat.length === 0) {
      setDisplay(["No seats selected"]);
    } else {
      setDisplay(seat);
      setButton(true);
    }

    if (seat.length === 0) {
      setPrice("0");
    } else {
      setPrice(seat.length * 250);
    }
  }, [seat]); // dependencies

  /** handling event  */
  const handleChange = (event) => {
    const val = event.target.name;
    if (seat.length < 5) {
      if (seat.includes(val)) {
        let index = seat.indexOf(val);
        seat.splice(index, 1);
        setSeat(seat);
        setDisplay(display);
      } else {
        setSeat([...seat, val]);
      }
    } else {
      alert("max limit reached");
    }
  };

  /** handle data */

  /** handling reset */
  const handleReset = () => {
    setSeat([]);
  };

  /**  */
  const submit = () => {
    window.localStorage.setItem("seat", JSON.stringify(seat));
    window.localStorage.setItem("price", JSON.stringify(price));
  };
  /**  */

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
       
            <Typography>Elite Screen ₹250</Typography>
           

          <div>
            <FormGroup row>
              <p>A</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A12"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A15"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>B</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="A12"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="B15"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>C</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C12"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="C15"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
          <div>
            <FormGroup row>
              <p>D</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D12"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="D15"
                    onChange={handleChange}
                  />
                }
              />
              
            </FormGroup>
          </div>

          <div>
            <FormGroup row>
              <p>E</p>
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E1"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E2"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E3"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E4"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E5"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E6"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E7"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E8"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E9"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E10"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E11"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E12"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E13"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E14"
                    onChange={handleChange}
                  />
                }
              />
              <FormControlLabel
                control={
                  <Checkbox
                    icon={<CheckBoxOutlineBlankRoundedIcon />}
                    checkedIcon={<EventSeatIcon />}
                    name="E15"
                    onChange={handleChange}
                  />
                }
              />
            </FormGroup>
          </div>
        
          <Paper style={{ backgroundColor: "" }}>
            <Typography variant="h2" style={{ textAlign: "center" }}>
              SCREEN THIS WAY
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card>
            <CardContent
              style={{
                backgroundImage: `url(https://www.deccanherald.com/sites/dh/files/articleimages/2021/11/25/file7ikclazlxpi5dp6pgdb-1054494-1637853307.jpg)`,
                backgroundSize: "250px",
                height: "200px",
                border: "2px solid",
                transparency: "0.5px",
              }}
            ></CardContent>
          </Card>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h4">
              MOVIENAME    :   "MAANAADU"
            </Typography>
            <Typography component="h5" variant="h4">
            ---------------------------------------
            </Typography>
            <Typography component="h6" variant="h6">
              Time  :   10:00AM
            </Typography>
            <Typography component="h6" variant="h6">
              Date  : {date}
            </Typography>
            <Typography component="h5" variant="h4">
            ---------------------------------------
            </Typography>
          </CardContent>
          <Card>
            <CardContent>
              <Typography component="h5" variant="h4">
                SEATS BOOKED
              </Typography>
             
              <div style={{ display: "centre", flexWrap: "wrap" }}>
                {display.map((x) => (
                  <Typography
                    variant="h5"
                    style={{
                      padding: "5px",
                      border: "5px",
                      borderColor: "green",
                      margin: "5px",
                    }}
                  >
                    {x}
                  </Typography>
                ))}
                <Button
                  variant="contained"
                  color="secondary"
                  width="full"
                  onClick={() => handleReset()}
                >
                  Reset
                </Button>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <Typography component="h5" variant="h5">
                {seat.length} - Seats booked
              </Typography>
              <Typography variant="h4" color="h4">
                Total : ₹ {price}
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="secondary"
              onClick={submit}
              disabled={button === false}
              // href="/ticket"
                component={Link}
            to="/ticket"
            >
              Book Tickets
            </Button>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};
export default Book;
