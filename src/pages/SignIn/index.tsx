import { ReactElement } from "react";
import DefaultLayout from "../../layouts/Default";
import SignIn from "../../components/SignIn";
import './style.css'
const SigninPage = (): ReactElement => {
    return (
        <DefaultLayout>
            <div className="auth-container" >
                <SignIn></SignIn>
            </div>
        </DefaultLayout>
    );
};

export default SigninPage;
