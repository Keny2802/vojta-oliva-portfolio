import { AllHTMLAttributes, ReactNode } from "react";

type DefaultAttributes = AllHTMLAttributes<
HTMLDivElement
| HTMLButtonElement
| HTMLHeadingElement
| HTMLParagraphElement
| null
> & {
    sectionBackground?: "primary" | "secondary";
    children?: ReactNode;
};

export default DefaultAttributes;