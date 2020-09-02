import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import history from "./../../history.js";


const useStyles = makeStyles({
  root: {
    Width: 275,
    height: "110px",
    marginBottom: "10px"
   
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const handleClick = (e,url) => {
e.preventDefault();
history.push(url);

}
export function Customcard({ text, color,url }) {
  const classes = useStyles();

  return (
    <Card style={{ backgroundColor: color }} className={classes.root}>
      <CardContent>
        <Typography variant="p" component="p">
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={e=>handleClick(e,url)} size="small">جزییات</Button>
      </CardActions>
    </Card>
   );
}
