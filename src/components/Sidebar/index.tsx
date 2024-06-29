import { ReactElement, useState } from "react";
import "./style.css";

export interface ISidebarProps {
    // children: ReactElement;
}

const Sidebar = (): ReactElement => {
    const [isCollapsed, setIsCollapsed] = useState<boolean>(false);

    return <aside className={`sidebar ${isCollapsed && "collapsed"}`}>
        <button onClick={() => setIsCollapsed(!isCollapsed)}>
            {isCollapsed ? "Expand" : "Collapse"}
        </button>
    </aside>;
};

export default Sidebar;
