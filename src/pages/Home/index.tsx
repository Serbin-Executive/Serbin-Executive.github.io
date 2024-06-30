import { ReactElement } from "react";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import GeneralLayout from "../../layouts/General";
import Courses from "../../data/courses.json";
import Block from "../../components/Block";
import "./style.css";

const HomePage = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <ProtectedRoute>
            <GeneralLayout>
                <div className="courses-container">
                    {Courses.map((course) => (
                        <Block
                            width="350px"
                            height="280px"
                            key={course.id}
                            onClick={() =>
                                navigate(paths.COURSE.basePath + course.id)
                            }
                        >
                            <p>{course.name}</p>
                        </Block>
                    ))}
                </div>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default HomePage;
