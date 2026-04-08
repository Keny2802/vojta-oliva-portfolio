import {
    Fragment
} from "react";
import clsx from "clsx";

import Wrapper from "./Wrapper";

type props = {
    className?: string;
    variant?: "primary" | "secondary";
};

const Seperator = ({
    className,
    variant = "primary"
}: props) => {
    const variants = {
        primary: "max-w-[150px] h-[8px] bg-[#E5532D]",
        secondary: "max-w-[150px] h-[8px] bg-white"
    };

    return (
        <Fragment>
            <Wrapper className={clsx(className, `${variants[variant]}`)} />
        </Fragment>
    );
};

export default Seperator;