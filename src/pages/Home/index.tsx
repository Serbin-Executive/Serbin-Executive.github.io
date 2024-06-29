import { ReactElement } from "react";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { Link } from "react-router-dom";
import { paths } from "../../router/routes";
import GeneralLayout from "../../layouts/General";
import Courses from "../../data/courses.json";
import Block from "../../components/Block";
import "./style.css";

const HomePage = (): ReactElement => {
    return (
        <ProtectedRoute>
            <GeneralLayout>
                <div className="courses-container">
                    {Courses.map((course) => (
                        <Block width="350px" height="280px" key={course.id}>
                            <Link to={`${paths.COURSE.basePath}/${course.id}`}>
                                {course.name}
                            </Link>
                        </Block>
                    ))}
                </div>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default HomePage;
