import React, { useState } from "react";
import Modal from "../UI/modal/Modal";
import useInput from "../../hooks/use-input";
import womanImage from "../../assets/female.png";
import manImage from "../../assets/male.png";
import classes from "./SurveyForm.module.css";


const SurveyForm = (props) => {
  const [genderSelect, setGenderSelect] = useState(null);

  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangedHandler,
    inputBlurHandler: firstNameBlurHandler,
    firstLetterInputHandler: firstNameUpper
    
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangedHandler,
    inputBlurHandler: lastNameBlurHandler,
    upperInputHandler: lastNameUpper
 
  } = useInput((value) => value.trim() !== "");

  let selectImg = <p className={classes.imageP}>Please Select Gender</p>;

  if (genderSelect === "Male") {
    selectImg = <img src={manImage} alt="Male" className={classes.avatar} />;
  } else if (genderSelect === "Female") {
    selectImg = <img src={womanImage} alt="Female" className={classes.avatar} />;
  }

  const manGenderHandler = () => {
    setGenderSelect("Male");
  };

  const womanGenderHandler = () => {
    setGenderSelect("Female");
  };

  let formIsValid = false;
  if (
    enteredFirstNameIsValid && enteredLastNameIsValid && genderSelect !== null
  ) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    
    event.preventDefault();
    //console.log(genderSelect);
    //console.log(enteredFirstName)
    //console.log(enteredLastName)

   /* fetch('http://localhost:8000/users', {
    method: 'POST',
    body: JSON.stringify({name:enteredFirstName, surname:enteredLastName,gender:genderSelect}),
    headers: {
        'Content-Type': 'application/json'
    }});
*/
    props.onModal2();
    props.onAddUser(enteredFirstName,enteredLastName,genderSelect);
    
  };

  const firstnameclasses = firstNameInputHasError ? classes.invalid : {};

  const lastnameclasses = lastNameInputHasError ? classes.invalid : {};

  return (
    <Modal onClose={props.onClose}>
      <form className={classes["modal-content"]} onSubmit={submitHandler} >
        <div>
          <span className={classes.close} title="Close Survey" onClick={props.onClose}>
            &times;
          </span >
          {selectImg}
          <br />
          <div className={classes.inputform}>
            <input type="radio"  name="gender" value="Male" onClick={manGenderHandler}
            />
            <label>Male</label>
            <input type="radio"  name="gender" value="Female" onClick={womanGenderHandler}
            />
            <label>Female</label>
          </div>
        </div>
        <div className={firstnameclasses}>
          <label htmlFor="name">Name</label>
          <input type="text" placeholder="Name" id="name" value={enteredFirstName} onChange={firstNameChangedHandler} onBlur={firstNameBlurHandler}
          onKeyUp={firstNameUpper}  />
          {firstNameInputHasError && (
            <p className={classes["error-text"]}>Name not must be empty!</p>
          )}
        </div>

        <div className={lastnameclasses}>
          <label>Surname</label>
          <input type="text" placeholder="Surname" id="surname" name="surname" value={enteredLastName} onChange={lastNameChangedHandler} onBlur={lastNameBlurHandler} onKeyUp={lastNameUpper}
          />
          {lastNameInputHasError && (
            <p className={classes["error-text"]}>Surname not must be empty! </p>
          )}
        </div>

        <div>
          <button type="submit" disabled={!formIsValid} >
            Ankete Katıl
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default SurveyForm;
