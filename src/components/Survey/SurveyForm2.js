import { useEffect, useState } from "react";
import Modal from "../UI/modal/Modal";
import ModalHeader from "../UI/modal/ModalHeader";
import errorImage from "../../assets/error.png";
import TwinSpin from "react-cssfx-loading/lib/TwinSpin";
import classes from "./SurveyForm2.module.css";

const SurveyForm2 = (props) => {
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [getData, setGetData] = useState([]);
  const [formIsValid, setFormIsValid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "." +
    (currentdate.getMonth() + 1) +
    "." +
    currentdate.getFullYear();

  const selectHandler = (event) => {
    //setSecim([[event.currentTarget.value],[event.currentTarget.value],[event.currentTarget.value],[event.currentTarget.value]])
    //{[event.currentTarget.name - 1] : event.currentTarget.value}
    //console.log({[event.currentTarget.name - 1] : event.currentTarget.value})
    //setSecim2(secim)
    //setSecim2((oldArray) => [...oldArray, event.currentTarget.value])
    //setSecim2((oldArray) => [...oldArray,event.currentTarget.value])

    setSelectedAnswer({
      ...selectedAnswer,
      [event.target.name]: event.target.value,
    });
    if (Object.keys(selectedAnswer).length === 3) {
      setFormIsValid(true);
    }

    //console.log(props.userData);
    //console.log(Object.values(props.userData)[0]);
    // console.log(Object.values(secim2))
    //setSecim2(secim )
    //setSecim(secim => [secim, ...[event.currentTarget.value])
  };

  const fetchQueestionsHandler = async () => {
    setIsLoading(true);

    try {
      let response = await fetch("http://localhost:8000/qa");
      if (!response.ok) {
        throw new Error("Something Went Wrong!");
      }
      let data = await response.json();
      setGetData(data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    fetchQueestionsHandler();
  }, []);

  const questionList = getData.map((question) => (
    <div key={question.id} className={classes.questions}>
      <p>{question.questions}</p>
      <div className={classes.inputRadio}>
        <input
          type="radio"
          name={question.id}
          value={question.answer1}
          onChange={selectHandler}
        />
        <label htmlFor={question.answer1}>{question.answer1}</label>
      </div>
      <div className={classes.inputRadio}>
        <input
          type="radio"
          name={question.id}
          value={question.answer2}
          onChange={selectHandler}
        />
        <label htmlFor={question.answer2}>{question.answer2}</label>
      </div>
      <div className={classes.inputRadio}>
        <input
          type="radio"
          name={question.id}
          value={question.answer3}
          onChange={selectHandler}
        />
        <label htmlFor={question.answer3}>{question.answer3}</label>
      </div>
      <div className={classes.inputRadio}>
        <input
          type="radio"
          name={question.id}
          value={question.answer4}
          onChange={selectHandler}
        />
        <label htmlFor={question.answer4}>{question.answer4}</label>
      </div>
      <hr />
    </div>
  ));

  let content = questionList;

  if (isLoading) {
    content = (
      <div className={classes.loading}>
        <TwinSpin color="#04AA6D" duration="2s" />
      </div>
    );
  }

  if (isError) {
    content = (
      <div className={classes.error}>
        <img src={errorImage} alt="error" />
        <p>{isError}</p>
      </div>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
    //console.log(Object.values(selectedAnswer)[0]);
    //console.log(selectedAnswer);
    fetch("http://localhost:8000/users", {
      method: "POST",
      body: JSON.stringify({
        name: Object.values(props.userData)[0],
        surname: Object.values(props.userData)[1],
        gender: Object.values(props.userData)[2],
        userAnswer1: Object.values(selectedAnswer)[0],
        userAnswer2: Object.values(selectedAnswer)[1],
        userAnswer3: Object.values(selectedAnswer)[2],
        userAnswer4: Object.values(selectedAnswer)[3],
        date: datetime,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    props.onModal3();
  };

  return (
    <Modal>
      <form onSubmit={submitHandler}>
        {!isError && (
          <ModalHeader>
            <h2 className={classes.header}>Anket Formu</h2>
          </ModalHeader>
        )}
        <main>
          {content}
          {!isError && (
            <button disabled={!formIsValid} type="submit">
              Gönder
            </button>
          )}
          {isError && (
            <button
              className={classes["error-button"]}
              type="button"
              onClick={props.onClose}
            >
              Anketi Kapat
            </button>
          )}
        </main>
      </form>
    </Modal>
  );
};
export default SurveyForm2;
