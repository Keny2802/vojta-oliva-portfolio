import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";
import Lnk from "./Lnk";

type variantType = "primary" | "secondary";
type sizeType = "md" | "lg";

type props = {
    href: string;
    className?: string;
    variant?: variantType;
    size?: sizeType;
    children: ReactNode;
};

const Cta = ({
    href,
    className,
    variant = "primary",
    size = "md",
    children
}: props) => {
    const variants = {
        primary: "bg-(--orange-color) text-white text-center rounded-md cursor-pointer text-base md:text-[17px] lg:text-[17.5px]",
        secondary: "bg-(--white-color) text-black text-center rounded-md cursor-pointer text-base md:text-[17px] lg:text-[17.5px]"
    };

    const sizes = {
        md: "p-(--spacing-xs) md:p-(--spacing-sm) min-w-[180px] md:min-w-[200px]",
        lg: "p-(--spacing-xs) md:p-(--spacing-md) min-w-[250px] md:min-w-[300px]"
    };

    return (
        <Fragment>
            <Lnk
            href={href}
            className={clsx(className, `${variants[variant]} ${sizes[size]} cta-component`)}>
                {children}
            </Lnk>
        </Fragment>
    );
};

export default Cta;