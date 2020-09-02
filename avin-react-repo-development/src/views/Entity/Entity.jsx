import React from "react";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import { EntityCard } from "../../routes";
import { Customcard } from "../../components/CusstomCard/CustomCard.jsx";

const Entitys = () => (
  <React.Fragment>
    <div className="dashboard__title">برمبنای موجودیت ها</div>
    <GridContainer>
      {EntityCard.map((card, idx) => (
        <GridItem xs={12} sm={12} md={3} key={idx}>
          <Customcard
            text={card.name}
            color={card.color}
            url={`/entity/${card.path}`}
          />
        </GridItem>
      ))}
    </GridContainer>
  </React.Fragment>
);

export default Entitys;
