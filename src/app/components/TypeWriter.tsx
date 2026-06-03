import {
    type AllHTMLAttributes,
    ReactNode,
    type FC,
    useRef,
    Fragment,
    useEffect,
} from "react";
import gsap from "gsap";
// import TextPlugin from "gsap/TextPlugin";
import TextPlugin from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

import Text from "./Text";

type Props = AllHTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | null> & {
    type?: "heroHeading" | "cardHeading" | "sectionHeading" | "boldText" | "bodyText";
    fontVariant?: "inter" | "playFairDisplay" | "kanit" | "baloo",
    text: string;
    textSpanning?: string;
};

const TypeWriter:FC<Props> = ({
    type = "bodyText",
    text,
    textSpanning,
    ...attrs
}) => {    
    const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
    const element = ref.current;

    // const { contextSafe } = useGSAP(() => {
    //     gsap.to(element, {
    //         text: text,
    //         duration: 2,
    //         ease: "power3"
    //     });
    // }, { scope: ref } );

    useEffect(() => {
        gsap.registerPlugin(TextPlugin);

        gsap.to(ref.current, {
            text: text,
            duration: 2,
            ease: "power3"
        });
    }, []);

    return (
        <Fragment>
            <Text
            {...attrs}
            ref={ref}
            type={type}
            textSpanning={textSpanning}>
                {text}
            </Text>
        </Fragment>
    );
};

export default TypeWriter;