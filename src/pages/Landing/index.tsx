import { ReactElement } from "react";
import DefaultLayout from "../../layouts/Default";
import BlocksSet from "../../components/BlocksSet";
import Block from "../../components/Block";
import { setVariants } from "../../components/BlocksSet";
import { blockTypes } from "../../components/Block";
import { useNavigate } from "react-router-dom";
import { paths } from "../../router/routes";

import './style.css'
const LandingPage = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <DefaultLayout>
            <>
                {/* <h1>Landing page</h1> */}
                <div className="blocks-set-container">
                    <BlocksSet variant={setVariants.FLEX_ROW}>
                        <>
                            <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                            </Block>
                            <Block type={blockTypes.OUTLINED} width="10%" height="150px">

                            </Block>
                            <Block type={blockTypes.OUTLINED} width="10%" height="150px">

                            </Block>
                            <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                            </Block>
                            <Block type={blockTypes.OUTLINED} width="20%" height="150px">

                            </Block>
                        </>
                    </BlocksSet>
                </div>
                <div className="link-container">
                    <Block
                        width="100px"
                        height="30px"
                        onClick={() => navigate(paths.HOME.path)}
                    >
                        HOME
                    </Block>
                </div>
            </>

        </DefaultLayout>
    );
};

export default LandingPage;
