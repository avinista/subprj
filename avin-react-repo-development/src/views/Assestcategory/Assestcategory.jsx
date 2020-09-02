import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { AssetCategory } from "../../routes";
import { Customcard } from "../../components/CusstomCard/CustomCard.jsx";

const Assestcategory = () => (
  <React.Fragment>
    <div className="dashboard__title" p={2}>
      برمبنادارایی ها
    </div>
    <GridContainer>
      {AssetCategory.map((card, idx) => (
        <GridItem xs={12} sm={12} md={6} key={idx}>
          <Customcard
            text={card.name}
            color={card.color}
            url={`/assestscatacory/${card.path}`}
          />
        </GridItem>
      ))}
    </GridContainer>
  </React.Fragment>
);

export default Assestcategory;
