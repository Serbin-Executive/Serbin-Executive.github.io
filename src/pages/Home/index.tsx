import { ReactElement } from "react";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import GeneralLayout from "../../layouts/General";

const HomePage = (): ReactElement => {
    return (
        <ProtectedRoute>
            <GeneralLayout>
                <h1>Home page</h1>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default HomePage;
