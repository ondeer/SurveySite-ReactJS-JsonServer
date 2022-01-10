import React from "react";
import Card from "../UI/Card/Card";
import classes from "./SurveyTable.module.css";
import errorImage from "../../assets/error.png";
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";

const SurveyTable = (props) => {

  const userList = props.getData.map((user) => (
    <tr key={user.id}>
      <td>{user.date}</td>
      <td>{user.name}</td>
      <td>{user.surname}</td>
      <td>{user.gender}</td>
      <td>{user.userAnswer1}</td>
      <td>{user.userAnswer2}</td>
      <td>{user.userAnswer3}</td>
      <td>{user.userAnswer4}</td>
    </tr>
  ));
  const tableHead = (
    <tr>
      <th>Date</th>
      <th>Name</th>
      <th>Surname</th>
      <th>Gender</th>
      {props.getData2.map((question) => (
        <th key={question.id}>{question.questions}</th>
      ))}
    </tr>
  );
        
  let content = userList;

  if (props.isLoading) {
    content = (
      <div className={classes.loading}>
        <TwinSpin color="#04AA6D" duration="2s" />
      </div>
    );
  }

  if (props.isError) {
    content = (
      <div className={classes.error}>
        <img src={errorImage} alt="error" />
        <p>{props.isError}</p>
      </div>
    );
  }

  return (
    <Card className={classes['table-center']} >
      <table>
        {!props.isError && !props.isLoading && <thead>{tableHead}</thead>}
        <tbody>{content}</tbody>
      </table>
    </Card>
  );
};

export default SurveyTable;
