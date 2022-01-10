import React, {useState,useReducer } from "react";
import Headers from "./components/layout/Headers";
import Footer from "./components/layout/Footer";
import SurveyList from "./components/Survey/SurveyList";
import SurveyForm from "./components/Survey/SurveyForm";
import SurveyForm2 from "./components/Survey/SurveyForm2";
import SurveyForm3 from "./components/Survey/SurveyForm3";
import SurveyResult from "./components/SurveyResult/SurveyResult";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const modalIsShown = (state, action) => {
  if (action.type === "USERCREATEMODAL") {
    return { firstModalIsShow: true };
  } else if (action.type === "SURVEYMODAL") {
    return { firstModalIsShow: false, secondModalIsShow: true };
  } else if (action.type === "FEEDBACKSURVEYMODAL")
    return { secondModalIsShow: false, thirdModalIsShow: true };
  else if (action.type === "CLOSEMODAL") {
    return { firstModalIsShow: false, secondModalIsShow:false, thirdModalIsShow: false };
  }
};

const App = () => {
  const initialState = {
    firstModalIsShow: false,
    secondModalIsShow: false,
    thirdModalIsShow: false,
  };

  //USESTATE METHOD
  /*const [firstModalIsShow,setFirstModalIsShow] = useState(false);
  const [secondModalIsShow,setSecondModalIsShow] = useState(false);
  const [thirdModalIsShow,setThirdModalIsShow] = useState(false);
 const showFirstHandler = () => {
    setFirstModalIsShow(true);
 }
 const hideCartHandler = () => {
  setFirstModalIsShow(false);
  setThirdModalIsShow(false);
}
const showSecondHandler =() => {
  setFirstModalIsShow(false);
  setSecondModalIsShow(true);
}
const showThirdHandler =() => {
  setFirstModalIsShow(false);
  setSecondModalIsShow(false);
  setThirdModalIsShow(true)      
}*/

  const [modalState, dispatchModal] = useReducer(modalIsShown, initialState);

  const [userData,setUserData] = useState({});

  const showFirstHandler = () => {
    dispatchModal({ type: "USERCREATEMODAL" });
  };
  const hideCartHandler = () => {
    dispatchModal({ type: "CLOSEMODAL" });
  };
  const showSecondHandler = () => {
    dispatchModal({ type: "SURVEYMODAL" });
  };
  const showThirdHandler = () => {
    dispatchModal({ type: "FEEDBACKSURVEYMODAL" });
  };

  const addUserHandler = (enteredName, enteredLastName, selectGender) => {
      const user = {
        name: enteredName,
        surname:enteredLastName,
        gender: selectGender
      }  
      setUserData(user)  
  }

  return (
    
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<React.Fragment> 
        <Headers />
        <SurveyList onClick={showFirstHandler} />
        {modalState.firstModalIsShow && (<SurveyForm onClose={hideCartHandler} onModal2={showSecondHandler} onAddUser={addUserHandler}/>)}
        {!modalState.firstModalIsShow && modalState.secondModalIsShow && (<SurveyForm2 onModal3={showThirdHandler} userData={userData} onClose={hideCartHandler}/>)}
        {!modalState.firstModalIsShow &&!modalState.secondModalIsShow && modalState.thirdModalIsShow && (<SurveyForm3 onClose={hideCartHandler} />)}
        <Footer />
        </React.Fragment>} />
        <Route path="/surveyResult" element={<SurveyResult />} />
      </Routes>
    </BrowserRouter>
    
  );
};
export default App;
