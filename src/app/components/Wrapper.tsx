import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

const Wrapper = ({
    className,
    id,
    style,
    onClick,
    children
} : {
    className?: string | ReactNode;
    id?: string;
style?: React.CSSProperties;
    onClick?: () => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            className={clsx(className, "wrapper-component")}
            id={id}
            style={style}
            onClick={onClick}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;