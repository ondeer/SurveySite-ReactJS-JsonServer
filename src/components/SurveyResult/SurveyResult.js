import { Fragment, useState, useEffect } from "react";
import SurveyChart from "./SurveyChart";
import SurveyTable from "./SurveyTable";


const SurveyResult = () => {

    const [showHide , setShowHide] = useState(false);
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

    const showHideHandler = (event) => {
        setShowHide(!showHide)
        if(showHide){
            event.target.innerText= 'Show Graphically'
        }
        else{
            event.target.innerText= 'Hide'
        }
    }
    
    return(
        <Fragment>
            {showHide && <SurveyChart getData={getData} getData2={getData2} isLoading={isLoading} isError={isError}/>}
            <button type="button" onClick={showHideHandler} >Show Graphically</button>
            <SurveyTable getData={getData} getData2={getData2} isLoading={isLoading} isError={isError}/>
        </Fragment>
    );
}

export default SurveyResult;