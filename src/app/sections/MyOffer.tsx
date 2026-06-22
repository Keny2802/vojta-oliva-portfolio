import {
    Fragment
} from "react";
import clsx from "clsx";

import type DefaultProps from "../types/DefaultProps";
import Wrapper from "../components/Wrapper";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";
import UpAnimation from "../components/animations/UpAnimation";

const MyOffer = ({
    className,
    id
}: Pick<Partial<DefaultProps>, "className" | "id">) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "my-offer-section-component")}
            id={id ? id : "nabidka"}>
                <Relative className="min-h-screen">
                    <Img
                    fill
                    src="/assets/me-4.avif"
                    alt="Vojtěch Oliva při pohledu z Norských hor."
                    className="object-cover"
                    />
                    <Absolute className="bg-linear-to-tl from-black/50 to-black/40" />
                    <Absolute>
                        <Flex
                            type="flexCol"
                            className="h-full justify-center items-center text-center lg:gap-(--spacing-lg) text-(--white-color)">
                                <UpAnimation>
                                    <Flex
                                    type="flexCol">
                                        <Text
                                        type="sectionHeading"
                                        fontVariant="playFairDisplay"
                                        textSpanning="nebo o její modernizaci?"
                                        className="uppercase max-w-3xl text-center">
                                            Uvažujete o novém webu
                                        </Text>
                                        <Text>
                                            Zavolejte nebo napište mi, a domluvíme se i na Vašem projektu a jeho řešení.
                                        </Text>
                                        <Flex className="mt-xs p-sm md:p-md lg:p-lg w-full">
                                            {
                                                [
                                                    {
                                                        href: "tel:+420737007626",
                                                        text: "Zavolejte",
                                                        textSpanning: "i teď",
                                                    },
                                                    {
                                                        href: "#kontakt",
                                                        text: "Nový",
                                                        textSpanning: "projekt?",
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
                            </Flex>
                    </Absolute>
                </Relative>
            </Wrapper>
        </Fragment>
    );
};

export default MyOffer;