import {
    ReactNode,
    Fragment
} from "react";
import Link from "next/link";
import clsx from "clsx";

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
        primary: "bg-[#E5532D] text-white text-center rounded-md cursor-pointer text-base md:text-[17px] lg:text-[17.5px]",
        secondary: "bg-white text-black text-center rounded-md cursor-pointer text-base md:text-[17px] lg:text-[17.5px]"
    };

    const sizes = {
        md: "p-3 md:p-3.5 lg:p-4 min-w-[180px] md:min-w-[200px]",
        lg: "p-4 md:p-4.5 lg:p-6 min-w-[250px] md:min-w-[300px]"
    };

    return (
        <Fragment>
            <Link
            href={href}
            className={clsx(className, `${variants[variant]} ${sizes[size]} cta-component`)}>
                {children}
            </Link>
        </Fragment>
    );
};

export default Cta;