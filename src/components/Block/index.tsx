import { ReactElement } from "react";
import "./style.css";

export interface IBlockProps {
    children: ReactElement;
}

const Block = ({ children }: IBlockProps): ReactElement => {
    return <div className="block">{children}</div>;
};

export default Block;
