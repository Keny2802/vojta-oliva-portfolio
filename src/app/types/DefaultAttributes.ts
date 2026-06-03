import { AllHTMLAttributes, ReactNode } from "react";

type DefaultAttributes = AllHTMLAttributes<
HTMLDivElement
| HTMLHeadingElement
| null
> & {
    sectionBackground?: "primary" | "secondary";
    children?: ReactNode;
};

export default DefaultAttributes;