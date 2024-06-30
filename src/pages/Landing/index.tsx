import { ReactElement } from "react";
import { setVariants } from "../../components/BlocksSet";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";
import DefaultLayout from "../../layouts/Default";
import BlocksSet from "../../components/BlocksSet";
import Block from "../../components/Block";

import "./style.css";
const LandingPage = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <div className="landing-content">
                <Block height="300px" />
                <div className="link-container">
                    <Block
                        width="200px"
                        height="50px"
                        onClick={() => navigate(paths.HOME.path)}
                    >
                        LET'S START!
                    </Block>
                </div>
                <div className="blocks-set-container">
                    <BlocksSet variant={setVariants.FLEX_ROW}>
                        <>
                            <Block width="30%" height="200px" />
                            <Block width="30%" height="200px" />
                            <Block width="30%" height="200px" />
                        </>
                    </BlocksSet>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    error tempore iusto eaque dolore, quo quaerat nam numquam ad
                    mollitia. Assumenda quia omnis eos soluta dolorum reiciendis
                    placeat at odit? Perspiciatis modi eveniet, illum eligendi
                    architecto in distinctio cupiditate reprehenderit,
                    accusantium nobis nisi provident numquam tempore impedit
                    voluptatum iusto eum excepturi! Repudiandae cupiditate
                    blanditiis voluptatem aut quos esse necessitatibus itaque.
                    Nisi enim inventore saepe expedita debitis, facilis
                    architecto ipsa perspiciatis ex nulla dolores illo. Commodi
                    quidem nam laudantium qui rerum modi quis harum. Enim
                    blanditiis assumenda, quis qui quo eius! Magnam ullam quam
                    incidunt earum. Autem, id nisi? Expedita officia tempore
                    natus enim aut neque a ad dignissimos quas velit omnis
                    incidunt ea sint, numquam corporis ex iure molestiae fugiat?
                    Esse ex quaerat dicta! Obcaecati amet eaque, libero
                    voluptate rerum temporibus sed nisi incidunt non repudiandae
                    vitae sapiente voluptates totam alias dolorum qui a iure
                    distinctio reprehenderit nesciunt nobis maxime.
                </p>
                <Block height="300px" />
                <div className="blocks-set-container">
                    <BlocksSet variant={setVariants.FLEX_ROW}>
                        <>
                            <Block width="30%" height="200px" />
                            <Block width="30%" height="200px" />
                            <Block width="30%" height="200px" />
                        </>
                    </BlocksSet>
                </div>
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et
                    error tempore iusto eaque dolore, quo quaerat nam numquam ad
                    mollitia. Assumenda quia omnis eos soluta dolorum reiciendis
                    placeat at odit? Perspiciatis modi eveniet, illum eligendi
                    architecto in distinctio cupiditate reprehenderit,
                    accusantium nobis nisi provident numquam tempore impedit
                    voluptatum iusto eum excepturi! Repudiandae cupiditate
                    blanditiis voluptatem aut quos esse necessitatibus itaque.
                    Nisi enim inventore saepe expedita debitis, facilis
                    architecto ipsa perspiciatis ex nulla dolores illo. Commodi
                    quidem nam laudantium qui rerum modi quis harum. Enim
                    blanditiis assumenda, quis qui quo eius! Magnam ullam quam
                    incidunt earum. Autem, id nisi? Expedita officia tempore
                    natus enim aut neque a ad dignissimos quas velit omnis
                    incidunt ea sint, numquam corporis ex iure molestiae fugiat?
                    Esse ex quaerat dicta! Obcaecati amet eaque, libero
                    voluptate rerum temporibus sed nisi incidunt non repudiandae
                    vitae sapiente voluptates totam alias dolorum qui a iure
                    distinctio reprehenderit nesciunt nobis maxime.
                </p>
                <Block height="300px" />
            </div>
        </DefaultLayout>
    );
};

export default LandingPage;
