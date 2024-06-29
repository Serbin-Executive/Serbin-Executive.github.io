import { ReactElement } from "react";
import { Link, useParams } from "react-router-dom";
import GeneralLayout from "../../layouts/General";
import Lessons from "../../data/lessons.json";
import Block from "../../components/Block";
import { paths } from "../../router/routes";
import "./style.css";
import NavigationContainer from "../../components/NavigationContainer";

const CoursePage = (): ReactElement => {
    const { id: courseId } = useParams();

    return (
        <GeneralLayout>
            <div className="course-container">
                <NavigationContainer title={`${courseId} course`}/>
                {Lessons.map((lesson) => (
                    <Block height="50px" key={lesson.id}>
                        <Link
                            to={`${paths.LESSON.basePath}/${
                                courseId + lesson.name
                            }`}
                        >
                            {`${courseId} ${lesson.name}`}
                        </Link>
                    </Block>
                ))}
            </div>
        </GeneralLayout>
    );
};

export default CoursePage;
