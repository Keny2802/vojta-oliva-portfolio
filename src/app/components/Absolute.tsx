import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type variantType = "insetZero" | "topZero" | "bottomZero";

type props = {
    className?: string;
    id?: string;
    variant?: variantType;
    children?: ReactNode;
};

const Absolute = ({
    className,
    id,
    variant = "insetZero",
    children
}: props) => {
    const variants = {
        insetZero: "inset-0",
        topZero: "top-0",
        bottomZero: "bottom-0",
    };

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, `absolute ${variants[variant]} absolute-component`)}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Absolute;