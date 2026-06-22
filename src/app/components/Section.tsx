import { type FC, Fragment } from "react";
import clsx from "clsx";
import type DefaultAttributes from "../types/DefaultAttributes";

const Section:FC<DefaultAttributes> = ({
    sectionBackground = "primary",
    children,
    ...attrs
}) => {
    const sectionBackgrounds = {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary shadow-lg text-(--black-color)",
    };

    return (
        <Fragment>
            <div
            {...attrs}
            className={clsx(
            sectionBackgrounds[sectionBackground],
            sectionBackground === "secondary" && "mt-xs md:mt-sm lg:mt-md",
            "p-sm md:p-md lg:p-xl section-component",
            attrs.className
            )}>
                {children}
            </div>
        </Fragment>
    );
};

export default Section;