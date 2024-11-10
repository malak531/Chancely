import LoginForm from "./LoginForm";
import LoginBackground from "../LoginBackground/LoginBackground";
import styles from "./LoginPage.module.css"
import { useAuth } from "../AuthContext";
import { useNavigate } from 'react-router-dom';



const LoginPage =()=>{
    const navigate = useNavigate();
  const { login } = useAuth();
  const handleLoginSuccess = () => {
    login();
    navigate('/BrowseOpportunities');
  };
    return(
        <section className={styles.container}>
            <div className={styles.background}>
            <LoginBackground/>
            </div>
            <div className={styles.form}>
            <LoginForm onLoginSuccess={handleLoginSuccess}/>
            </div>
        </section>
    )
}
export default LoginPage;