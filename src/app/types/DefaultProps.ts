import
React,
{
    ReactNode
} from "react";

type Variants =
"top" | "right"
| "bottom" | "left"
| "insetZero";

type DefaultProps = {
    onClick: (_: any) => void;

    style: React.CSSProperties;
    backgroundColor: React.CSSProperties;
    color: React.CSSProperties;
    width: number;
    height: number;
    className: string;
    id: string;
    href: string;
    prefetch: boolean;
    text: string;
    children: ReactNode | null;
};

export type PickedNonObligatedProps =
"style" | "backgroundColor"
| "color" | "width"
| "height" | "children";

export default DefaultProps;