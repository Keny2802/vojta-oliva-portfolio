import type { AllHTMLAttributes } from "react";

type GenericStringMapping <T extends string> = { [ K in T ]: string; };

type LoaderBackgroundVariantsType =
"orange" | "black" | "blackTwo"
| "white" | "grayOne";

type LoaderSizeVariantsType =
"mini" | "xs"| "sm" | "md"
| "lg" | "xl" | "twoXL";

type MappedLoaderBackgroundVariantsType = GenericStringMapping<LoaderBackgroundVariantsType>;
type MappedLoaderSizeVariantsType = GenericStringMapping<LoaderSizeVariantsType>;

type LoaderType = AllHTMLAttributes<HTMLDivElement | null> & {
    backgroundVariant?: LoaderBackgroundVariantsType;
    sizeVariant?: LoaderSizeVariantsType;
    children?: React.ReactNode;
};

export type {
    GenericStringMapping,
    LoaderBackgroundVariantsType,
    LoaderSizeVariantsType,
    MappedLoaderBackgroundVariantsType,
    MappedLoaderSizeVariantsType,
};

export default LoaderType;