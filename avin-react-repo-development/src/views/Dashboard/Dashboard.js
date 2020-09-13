import React, { useState } from "react";
// @material-ui/core
import { makeStyles, Button } from "@material-ui/core";
// @material-ui/icons

import AccessTime from "@material-ui/icons/AccessTime";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";

import Chartcreator from "./../../components/Chartcreator/Chartcreator";
import { Itviews } from "../../components/Itview/Itview";
import { Events } from "../../components/Events/Events";
import Chartresize from "../../components/Chartresize/Chartresize";
import {Homepage_Bar ,Homepage_Line , Homepage_Pie} from "./../../Services/ChartsData";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {

  const classes = useStyles();
  
  const [modalline, setmodalline] = useState(false);
  const [modalbar, setmodalbar] = useState(false);
  const [modalpie, setmodalpie] = useState(false);

  const handleClick = (modal) => {
    if(modal==="modalbar")setmodalbar(!modalbar);
    if(modal==="modalline")setmodalline(!modalline);
    if(modal=== "modalpie")setmodalpie(!modalpie);


  };
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={12}>
          <div className="dashboard__title" p={2}>
            گزارشات IT
          </div>
        </GridItem>
      </GridContainer>
      {/*=====================start level 2 dashboard charts and bugs component and combain chard ====================== */}
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
              <Chartcreator data = {Homepage_Bar} title ="نیروی انسانی"  type="BAR" />
            </CardHeader>
            <CardFooter chart>
              <Button className={classes.stats} onClick={()=>handleClick("modalbar")}>
                <AccessTime /> مشاهده با جزییات
              </Button>
              {modalbar ? <Chartresize  data = {Homepage_Bar} title ="نیروی انسانی"  type="BAR"/> : null}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
              <Chartcreator data = {Homepage_Line} title ="ریسک های IT"  type="LINE" />
            </CardHeader>

            <CardFooter>
              <Button className={classes.stats} onClick={()=>handleClick("modalline")}>
                <AccessTime /> مشاهده با جزییات
              </Button>
              {modalline ? <Chartresize data = {Homepage_Line} title ="ریسک های IT"  type="LINE"/> : null}
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          <Card chart>
            <CardHeader>
              <Chartcreator data = {Homepage_Pie} title ="پروژه های IT"  type="PIE" />
            </CardHeader>

            <CardFooter chart>
            <Button className={classes.stats} onClick={()=>handleClick("modalpie")}>
                <AccessTime /> مشاهده با جزییات
              </Button>
              {modalpie? <Chartresize data = {Homepage_Pie} title ="پروژه های IT"  type="PIE" /> : null}
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem xs={12} sm={12} md={6}>
          <Events />
        </GridItem>
        <GridItem xs={12} sm={12} md={6}>
          <Itviews />
        </GridItem>
      </GridContainer>
    </div>
  );
}
