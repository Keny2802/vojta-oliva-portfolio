"use client";

import { type FC, useRef, Fragment } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import type DefaultAttributes from "@/app/types/DefaultAttributes";
import Wrapper from "../Wrapper";

const UpAnimation:FC<DefaultAttributes> = ({
    children,
}) => {
    const ref = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.from(ref.current, {
            y: 100,
            opacity: 0,
            duration: 1,
            scrollTrigger: {
                trigger: ref.current,
                start: "top 80%",
                toggleActions: "play none none reset",
                // toggleActions: "play pause resume pause",
            },
            // repeat: -1,
            // repeatDelay: 1,
            // repeatRefresh: true
        });
    }, { scope: ref });

    return (
        <Fragment>
            <Wrapper
            // {...attrs}
            ref={ref}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

export default UpAnimation;