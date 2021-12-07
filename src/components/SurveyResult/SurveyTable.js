import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import classes from "./SurveyTable.module.css";

const SurveyTable = () => {
  const [getData, setGetData] = useState([]);
  const [getData2, setGetData2] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  const fetchUsersHandler = async () => {
    setIsLoading(true);
    try {
      let response = await fetch("http://localhost:8000/users");
      let response2 = await fetch("http://localhost:8000/qa");
      if (!response.ok && !response2.ok) {
        throw new Error("Something Went Wrong!");
      }

      let data = await response.json();
      let data2 = await response2.json();
      setGetData(data);
      setGetData2(data2);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchUsersHandler();
  }, []);

  const userList = getData.map((user) => (
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
      {getData2.map((question) => (
        <th key={question.id}>{question.questions}</th>
      ))}
    </tr>
  );

  return (
    <Card className={classes['table-center']}>
      <table>
        <thead>{tableHead}</thead>
        <tbody>{userList}</tbody>
      </table>
    </Card>
  );
};

export default SurveyTable;
