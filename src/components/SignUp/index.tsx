import {
    ReactElement,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import { useAppDispatch } from "../../store";
import { setCurrentUser, setIsLoggedIn } from "../../store/slices/User";
import useFormWithValidation, { EMAIL_PATTERN } from "../../hooks/useFormWithValidation";
import User from "../../domains/User";

const SignUp = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { values, handleChangeValue, errors, isValid } = useFormWithValidation();

    const handleSignUp = () => {
         // temp doubled email
        dispatch(setCurrentUser(new User(values.email, values.email)));
        dispatch(setIsLoggedIn(true));
        navigate(paths.HOME.path);
    };

    return (
        <form className="auth-form">
            <h2 className="auth-title">SIGN UP</h2>
            <p className="auth-label">EMAIL</p>
            <input
                type="email"
                name="email"
                className="auth-input"
                placeholder="Type your email here"
                onChange={handleChangeValue}
                value={values.email || ''}
                pattern={EMAIL_PATTERN}
            />
            <span className="auth-error">
                {errors.email}
            </span>
            <p className="auth-label">USERNAME</p>
            <input
                type="text"
                className="auth-input"
                placeholder="Type your username here"
                name="username"
                required
                onChange={handleChangeValue}
                value={values.username || ''}
            />
            <span className="auth-error">
                {errors.username}
            </span>
            <p className="auth-label">PASSWORD</p>
            <input
                type="password"
                className="auth-input"
                placeholder="Type your password here"
                onChange={handleChangeValue}
                name="password"
                required
                minLength={8}
                value={values.password || ''}
            />
            <span className="auth-error">
                {errors.password}
            </span>
            <p className="auth-label">REPEAT PASSWORD</p>
            <input
                type="password"
                className="auth-input"
                placeholder="Type your password again here"
                onChange={handleChangeValue}
                name="repPassword"
                required
                minLength={8}
                value={values.repPassword || ''}
            />
            <span className="auth-error">
                {errors.repPassword}
            </span>
            <button
                className="auth-button"
                disabled={!isValid}
                onClick={handleSignUp}
            >
                SIGN UP
            </button>
            <h4 className="auth-subtitle">
                Already registered?
                <Link className="auth-link" to={paths.SIGN_IN.path}>
                    Sign in
                </Link>
            </h4>
        </form>
    );
};

export default SignUp;
