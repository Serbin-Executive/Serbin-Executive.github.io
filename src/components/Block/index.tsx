import { ReactElement, ReactNode } from "react";
import "./style.css";

export const enum blockTypes {
    TEXT = "text",
    PALLETTE = "pallette",
    MIXED = "mixed",
    ROUNDED = "rounded",
}

export interface IBlockProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    type?: blockTypes;
    isActive?: boolean | undefined;
    additionalSelectors?: string;
    onClick?: () => void
}

const Block = ({
    children,
    isActive,
    width = "100%",
    height = "100%",
    type = blockTypes.MIXED,
    additionalSelectors,
    onClick = () => {return;}
}: IBlockProps): ReactElement => {
    const blockStyle = {
        width: width,
        height: height,
    };

    const classes = `block ${type} ${additionalSelectors} ${isActive && "active"}`;

    return (
        <div className={classes} style={blockStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export default Block;
