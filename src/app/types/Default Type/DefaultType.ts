import type { AllHTMLAttributes } from "react";

type DefaultType = AllHTMLAttributes<HTMLDivElement> & {
    children?: React.ReactNode;
};

export default DefaultType;