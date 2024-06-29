import { ReactElement } from "react";

export interface IDefaultLayoutProps {
    children: ReactElement;
}

const DefaultLayout = ({ children }: IDefaultLayoutProps): ReactElement => {
    return children;
};

export default DefaultLayout;
