import { ReactElement } from "react";
import "./style.css";

export interface IHeaderProps {
    // children: ReactElement;
}

const Header = ({}: IHeaderProps): ReactElement => {
    return <header className="header"></header>;
};

export default Header;
