import { ReactElement } from "react";
import { paths } from "../../router/routes";
import { useNavigate, useParams } from "react-router-dom";
import GeneralLayout from "../../layouts/General";
import Lessons from "../../data/lessons.json";
import Block from "../../components/Block";

import "./style.css";
import NavigationContainer from "../../components/NavigationContainer";
import { ProtectedRoute } from "../../components/ProtectedRoute";

const CoursePage = (): ReactElement => {
    const { courseId } = useParams();
    const navigate = useNavigate();

    return (
        <ProtectedRoute>
            <GeneralLayout>
                <div className="course-container">
                    <NavigationContainer title={`${courseId} course`} />
                    {Lessons.map((lesson) => (
                        <Block
                            height="50px"
                            key={lesson.id}
                            onClick={() =>
                                navigate(
                                    paths.COURSE.basePath +
                                        courseId +
                                        paths.LESSON.basePath +
                                        lesson.id
                                )
                            }
                        >
                            <p>{lesson.name}</p>
                        </Block>
                    ))}
                </div>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default CoursePage;
