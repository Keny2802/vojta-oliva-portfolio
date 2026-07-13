import type { AllHTMLAttributes } from "react";

type DefaultType = AllHTMLAttributes<HTMLDivElement | HTMLHeadingElement> & {
    children?: React.ReactNode;
};

export default DefaultType;