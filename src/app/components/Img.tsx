import {
    Fragment
} from "react";
import Image from "next/image";
import clsx from "clsx";

type FillType = {
    fill?: boolean;
};

type priorityProps = "standard" | "instantImage" | "hero";

type Props = {
    width?: number;
    height?: number;
    type?: priorityProps;
    src: string;
    alt?: string;
    draggable?: boolean;
    style?: React.CSSProperties;
    className?: string;
} & FillType;

const Img = ({
    width,
    height,
    type,
    src,
    alt,
    draggable = true,
    style,
    fill,
    className
}: Props) => {
    return (
        <Fragment>
            <Image
                {
                    ...(
                        fill ? ({
                            fill: true
                        }) : ({
                            width: width,
                            height: height
                        })
                    )
                }
                {
                    ...(
                        type === "hero" || "instantImage" ? ({
                            priority: true
                        }) : ({
                            priority: false
                        })
                    )
                }
                src={src}
                alt={alt || ""}
                draggable={draggable}
                style={style}
                className={clsx(className, "img-component")}
            />
        </Fragment>
    );
};

export default Img;