import React from "react";
import GridContainer from "components/Grid/GridContainer.js";

import { ItOfflineServices } from "../../routes";
import { Itviewcard } from "../../components/Itviewcards/Itviewcard";

const ItRisk = () => (
  <React.Fragment>
    <div className="" p={2}>
      <h6 className="header__title"> ریسک های خدمات غیرحضوری</h6>
    </div>
    <GridContainer>
      {ItOfflineServices.map((card, idx) => (
        <Itviewcard
          icon={card.icon}
          text={card.name}
          color={card.color}
          url={card.path}
          key={idx}
        />
      ))}
    </GridContainer>
  </React.Fragment>
);

export default ItRisk;
