import React from "react";
import { Link } from "react-router-dom";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";
import Icon from "@material-ui/core/Icon";
import GridItem from "components/Grid/GridItem.js";
import history from "./../../history.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    Width: 150,
    border: "1px solid #9e9e9e"
  }
});
const cardStyle = {
  fontFamily: "BTitrBold,'BTitrBold',tahoma",
  fontSize:"12px",
  color:"#4e342e"
}

const handleClick = (e,url) => {
  e.preventDefault();
 history.push(url);
};
export function Itviewcard({ text, icon, color, url }) {
  const classes = useStyles();
  return (
    <GridItem xs={12} sm={12} md={6}>
      <Card className={classes.root}>
        <CardHeader bgcolor={color} stats icon>
          <CardIcon color={color}>
            <Icon style={{marginRight:"30px"}}>{icon}</Icon>
          </CardIcon>
        </CardHeader>
        <CardFooter stats>
          <div className={classes.stats}>
            <Link style={cardStyle} 
              className="Card_footer"
              to="#"
              onClick={e => handleClick(e, url)}
            >
              {text}
            </Link>
          </div>
        </CardFooter>
      </Card>
    </GridItem>
  );
}
