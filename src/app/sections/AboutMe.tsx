"use client";

import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import Cta from "../components/Cta";
import Img from "../components/Img";
import HighlightText from "../components/HighlightText";
import UpAnimation from "../components/animations/UpAnimation";

const AboutMe = () => {
    return (
        <Fragment>
            <Wrapper className="mt-(--spacing-xs) md:mt-(--spacing-sm) lg:mt-(--spacing-md) p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) shadow-lg"
            id="o-mne">
                <UpAnimation>
                    <Flex
                    type="flexRowReverseCombo"
                    className="justify-between">
                        <Flex type="flexCol"
                        className="md:gap-(--spacing-md)">
                            {/* <Text type="boldText">
                                Webový Vývojář - Vojtěch Oliva | www.vojtaoliva.cz
                            </Text>
                            <Seperator /> */}
                            {/* <Text
                            type="sectionHeading"
                            fontVariant="playFairDisplay"
                            textSpanning="a co dělám?"
                            className="uppercase">
                                Kdo co jsem
                            </Text> */}
                            <HighlightText
                            type="sectionHeading"
                            fontVariant="playFairDisplay"
                            textSpanning="a co dělám"
                            text="Kdo jsem"
                            className="uppercase"
                            />
                            <Flex
                            type="flexCol"
                            className="md:-mt-(--spacing-xs) ">
                                {
                                    [
                                        // "Jsem člověk, který mluví s klienty mile a snaží se jim porozumět a hlavně mluvím s nimi lidským jazykem.",
                                        // "Jsem webový vývojář z Prahy, se kterým se dohodnete na čemkoliv, nejvíce mi záleží, aby se klient ve spolupráci se mnou cítil komfortně.",
                                        "Jsem nadšený webový vývojař z Prahy, který má rád tvoření webových prezentací a komplexnějších webových aplikací jako jsou E-shopy.",
                                        "Co mě, ale nejvíce baví začít nový projekt s klientem a dokončit jej do úplného konce.",
                                        "Když nepracuji, tak nejraději cestuji kdekoliv po Evropě."
                                    ].map((text, idx) => {
                                        return (
                                            // <HighlightText
                                            // key={idx}
                                            // text={text}
                                            // />
                                            <UpAnimation key={idx}>
                                                <Text>{text}</Text>
                                            </UpAnimation>
                                        );
                                    })
                                }
                            </Flex>
                            <Flex type="flexCol">
                                <Seperator />
                                <Text type="boldText">
                                    Pojďme vytvořit něco vyjímečného.
                                </Text>
                            </Flex>
                            <Cta href="#kontakt">
                                <Text
                                type="cardHeading"
                                fontVariant="kanit"
                                textSpanning="nabídku"
                                className="uppercase">
                                    Získat cenovou
                                </Text>
                            </Cta>
                        </Flex>
                        <Flex type="flexCol">
                            <Img
                            width={500}
                            height={500}
                            src="/assets/me-1.avif"
                            alt="Vojtěch Oliva webový vývojář v autě - SELFIE"
                            className="max-h-[350px] md:max-w-[500px] md:max-h-[500px] object-cover rounded-2xl"
                            />
                            <Text className="md:max-w-[450px]">
                                „Spokojený klient = spokojený vývojář“ - Vojtěch Oliva | www.vojtaoliva.cz
                            </Text>
                        </Flex>
                    </Flex>
                </UpAnimation>
            </Wrapper>
        </Fragment>
    );
};

export default AboutMe;