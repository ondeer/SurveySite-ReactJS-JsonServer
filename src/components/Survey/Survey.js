import Card from "../UI/Card/Card";
import classes from './Survey.module.css'


const Survey = (props) => {

    

    return(

        <Card className={classes.survey}>
            <h2>Anket Giriş Formu</h2>
            <button onClick={props.onClick}>Anket Giriş</button>
        </Card>


    );


}

export default Survey;