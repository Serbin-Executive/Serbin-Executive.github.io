import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import GeneralLayout from "../../layouts/General";
import NavigationContainer from "../../components/NavigationContainer";
import Block from "../../components/Block";
import "./style.css";

const LessonPage = (): ReactElement => {
    const { id: lessonId } = useParams();
    return (
        <GeneralLayout>
            <div className="lesson-container">
                <NavigationContainer title={lessonId!} />
                <div className="lesson-content">
                    <Block width="500px" height="300px">
                        Video
                    </Block>
                </div>
            </div>
        </GeneralLayout>
    );
};

export default LessonPage;
