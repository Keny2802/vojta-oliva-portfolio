"use client";

import {
    useState,
    useEffect,
    Fragment
} from "react";
import {
    LuAtSign
} from "react-icons/lu";

import Wrapper from "../components/Wrapper";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import Cta from "../components/Cta";
import Lnk from "../components/Lnk";
import UpAnimation from "../components/animations/UpAnimation";
import { Chat } from "openai/resources";
import Chatbot from "../components/Chatbot";

const Hero = () => {
    const [isResizing, setIsResizing] = useState<boolean>(false);

    useEffect(() => {
        const setToResize = () => {
            if (window.innerWidth >= 768) {
                setIsResizing(true);
            } else {
                setIsResizing(false);
            };
        };

        window.addEventListener("resize", setToResize);

        return () => window.removeEventListener("resize", setToResize);
    }, [isResizing]);

    return (
        <Fragment>
            <Relative
            className="min-h-screen bg-white shadow-lg"
            id="domu">
                <Img
                fill
                src="/assets/me-6.avif"
                alt="Tvořím weby pro řemeslníky a menší firmy - Vojtěch Oliva | vojtaoliva.cz"
                // p-2.5 md:p-4 lg:p-6 rounded-2xl
                loading="eager"
                type="hero"
                className="object-cover"
                />
                <Absolute className="bg-linear-to-t from-black/40 to-black/75" />
                <Wrapper className="fixed bottom-8 right-5 z-10">
                    <Flex type={isResizing ? "flexCol" : "flexRowOnly"}>
                        <Chatbot />
                        <Lnk
                        href="mailto:info@vojtaoliva.cz"
                        className="p-(--spacing-xs) md:p-(--spacing-sm) bg-[#E5532D] border border-white/25 rounded-full mx-auto cursor-pointer">
                            <LuAtSign
                            strokeWidth={2}
                            className="w-8 h-8 text-white cursor-pointer" />
                        </Lnk>
                        <Lnk
                        href="https://wa.me/420737007626"
                        target="_blank"
                        className="p-(--spacing-xs) md:p-(--spacing-sm) bg-white border border-white/25 rounded-full mx-auto">
                            <Img
                            width={32}
                            height={32}
                            src="/assets/whatsapp-icon.svg"
                            alt="Whatsapp icon - Vojtěch Oliva Web Developer | www.vojtaoliva.cz"
                            />
                        </Lnk>
                    </Flex>
                </Wrapper>
                <Absolute variant="topZero" className="p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) bg-[#E5532D] rounded-br-full left-0" />
                <Absolute variant="topZero" className="p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) bg-[#E5532D] rounded-bl-full right-0" />
                <Absolute variant="bottomZero" className="p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) bg-[#E5532D] rounded-tr-full left-0" />
                <Absolute variant="bottomZero" className="p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) bg-[#E5532D] rounded-tl-full right-0" />
                <Absolute className="flex justify-start items-center text-white mt-(--spacing-xs) md:mt-(--spacing-sm) lg:mt-(--spacing-md) p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg)">
                    <UpAnimation>
                        <Flex
                        type="flexCol"
                        className="justify-center md:max-w-[600px]">
                            <Wrapper className="mt-(--spacing-xs) md:mt-(--spacing-sm)">
                                <Flex type="flexRowOnly">
                                    <Text
                                    type="boldText"
                                    fontVariant="kanit"
                                    textSpanning="| Vojta Oliva"
                                    className="uppercase">
                                        Nadšený webový vývojář z Prahy
                                    </Text>
                                </Flex>
                                <Seperator className="mt-(--spacing-sm)" />
                            </Wrapper>
                            <Text
                            type="heroHeading"
                            fontVariant="playFairDisplay"
                            textSpanning="a živnotsníky."
                            className="uppercase">
                                Tvořím weby pro menší firmy
                            </Text>
                            <Text>
                                Při vývoji webových stránek kladu důraz na minimalismus, čistotu a celkový vzhled a funčnost webu.
                            </Text>
                            <Flex>
                                {
                                    [
                                        {
                                            href: "#sluzby",
                                            text: "Nabídka",
                                            textSpanning: "služeb",
                                        },
                                        {
                                            href: "#kontakt",
                                            text: "Zadat",
                                            textSpanning: "poptávku",
                                        },
                                    ].map((link, idx) => {
                                        const {
                                            href,
                                            text,
                                            textSpanning
                                        } = link;

                                        return (
                                            <Cta
                                            key={idx}
                                            variant={idx === 0 ? "secondary" : "primary"}
                                            href={href}
                                            className="w-full">
                                                <Text
                                                type="cardHeading"
                                                fontVariant="kanit"
                                                textSpanning={textSpanning}
                                                className="uppercase">
                                                    {text}
                                                </Text>
                                            </Cta>
                                        );
                                    })
                                }
                            </Flex>
                        </Flex>
                    </UpAnimation>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default Hero;