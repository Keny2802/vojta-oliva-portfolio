import {
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

const Hero = () => {
    return (
        <Fragment>
            <Relative className="min-h-screen bg-white shadow-lg">
                <Img
                fill
                src="/assets/me-6.avif"
                alt="Tvořím weby pro řemeslníky a menší firmy - Vojtěch Oliva | vojtaoliva.cz"
                // p-2.5 md:p-4 lg:p-6 rounded-2xl
                // loading="eager"
                type="hero"
                className="object-cover"
                />
                <Absolute className="bg-black/50" />
                <Absolute
                variant="bottomZero"
                className="bottom-25 right-5 cursor-pointer z-50">
                    <Flex type="flexCol">
                        <Lnk
                        href="mailto:info@vojtaoliva.cz"
                        className="p-4 bg-[#E5532D] rounded-full mx-auto cursor-pointer">
                            <LuAtSign
                            strokeWidth={2}
                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white cursor-pointer" />
                        </Lnk>
                        <Lnk
                        href="https://wa.me/420737007626"
                        target="_blank"
                        className="p-4 bg-white rounded-full mx-auto">
                            <Img
                            width={32}
                            height={32}
                            src="/assets/whatsapp-icon.svg"
                            alt="Whatsapp icon - Vojtěch Oliva Web Developer | www.vojtaoliva.cz"
                            />
                        </Lnk>
                    </Flex>
                </Absolute>
                <Absolute variant="topZero" className="p-4 md:p-6 lg:p-8 bg-[#E5532D] rounded-br-full left-0" />
                <Absolute variant="topZero" className="p-4 md:p-6 lg:p-8 bg-[#E5532D] rounded-bl-full right-0" />
                <Absolute variant="bottomZero" className="p-4 md:p-6 lg:p-8 bg-[#E5532D] rounded-tr-full left-0" />
                <Absolute variant="bottomZero" className="p-4 md:p-6 lg:p-8 bg-[#E5532D] rounded-tl-full right-0" />
                <Absolute className="flex justify-start items-center text-white p-6 md:p-8 lg:p-10">
                    <Flex
                    type="flexCol"
                    className="justify-center md:max-w-[550px]">
                        <Wrapper>
                            <Text>
                                Vojtěch Oliva | Webový vývojář
                            </Text>
                            <Seperator className="mt-2.5" />
                        </Wrapper>
                        <Text
                        type="heroHeading"
                        className="uppercase">
                            Tvořím weby pro řemeslníky a menší firmy.
                        </Text>
                        <Text>
                            Specializuji se převážně na vývoj webových prezentací a více stránkových webů pro Váš podnik.
                        </Text>
                        <Flex>
                            {
                                [
                                    {
                                        href: "#sluzby",
                                        text: "Nabídka služeb"
                                    },
                                    {
                                        href: "#kontakt",
                                        text: "Zadat poptávku"
                                    },
                                ].map((link, idx) => {
                                    const {
                                        href,
                                        text
                                    } = link;

                                    return (
                                        <Cta
                                        key={idx}
                                        variant={idx === 0 ? "secondary" : "primary"}
                                        href={href}
                                        className="w-full">
                                            <Text type="boldText">
                                                {text}
                                            </Text>
                                        </Cta>
                                    );
                                })
                            }
                        </Flex>
                    </Flex>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default Hero;