import { RouteObject } from "react-router-dom";
import HomePage from "../pages/Home";
import LandingPage from "../pages/Landing";
import CoursePage from "../pages/Course";
import LessonPage from "../pages/Lesson";
import ProfilePage from "../pages/Profile";
import NotFoundPage from "../pages/NotFound";
// import AuthPage from "../pages/SignIn";
import SignInPage from "../pages/SignIn"
import SignUpPage from "../pages/SignUp";
import path from "path";

export const paths = {
    LANDING: {
        id: "Landing",
        path: "/",
        label: "Landing",
    },
    // AUTH: {
    //     id: "Auth",
    //     path: "/auth",
    //     label: "Auth",
    // },

    SIGNIN: {
        id: 'Signin',
        path: '/signin',
        label: "Signin",
    },
    SIGNUP: {
        id: 'Signup',
        path: '/signup',
        label: "Signup",
    },
    HOME: {
        id: "Home",
        path: "/courses",
        label: "Courses",
    },
    PROFILE: {
        id: "Profile",
        path: "/profile",
        label: "Profile",
    },
    COURSE: {
        id: "Course",
        path: "/course",
        label: "Course",
    },
    LESSON: {
        id: "Lesson",
        path: "/lesson",
        label: "Courses",
    },
    NOT_FOUND: {
        id: "notFound",
        path: "*",
        label: "notFound",
    },
};

const routes: RouteObject[] = [
    {
        ...paths.LANDING,
        element: <LandingPage />,
    },
    {
        ...paths.HOME,
        element: <HomePage />,
    },
    // {
    //     ...paths.AUTH,
    //     element: <AuthPage />
    // },
    {
        ...paths.SIGNIN,
        element: <SignInPage />
    },
    {
        ...paths.PROFILE,
        element: <ProfilePage />,
    },
    {
        ...paths.COURSE,
        element: <CoursePage />,
    },
    {
        ...paths.LESSON,
        element: <LessonPage />,
    },
    {
        ...paths.NOT_FOUND,
        element: <NotFoundPage />,
    },
    {
        ...paths.SIGNUP,
        element: <SignUpPage />
    }
];

export default routes;
