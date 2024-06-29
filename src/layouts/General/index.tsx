import { ReactElement } from "react";

export interface IGeneralLayoutProps {
    children: ReactElement;
}

const GeneralLayout = ({ children }: IGeneralLayoutProps): ReactElement => {
    return children;
};

export default GeneralLayout;
