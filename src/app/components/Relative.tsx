import {
    ReactNode,
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type props = {
    className?: string;
    id?: string;
    children: ReactNode;
};

const Relative = ({
    className,
    id,
    children
}: props) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "relative relative-component")}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Relative;