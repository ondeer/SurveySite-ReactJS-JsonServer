import React from "react";
import Survey from "../Survey/Survey";
import classes from "./SurveyList.module.css";

const SurveyList = (props) => {
  return (
    <div className={classes["survey-list"]}>
      <Survey onClick={props.onClick}/>
    </div>
  );
};

export default SurveyList;
