import {
    type FC,
    type AllHTMLAttributes,
    ReactNode,
    RefObject,
    Fragment,
} from "react";
import clsx from "clsx";

type Props = AllHTMLAttributes<HTMLDivElement | null> & {
    ref?: RefObject<HTMLDivElement | null>;
    className?: string | ReactNode;
    id?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
    children?: ReactNode
};

const Wrapper:FC<Props> = ({
    ref,
    children,
    ...attrs
}) => {
    const { className, id, style, } = attrs;

    return (
        <Fragment>
            <div
            {...attrs}
            { ...( ref && { ref: ref } ) }
            className={clsx(className, "wrapper-component")}
            { ...(id && { id: id }) }
            style={style}>
                {children}
            </div>
        </Fragment>
    );
};

export default Wrapper;