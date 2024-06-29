import { ReactElement } from "react";
import "./style.css";

export interface IBlocksSetProps {
    children: ReactElement;
    variant: setVariants;
}

export const enum setVariants {
    GRID = "grid-container",
    FLEX_ROW = "flex-row",
}

const BlocksSet = ({
    children,
    variant = setVariants.FLEX_ROW,
}: IBlocksSetProps): ReactElement => {
    return <div className={`blocks-set ${variant}`}>{children}</div>;
};

export default BlocksSet;
