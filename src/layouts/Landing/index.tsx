import { ReactElement } from "react";

export interface ILandingLayoutProps {
    children: ReactElement;
}

const LandingLayout = ({ children }: ILandingLayoutProps): ReactElement => {
    return children;
};

export default LandingLayout;
