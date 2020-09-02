import React from "react";
import GridContainer from "components/Grid/GridContainer.js";

import { EntityCard, AssetCategory } from "../../routes";
import CustomizedTables from "../../components/Table/Table";
import Chartcreator from "./../../components/Chartcreator/Chartcreator";
import { riskLevel, optionsData } from "./../../Services/ChartsData";
import EntityAssest from "./../../Services/Entity_Assest";
import AssestRiskLevel from "./../../Services/Assest_Risklevel";
import EntiyRiskLevel from "./../../Services/Entity_Risk_level";

const Reportsview = props => {
  let assestname;

  const collecttableData = () => {
    let data = [];
    if (props.match.params.category === "assestscatacory") {
      AssetCategory.map(assest => {
        if (assest.path === props.match.params.tablename)
          assestname = assest.name;
      });
      EntityAssest.map(row => {
        if (row.AssetCategory === assestname) data.push(row);
      });
    }
    if (props.match.params.category === "entity") {
      EntityCard.map(assest => {
        if (assest.path === props.match.params.tablename)
          assestname = assest.name;
      });
      EntityAssest.map(row => {
        if (row.Entity === assestname) data.push(row);
      });
    }
    return data;
  };

  const riskChartData = () => {
    let chartrisk = [];
    if (props.match.params.category === "assestscatacory") {
      AssestRiskLevel.map(row => {
        if (row.AssetCategory === assestname) chartrisk.push(row.CountOfRiskLevel);
      });
    }
    if (props.match.params.category === "entity") {
      EntiyRiskLevel.map(row => {
        if (row.Entity === assestname) chartrisk.push(row.CountOfRiskLevel);
      });
    }
    return chartrisk;
  };

  return (
    <React.Fragment>
      {console.log(collecttableData())}
      <div className="">
        <h6 className="header__title"> ریسک های خدمات غیرحضوری</h6>
      </div>
      <GridContainer>
        <Chartcreator
          data={riskLevel(riskChartData())}
          options={{ maintainAspectRatio: false }}
          title={assestname}
          type="PIE"
        />
        <CustomizedTables tablecontent={collecttableData()} />
      </GridContainer>
    </React.Fragment>
  );
};

export default Reportsview;
