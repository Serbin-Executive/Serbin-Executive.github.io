import { Dispatch, SetStateAction, createContext } from "react";

export interface IApplicationContext {
    isSidebarExpanded: boolean
    setIsSidebarExpanded: Dispatch<SetStateAction<boolean>>
}

const ApplicationContext = createContext({} as IApplicationContext);

export default ApplicationContext;