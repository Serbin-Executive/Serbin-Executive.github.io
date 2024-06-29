import { ReactElement } from "react";
import { Link } from "react-router-dom";

const SignIn = (): ReactElement => {
    return <form className="auth-form">
        <h2 className="auth-title">Sign in</h2>
        <p className="auth-label">Email</p>
        <input type="email" placeholder="Email" className="auth-input" />
        <p className="auth-label">Password</p>
        <input type="password" placeholder="Password" className="auth-input" />
        <button className="auth-button">sign in</button>
        <h4 className='auth-subtitle'>Not registered yet?
        <Link className="auth-link" to="/signup"> Sign up</Link></h4>
    </form>;
};

export default SignIn;