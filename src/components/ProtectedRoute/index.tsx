import { ReactElement } from "react";
import { useAppSelector } from "../../store";
import { Navigate } from "react-router-dom";
import { paths } from "../../router/routes";

export interface IProtectedRouteProps {
    children: ReactElement;
}

export const ProtectedRoute = ({
    children,
}: IProtectedRouteProps): ReactElement => {
    const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

    if (!isLoggedIn) {
        return <Navigate to={paths.SIGNIN.path} />;
    }

    return children;
};