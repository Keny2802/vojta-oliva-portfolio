import { type FC, Fragment } from "react";
import clsx from "clsx";

import LoaderType, {
    MappedLoaderBackgroundVariantsType,
    MappedLoaderSizeVariantsType
} from "@/app/types/Loader/LoaderType";
import Wrapper from "../Wrapper";

const Loader:FC<LoaderType> = ({
    backgroundVariant = "orange",
    sizeVariant = "xs",
    children,
    ...attrs
}) => {
    const backgroundVariants:MappedLoaderBackgroundVariantsType = {
        orange: "bg-primary",
        white: "bg-secondary",
        black: "bg-third",
        grayOne: "bg-fourth",
        blackTwo: "bg-fifth",
    };

    const sizeVariants:MappedLoaderSizeVariantsType = {
        mini: "w-2 h-2",
        xs: "w-2 h-2 md:w-4 md:h-4",
        sm: "w-4 h-4 md:w-6 md:h-6",
        md: "w-6 h-6 md:w-8 md:h-8",
        lg: "w-8 h-8 md:w-10 md:h-10",
        xl: "w-12 h-12 md:w-14 md:h-14",
        twoXL: "w-14 h-14 md:w-16 md:h-16",
    };

    return (
        <Fragment>
            {/* {children ? (
                <Flex type="flexCol">
                    <Wrapper className="flex gap-xs" />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                </Flex>
            ) : (
                <Wrapper className="flex gap-xs">
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                </Wrapper>
            )} */}
            <Wrapper
            // {...attrs}
            className="flex gap-xs">
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                    <Wrapper className={clsx(
                        backgroundVariants[backgroundVariant],
                        sizeVariants[sizeVariant],
                        "loader-component animate-bounce rounded-full"
                    )} />
                </Wrapper>
        </Fragment>
    );
};

export default Loader;