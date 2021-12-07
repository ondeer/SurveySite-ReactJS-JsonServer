import { Fragment, useState } from "react";
import SurveyChart from "./SurveyChart";
import SurveyTable from "./SurveyTable";


const SurveyResult = () => {

    const [showHide , setShowHide] = useState(false);
   
    

    const showHideHandler = (event) => {
        setShowHide(!showHide)
        if(showHide){
            event.target.innerText= 'Grafiksel Olarak Göster'
        }
        else{
            event.target.innerText= 'Gizle'
        }
    }
    
    return(
        <Fragment>
            {showHide && <SurveyChart/>}
            <button type="button" onClick={showHideHandler} >Grafiksel Olarak Göster</button>
            <SurveyTable/>
        </Fragment>
    );
}

export default SurveyResult;