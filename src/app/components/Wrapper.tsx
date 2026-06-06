import {
    ReactNode,
    Fragment,
    RefObject
} from "react";
import clsx from "clsx";

const Wrapper = ({
    ref,
    className,
    id,
    style,
    onClick,
    children
} : {
    ref?: RefObject<HTMLDivElement | null>;
    className?: string | ReactNode;
    id?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: ReactNode
}) => {
    return (
        <Fragment>
            <div
            { ...( ref && { ref: ref } ) }
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