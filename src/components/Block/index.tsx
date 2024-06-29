import { ReactElement, ReactNode } from "react";
import "./style.css";

export const enum blockTypes {
    TEXT = "text",
    PALLETTE = "pallette",
    MIXED = "mixed",
}

export interface IBlockProps {
    children?: ReactNode;
    width?: string;
    height?: string;
    type?: blockTypes;
    onClick?: () => void
}

const Block = ({
    children,
    width = "100%",
    height = "100%",
    type = blockTypes.MIXED,
    onClick = () => {return;}
}: IBlockProps): ReactElement => {
    const blockStyle = {
        width: width,
        height: height,
    };
    return (
        <div className={`block ${type}`} style={blockStyle} onClick={onClick}>
            {children}
        </div>
    );
};

export default Block;
