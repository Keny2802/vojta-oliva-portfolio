import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type props = {
    type?: "flexRowOnly" | "flexRowCombo" | "flexRowReverseCombo" | "flexCol";
    className?: string;
    id?: string;
    children?: ReactNode;
};

const Flex = ({
    type = "flexRowCombo",
    className,
    id,
    children
} : props) => {
    const types = {
        flexRowOnly: "flex items-center gap-2 md:gap-4 lg:gap-6",
        flexRowCombo: "flex items-center flex-col lg:flex-row gap-2 md:gap-4 lg:gap-6",
        flexRowReverseCombo: "flex items-center flex-col-reverse lg:flex-row gap-2 md:gap-4 lg:gap-6",
        flexCol: "flex flex-col gap-2 md:gap-3 lg:gap-4"
    };

    return (
        <Fragment>
            <Wrapper
            className={clsx(className, `${types[type]} flex-component`)}
            id={id}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default Flex;