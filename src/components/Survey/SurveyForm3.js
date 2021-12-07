import Modal from "../UI/modal/Modal"
import ModalFooter from "../UI/modal/ModalFooter"
import ModalHeader from "../UI/modal/ModalHeader"
import classes from './SurveyForm3.module.css'
import { FaLinkedinIn, FaTwitter, FaFacebookF , FaRegEnvelope , FaInstagram} from "react-icons/fa";

const SurveyForm3 = (props) => {

    const submitHandler = (event) => {

        event.preventDefault();
        props.onClose();
    }

    return (
        <Modal>
        <form onSubmit={submitHandler}>
            <ModalHeader><h2 className={classes.header}>Ankete Katıldığınız İçin Teşekkür Ederiz</h2></ModalHeader>
            <main>
                <button type="submit" className={classes.button} >Anketi Kapat</button>
            </main>
        <ModalFooter>
                <div className={classes.icon}>
                    <p>Bize Ulaşmak İçin</p>
                    <a href='/' target="_blank"  title="LinkedIn" >
                        <FaLinkedinIn className={classes.linkedin}/> </a>

                    <a href="/" target="_blank" title="Twitter">
                        <FaTwitter className={classes.twitter}/></a>

                    <a href="/" target="_blank" title="Facebook">
                        <FaFacebookF className={classes.facebook}/></a>

                    <a href="/" target="_blank" title="Mail">
                        <FaRegEnvelope className={classes.mail}/></a>

                    <a href="/" target="_blank" title="Instagram">
                        <FaInstagram className={classes.instagram} /></a>

                </div>
            </ModalFooter>
        </form>

        </Modal>

    );

}


export default SurveyForm3;