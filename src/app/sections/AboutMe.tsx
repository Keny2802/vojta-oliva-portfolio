import {
    Fragment
} from "react";

import Wrapper from "../components/Wrapper";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Seperator from "../components/Seperator";
import Cta from "../components/Cta";
import Img from "../components/Img";

const AboutMe = () => {
    return (
        <Fragment>
            <Wrapper className="p-4 md:p-6 lg:p-8 bg-white shadow-lg">
                <Flex
                type="flexRowReverseCombo"
                className="justify-between">
                    <Flex type="flexCol">
                        <Text type="boldText">
                            Webový Vývojář - Vojtěch Oliva | www.vojtaoliva.cz
                        </Text>
                        <Seperator />
                        <Text type="sectionHeading">
                            Kdo co jsem a co dělám?
                        </Text>
                        <Flex
                        type="flexCol"
                        className="mt-2.5 md:mt-3 lg:mt-4">
                            {
                                [
                                    "Jsem člověk, který mluví s klienty mile a snaží se jim porozumět a hlavně mluvím s nimi lidským jazykem.",
                                    "Jsem webový vývojář z Prahy, se kterým se dohodnete na čemkoliv, nejvíce mi záleží, aby se klient ve spolupráci se mnou cítil komfortně.",
                                ].map((text, idx) => {
                                    return (
                                        <Text key={idx}>
                                            {text}
                                        </Text>
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
                            Získat cenovou nabídku
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
            </Wrapper>
        </Fragment>
    );
};

export default AboutMe;