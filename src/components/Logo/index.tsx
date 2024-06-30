import { ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import Block from "../Block";

const Logo = (): ReactElement => {
    const navigate = useNavigate();

    const redirectToLanding = () => {
        navigate(paths.LANDING.path);
    };

    return (
        <div className="logo-container">
            <Block width="70px" height="40px" onClick={redirectToLanding}>
                Logo
            </Block>
        </div>
    );
};

export default Logo;
