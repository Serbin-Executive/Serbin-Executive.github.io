import { Fragment, ReactElement } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import ProfileShortcut from "../ProfileShortcut";
import { paths } from "../../router/routes";
import Logo from "../Logo";
import Block from "../Block";
import "./style.css";

const Header = (): ReactElement => {
    const navigate = useNavigate();
    const location = useLocation();

    const GoToCourses = () => {
        if ([paths.HOME.path, paths.LANDING.path].includes(location.pathname)) {
            return <Fragment></Fragment>;
        }
        return (
            <Block
                width="100px"
                height="30px"
                onClick={() => navigate(paths.HOME.path)}
            >
                COURSES
            </Block>
        );
    };

    return (
        <header className="header">
            <nav>
                <Logo />
                <GoToCourses />
                <ProfileShortcut />
            </nav>
        </header>
    );
};

export default Header;
