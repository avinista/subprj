import React from "react";

const Dashboard = React.lazy(() => import("./views/Dashboard/Dashboard"));
const ItRisk = React.lazy(() => import("./views/ItRisks/ItRisk.jsx"));
const Entity = React.lazy(() => import("./views/Entity/Entity"));
const Reportsview = React.lazy(() => import("./views/Reportsview/Reportsview"));
const Assestscatacory = React.lazy(() =>
  import("./views/Assestcategory/Assestcategory")
);

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const navigation = [
  { path: "/", exact: true, name: "Dashboard", component: Dashboard },
  { path: "/itrisk", exact: true, name: "ItRisk", component: ItRisk },
  { path: "/entity", exact: true, name: "Entity", component: Entity },
  {
    path: "/assestscatacory",
    exact: true,
    name: "Assestscatacory",
    component: Assestscatacory
  },
  {
    path: "/:category/:tablename",
    exact: true,
    name: "Reportsview",
    component: Reportsview
  }
];

export default navigation;
