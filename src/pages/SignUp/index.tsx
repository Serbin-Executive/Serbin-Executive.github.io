import { ReactElement } from "react";
import DefaultLayout from "../../layouts/Default";
import SignUp from "../../components/SignUp";
 
const SignupPage = (): ReactElement => {
    return (
        <DefaultLayout>
            <div className="auth-container">
                <SignUp></SignUp>
            </div>
        </DefaultLayout>
    );
};

export default SignupPage;
