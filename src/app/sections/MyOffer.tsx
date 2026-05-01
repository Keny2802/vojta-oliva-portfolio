import {
    Fragment
} from "react";
import clsx from "clsx";

import DefaultProps from "../types/DefaultProps";
import Wrapper from "../components/Wrapper";
import Relative from "../components/Relative";
import Img from "../components/Img";
import Absolute from "../components/Absolute";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";

const MyOffer = ({
    className,
    id
}: Pick<Partial<DefaultProps>, "className" | "id">) => {
    return (
        <Fragment>
            <Wrapper
            className={clsx(className, "my-offer-section-component")}
            id={id ? id : "my-offer-section-component"}>
                <Relative className="min-h-screen">
                    <Img
                    fill
                    src="/assets/me-4.avif"
                    alt="Vojtěch Oliva při pohledu z Norských hor."
                    className="object-cover"
                    />
                    <Absolute className="bg-black/40" />
                    <Absolute>
                        <Flex
                        type="flexCol"
                        className="p-6 md:p-8 lg:p-10 h-full justify-center md:justify-end items-center text-white">
                            <Flex
                            type="flexCol"
                            className="justify-center items-center text-center">
                                <Text
                                type="sectionHeading"
                                className="max-w-3xl text-center">
                                    Uvažujete o novém webu nebo o její modernizaci?
                                </Text>
                                <Text>
                                    Zavolejte mi nebo napište, i Váš projekt posuneme jinam.
                                </Text>
                            </Flex>
                            <Flex className="mt-2.5 md:mt-3 lg:mt-4 w-full">
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
            </Wrapper>
        </Fragment>
    );
};

export default MyOffer;