import { ReactElement } from "react";
import Header from "../../components/Header";
import './style.css';

export interface IDefaultLayoutProps {
    children: ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return (
        <div className="default-layout">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export default DefaultLayout;
