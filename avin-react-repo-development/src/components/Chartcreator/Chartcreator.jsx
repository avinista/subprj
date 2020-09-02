import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import { optionsData } from "./../../Services/ChartsData";

const chartcreator = ({ type, data, title }) => {
  const componentSelector = (type, data, title) => {
    switch (type) {
      case "BAR":
        return <Bar data={data} options={optionsData(title)} />;
      case "LINE":
        return <Line data={data} options={optionsData(title)} />;
      case "PIE":
        return <Pie data={data} options={optionsData(title)} />;
      default:
        return null;
    }
  };

  return <div >{componentSelector(type, data, title)}</div>;
};

export default chartcreator;
