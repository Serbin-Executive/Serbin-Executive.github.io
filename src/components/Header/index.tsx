import { ReactElement } from "react";
import Logo from "../Logo";
import ProfileShortcut from "../ProfileShortcut";
import "./style.css";

const Header = (): ReactElement => {

    return <header className="header">
        <nav>
            <Logo />
            <ProfileShortcut />
        </nav>
    </header>;
};

export default Header;
