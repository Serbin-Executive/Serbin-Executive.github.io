import { Fragment, ReactElement } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { setIsLoggedIn, setCurrentUser } from "../../store/slices/User";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import Block, { blockTypes } from "../Block";

const ProfileShortcut = (): ReactElement => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);
    const currentUser = useAppSelector((state) => state.user.currentUser);

    const handleLogout = () => {
        dispatch(setIsLoggedIn(false));
        dispatch(setCurrentUser({}));
        navigate(paths.SIGN_IN.path);
    };

    const UserBlock = (): ReactElement => {
        return (
            <div>
                <Block>{currentUser.getName()}</Block>
                <Block type={blockTypes.TEXT} onClick={handleLogout}>
                    {"LOGOUT ->"}
                </Block>
            </div>
        );
    };

    const LoginBlock = (): ReactElement => {
        if([paths.SIGN_IN.path, paths.SIGN_UP.path].includes(location.pathname)) {
            return <Fragment></Fragment>;
        }

        return (
            <Block type={blockTypes.TEXT}>
                <Link to={paths.SIGN_IN.path}>SIGN IN</Link>
            </Block>
        );
    };

    return (
        <div className="profile-shortcut">
            {isLoggedIn ? <UserBlock /> : <LoginBlock />}
        </div>
    );
};

export default ProfileShortcut;
