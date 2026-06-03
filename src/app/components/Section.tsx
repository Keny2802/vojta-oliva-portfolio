import { type FC, Fragment } from "react";
import clsx from "clsx";
import type DefaultAttributes from "../types/DefaultAttributes";

const Section:FC<DefaultAttributes> = ({
    sectionBackground = "primary",
    children,
    ...attrs
}) => {
    const sectionBackgrounds = {
        primary: "bg-(--orange-color) text-(--white-color)",
        secondary: "bg-(--white-color) shadow-lg text-(--black-color)",
    };

    return (
        <Fragment>
            <div
            {...attrs}
            className={clsx(
            sectionBackgrounds[sectionBackground],
            sectionBackground === "secondary" && "mt-(--spacing-xs) md:mt-(--spacing-sm) lg:mt-(--spacing-md)",
            "p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) section-component",
            attrs.className
            )}>
                {children}
            </div>
        </Fragment>
    );
};

export default Section;