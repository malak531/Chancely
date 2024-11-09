import LoginForm from "./LoginForm";
import LoginBackground from "../LoginBackground/LoginBackground";
import styles from "./LoginPage.module.css"


const LoginPage =()=>{
    return(
        <section className={styles.container}>
            <LoginBackground/>
            <LoginForm/>
        </section>
    )
}
export default LoginPage;