import { ReactElement } from "react";
import "./style.css";

export interface IHeaderProps {
    // children: ReactElement;
}

const Header = (): ReactElement => {
    return <header className="header"></header>;
};

export default Header;
