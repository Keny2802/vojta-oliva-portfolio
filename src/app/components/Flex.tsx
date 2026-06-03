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
        flexRowOnly: "flex items-center gap-(--spacing-xs) md:gap-(--spacing-sm) lg:gap-(--spacing-md)",
        flexRowCombo: "flex items-center flex-col lg:flex-row gap-(--spacing-xs) md:gap-(--spacing-sm) lg:gap-(--spacing-md)",
        flexRowReverseCombo: "flex items-center flex-col-reverse lg:flex-row gap-(--spacing-xs) md:gap-(--spacing-sm) lg:gap-(--spacing-md)",
        flexCol: "flex flex-col gap-(--spacing-sm)"
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