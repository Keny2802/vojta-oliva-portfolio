import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";

const Hero = () => {
    return (
        <Fragment>
            <Relative className="min-h-screen bg-white shadow-lg">
                <Img
                fill
                src="/assets/me-6.jpeg"
                alt="Tvořím weby pro řemeslníky a menší firmy - Vojtěch Oliva | vojtaoliva.cz"
                // p-2.5 md:p-4 lg:p-6 rounded-2xl
                className="object-cover"
                type="hero"
                />
                <Absolute className="bg-black/50" />
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
                            <Wrapper className="max-w-[150px] h-[8px] bg-[#E5532D] mt-2.5" />
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
                                    }
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
                                            {text}
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