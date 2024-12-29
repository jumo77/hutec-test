import styles from "./Login.module.css";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Const} from "../../component/const/Const";

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        document.getElementById("sidebar").classList.add("hide")
    }, []);

    const navigate = useNavigate()

    const auth = ()=>{
        window.localStorage.setItem("token", "임시 토큰")
        navigate(Const.USER.url)
    }

    return(
        <main className={styles.center}>
            <h1 className={styles.header}>휴텍씨 관리자 로그인</h1>
            <div className={styles.gap}/>
            <div className={styles.gap}/>
            <div className={styles.main}>
                <p className={styles.label}>Email</p>
                <input className={styles.text} value={email} type="email" onChange={
                    (e)=>{setEmail(e.target.value)}}/>
                <div className={styles.gap}/>
                <p className={styles.label}>Password</p>
                <input className={styles.text} value={password} type="password" onChange={
                    (e)=>{setPassword(e.target.value)}}/>
                <div className={styles.gap}/>
                <button className={styles.button} onClick={auth}>LogIn</button>
            </div>
        </main>
    )
}