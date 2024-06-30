import { ReactElement } from "react";
import { useParams } from "react-router-dom";
import GeneralLayout from "../../layouts/General";
import NavigationContainer from "../../components/NavigationContainer";
import Block from "../../components/Block";
import "./style.css";
import { ProtectedRoute } from "../../components/ProtectedRoute";

const LessonPage = (): ReactElement => {
    const { lessonId } = useParams();
    const lessonNumber = Number.parseInt(lessonId!) + 1;

    return (
        <ProtectedRoute>
            <GeneralLayout>
                <div className="lesson-container">
                    <NavigationContainer title={"Lesson " + lessonNumber} />
                    <div className="lesson-content">
                        <Block width="500px" height="300px">
                            Video
                        </Block>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Saepe cupiditate illo accusamus consectetur,
                            minima nesciunt atque impedit. Corrupti laborum aut
                            eligendi quasi hic excepturi ipsam quae! Eaque quae
                            aspernatur neque. Libero, iusto reiciendis explicabo
                            similique ut, repellendus pariatur sint dignissimos
                            nesciunt, labore officiis? Eligendi quas debitis
                            ducimus neque. Saepe neque sint consequuntur unde
                            similique tempore veniam architecto, itaque delectus
                            impedit! Harum doloremque eius consequuntur, tenetur
                            accusantium numquam ipsa, culpa corporis
                            exercitationem asperiores ut rerum sapiente quae,
                            placeat nemo aliquam illo tempora sunt laborum
                            facere sint. Ex dolores odit ipsam ducimus. Enim ad
                            necessitatibus soluta tempore earum doloribus amet
                            possimus non corrupti quas saepe veritatis omnis
                            beatae voluptas voluptates ratione quo quisquam
                            ducimus repellendus, deleniti harum ab nam tempora!
                            Voluptatum, obcaecati. Architecto laboriosam vel
                            quibusdam accusamus voluptatem dolorum, tempora
                            atque ea laudantium iusto laborum itaque magni
                            reprehenderit molestiae est sequi sit alias
                            voluptatum et consequatur voluptas quod. Natus
                            consequatur cupiditate error.
                        </p>
                    </div>
                </div>
            </GeneralLayout>
        </ProtectedRoute>
    );
};

export default LessonPage;
