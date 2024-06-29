import {
    ChangeEvent,
    Dispatch,
    ReactElement,
    SetStateAction,
    useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import { useAppDispatch } from "../../store";
import { setCurrentUser, setIsLoggedIn } from "../../store/slices/User";
import User from "../../domains/User";
import { useFormWithValidation } from "../../hooks/useFormWithValidation";

const SignUp = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const EMAIL_PATTERT = "^([^ ]+@[^ ]+\\.[a-z]{2,6}|)$";
    const { values, handleChangeValue, errors, isValid } = useFormWithValidation();

    const [email, setEmail] = useState<string>("");
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [rePassword, setRePassword] = useState<string>("");
    // eslint-disable-next-line
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const isSubmitDisallowed =
        !email &&
        !username &&
        !password &&
        password !== rePassword &&
        validationErrors.length > 0;

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
        handler: Dispatch<SetStateAction<string>>
    ) => {
        handler(event.target.value);
    };

    const handleSignUp = () => {
        //temp
        dispatch(setCurrentUser(new User(email, email)));
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
                pattern={EMAIL_PATTERT}
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
