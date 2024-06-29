import { ReactElement } from "react";
import { ProtectedRoute } from "../../components/ProtectedRoute";

const HomePage = (): ReactElement => {
    return (
        <ProtectedRoute>
            <h1>Home page</h1>
        </ProtectedRoute>
    );
};

export default HomePage;
