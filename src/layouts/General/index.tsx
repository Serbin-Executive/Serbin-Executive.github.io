import { ReactElement } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import './style.css';

export interface IGeneralLayoutProps {
    children: ReactElement;
}

const GeneralLayout = ({ children }: IGeneralLayoutProps): ReactElement => {
    return (
        <div className="general-layout">
            <Header />
            <div className="content-wrapper">
                <Sidebar />
                <main>{children}</main>
            </div>
        </div>
    );
};

export default GeneralLayout;
