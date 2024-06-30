import {
    ReactElement,
    useEffect,
} from "react";
import { Link, useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import { setCurrentUser, setIsLoggedIn } from "../../store/slices/User";
import User from "../../domains/User";
import { useAppDispatch } from "../../store";
import useFormWithValidation, { EMAIL_PATTERN } from "../../hooks/useFormWithValidation";

const SignIn = (): ReactElement => {

    useEffect(() => {
        const savedUserString: string | null = localStorage.getItem("user");

        if (!savedUserString) {
            console.log("savedUserString", savedUserString);
            return;
        }

        const savedUser = JSON.parse(savedUserString);
        console.log("savedUser", savedUser);

        if(!savedUser.name || !savedUser.email) {
            return;
        }

        dispatch(setCurrentUser(new User(savedUser.name, savedUser.email)));
        dispatch(setIsLoggedIn(true));
        navigate(paths.HOME.path);
        
        // eslint-disable-next-line
    }, []);
    
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { values, handleChangeValue, errors, isValid } = useFormWithValidation();

    const handleSignIn = () => {
        // temp doubled email
        dispatch(setCurrentUser(new User(values.email, values.email)));
        dispatch(setIsLoggedIn(true));
        navigate(paths.HOME.path);
    };

    return (
        <form className="auth-form">
            <h2 className="auth-title">SIGN IN</h2>
            <p className="auth-label">EMAIL</p>
            <input
                type="email"
                placeholder="Email"
                className="auth-input"
                onChange={handleChangeValue}
                required
                name="email"
                value={values.email || ''}
                pattern={EMAIL_PATTERN}

            />
            <span className="auth-error">
                {errors.email}
            </span>
            <p className="auth-label">PASSWORD</p>
            <input
                type="password"
                placeholder="Password"
                className="auth-input"
                onChange={handleChangeValue}
                required
                minLength={8}
                name="password"
                value={values.password}
            />
            <span className="auth-error">
                {errors.password}
            </span>
            <button
                className="auth-button"
                disabled={!isValid}
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
