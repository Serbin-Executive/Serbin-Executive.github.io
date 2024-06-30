import { ReactElement, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ApplicationContext from "../App/context";
import Courses from "../../data/courses.json";
import Block from "../Block";
import "./style.css";
import { paths } from "../../router/routes";

const Sidebar = (): ReactElement => {
    const { isSidebarExpanded, setIsSidebarExpanded } =
        useContext(ApplicationContext);
    const { courseId } = useParams();
    const navigate = useNavigate();

    const CoursesList = () => {
        return (
            <div className="courses-navigation-list">
                {Courses.map((course) => (
                    <Block
                        key={course.id}
                        height="50px"
                        additionalSelectors={"sided"}
                        isActive={courseId === course.id}
                        onClick={() =>
                            navigate(paths.COURSE.basePath + course.id)
                        }
                    >
                        <span className="course-letter">
                            {course.name[0]}
                        </span>
                        {course.name}
                    </Block>
                ))}
            </div>
        );
    };

    return (
        <aside className={`sidebar ${isSidebarExpanded && "collapsed"}`}>
            <CoursesList />
            <Block
                height={"30px"}
                onClick={() => setIsSidebarExpanded(!isSidebarExpanded)}
            >
                {isSidebarExpanded ? "❯" : "❮"}
            </Block>
        </aside>
    );
};

export default Sidebar;
