import React from "react";
import Alert from "@material-ui/lab/Alert";


export default function alertText({ severity, text }) {

  return (
    // set severity  and text form props 
      <Alert severity={severity}>{text}</Alert>
  );
}
