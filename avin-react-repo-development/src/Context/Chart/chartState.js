import React, { useReducer } from "react";

import chartReducer from ".//chartReducer";
import ChartContext from "./chartContext";
import { chartActionType } from "./../Types";

const CharthState = props => {
  const Initial_State = {
    chartToggle: false
  };

  const [state, dispatch] = useReducer(chartReducer, Initial_State);
  dispatch({ type: chartActionType.CHART_TOGGLE, toggle: !state.chartToggle });
  return (
    <ChartContext.Provider
      value={{
        chartToggle: state.chartToggle
      }}
    >
      {props.children}
    </ChartContext.Provider>
  );
};

export default CharthState;
