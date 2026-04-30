import {
    Fragment
} from "react";
import Image, {
    ImageProps
} from "next/image";
import clsx from "clsx";

type FillType = {
    fill?: boolean;
};

type priorityProps = "standard" | "instantImage" | "hero";

type Props = {
    attributes?: ImageProps;
    width?: number;
    height?: number;
    type?: priorityProps;
    src: string;
    alt?: string;
    draggable?: boolean;
    loading?: "lazy" | "eager";
    style?: React.CSSProperties;
    className?: string;
} & FillType;

const Img = ({
    attributes,
    width,
    height,
    type,
    src,
    alt,
    draggable = true,
    loading,
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
                loading={loading}
                style={style}
                className={clsx(className, "img-component")}
                {
                    ...attributes
                }
            />
        </Fragment>
    );
};

export default Img;