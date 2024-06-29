import { ReactElement } from "react";
import { Link } from "react-router-dom";

const SignUp = (): ReactElement => {
    return <form className="auth-form">
        <h2 className="auth-title">Sign up</h2>
        <p className="auth-label">Email</p>
        <input type="email" placeholder="Email" className="auth-input" />
        <p className="auth-label">Username</p>
        <input type="email" placeholder="username" className="auth-input" />
        <p className="auth-label">Password</p>
        <input type="password" placeholder="Password" className="auth-input" />
        <p className="auth-label">Repeat password</p>
        <input type="password" placeholder="Repeat password" className="auth-input" />
        <button className="auth-button">sign up</button>
        <h4 className='auth-subtitle'>Уже зарегистрированы?
            <Link className="auth-link" to="/signin"> Войти</Link></h4>
    </form>;
};

export default SignUp;