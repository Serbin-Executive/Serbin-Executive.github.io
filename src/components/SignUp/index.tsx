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

const SignUp = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

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
                className="auth-input"
                placeholder="Type your email here"
                onChange={(event) => handleChange(event, setEmail)}
            />
            <p className="auth-label">USERNAME</p>
            <input
                type="text"
                className="auth-input"
                placeholder="Type your username here"
                onChange={(event) => handleChange(event, setUsername)}
            />
            <p className="auth-label">PASSWORD</p>
            <input
                type="password"
                className="auth-input"
                placeholder="Type your password here"
                onChange={(event) => handleChange(event, setPassword)}
            />
            <p className="auth-label">REPEAT PASSWORD</p>
            <input
                type="password"
                className="auth-input"
                placeholder="Type your password again here"
                onChange={(event) => handleChange(event, setRePassword)}
            />
            <button
                className="auth-button"
                disabled={isSubmitDisallowed}
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
