import LoginForm from "./LoginForm";
import LoginBackground from "../LoginBackground/LoginBackground";
import styles from "./LoginPage.module.css"


const LoginPage =()=>{
    return(
        <section className={styles.container}>
            <div className={styles.background}>
            <LoginBackground/>
            </div>
            <div className={styles.form}>
            <LoginForm/>
            </div>
        </section>
    )
}
export default LoginPage;