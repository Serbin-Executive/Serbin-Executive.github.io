import { ReactElement } from "react";
import "./style.css";

export interface ISidebarProps {
    // children: ReactElement;
}

const Sidebar = ({}: ISidebarProps): ReactElement => {
    return <aside className="Sidebar"></aside>;
};

export default Sidebar;
