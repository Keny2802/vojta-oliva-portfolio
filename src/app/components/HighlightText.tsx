import {
    type AllHTMLAttributes,
    ReactNode,
    type FC,
    useRef,
    Fragment,
    useEffect,
    RefObject,
} from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import SplitText from "gsap/dist/SplitText";
import Text from "./Text";

type Props = AllHTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | null> & {
    type?: "heroHeading" | "cardHeading" | "sectionHeading" | "boldText" | "bodyText";
    fontVariant?: "inter" | "playFairDisplay" | "kanit" | "baloo",
    text: string;
    textSpanning?: string;
};

const HighlightText:FC<Props> = ({
    type = "bodyText",
    fontVariant,
    text,
    textSpanning,
    ...attrs
}) => {
    const ref = useRef<HTMLHeadingElement | HTMLParagraphElement | null>(null);
    const element = ref.current;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const splittedText = new SplitText(element, { type: "words" });
        const splittedWords = splittedText.words;
        
        gsap.from(splittedWords, {
            color: "#E5532D",
            stagger: .1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top center",
                end: "bottom center",
                scrub: true,
            },
        });
    }, []);

    return (
        <Fragment>
            <Text
            {...attrs}
            ref={ref}
            type={type}
            fontVariant={fontVariant}
            textSpanning={textSpanning}>
                {text}
            </Text>
        </Fragment>
    );
};

export default HighlightText;