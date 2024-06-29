import {
    ChangeEvent,
    Dispatch,
    ReactElement,
    SetStateAction,
    useState,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import { setCurrentUser, setIsLoggedIn } from "../../store/slices/User";
import User from "../../domains/User";
import { useAppDispatch } from "../../store";

const SignIn = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    // eslint-disable-next-line
    const [validationErrors, setValidationErrors] = useState<string[]>([]);

    const isSubmitDisallowed =
        !email && !password && validationErrors.length > 0;

    const handleSignIn = () => {
        //temp
        dispatch(setCurrentUser(new User(email, email)));
        dispatch(setIsLoggedIn(true));
        navigate(paths.HOME.path);
    };

    const handleChange = (
        event: ChangeEvent<HTMLInputElement>,
        handler: Dispatch<SetStateAction<string>>
    ) => {
        handler(event.target.value);
    };

    return (
        <form className="auth-form">
            <h2 className="auth-title">SIGN IN</h2>
            <p className="auth-label">EMAIL</p>
            <input
                type="email"
                placeholder="Email"
                className="auth-input"
                onChange={(event) => handleChange(event, setEmail)}
            />
            <p className="auth-label">PASSWORD</p>
            <input
                type="password"
                placeholder="Password"
                className="auth-input"
                onChange={(event) => handleChange(event, setPassword)}
            />
            <button
                className="auth-button"
                disabled={isSubmitDisallowed}
                onClick={handleSignIn}
            >
                SIGN IN
            </button>
            <h4 className="auth-subtitle">
                Not registered yet?
                <Link className="auth-link" to={paths.SIGN_UP.path}>
                    Sign up
                </Link>
            </h4>
        </form>
    );
};

export default SignIn;
