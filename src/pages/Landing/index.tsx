import { ReactElement } from "react";
import DefaultLayout from "../../layouts/Default";
import BlocksSet from "../../components/BlocksSet";
import Block from "../../components/Block";
import { setVariants } from "../../components/BlocksSet";
import { blockTypes } from "../../components/Block";
import './style.css'
const LandingPage = (): ReactElement => {
    return (
        <DefaultLayout>
            {/* <h1>Landing page</h1> */}
            <div className="blocks-set-container">
                <BlocksSet variant={setVariants.FLEX_ROW}>
                    <>
                        <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                        </Block>
                        <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                        </Block>
                        <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                        </Block>
                        <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                        </Block>
                        <Block type={blockTypes.OUTLINED} width="30%" height="150px">

                        </Block>

                    </>
                </BlocksSet>
            </div>
        </DefaultLayout>
    );
};

export default LandingPage;
