import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import Router from "../../router";
import ApplicationContext from "./context";
import "./style.css";
import "./ui.css";

function App() {
    const [isSidebarExpanded, setIsSidebarExpanded] = useState<boolean>(true);

    return (
        <div className="application">
            <ApplicationContext.Provider
                value={{ isSidebarExpanded, setIsSidebarExpanded }}
            >
                <RouterProvider router={Router} />
            </ApplicationContext.Provider>
        </div>
    );
}

export default App;
