import LoginBackground from "../../LoginBackground/LoginBackground";
import SelectType from "./SelectType";
import styles from './StepOne.module.css';



const StepOne =()=>{
    return(
        <section className={styles.container}>
            <LoginBackground/>
            <SelectType/>
        </section>
    )
}
export default StepOne;