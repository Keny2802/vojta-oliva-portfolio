import { type FC, Fragment } from "react";
import { TbPhone, TbMail } from "react-icons/tb";

import type DefaultAttributes from "../types/DefaultAttributes";
import Section from "../components/Section";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Cta from "../components/Cta";
import Wrapper from "../components/Wrapper";
import UpAnimation from "../components/animations/UpAnimation";

const Contact: FC<DefaultAttributes> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
                {...attrs}
                sectionBackground="secondary"
                id="kontakt">
                <UpAnimation>
                    <Flex
                    type="flexCol"
                    className="justify-center items-center text-center">
                    <Text
                        type="boldText"
                        className="uppercase">
                        Kontakt
                    </Text>
                    <Text
                        type="sectionHeading"
                        fontVariant="playFairDisplay"
                        textSpanning="s mnou"
                        className="uppercase">
                        Spojte se
                    </Text>
                    <Text className="text-balance">
                        Zavolejte nebo napište mi - připravím pro Vás nezávaznou kalkulaci Vašeho projektu. Odpovídám do pár minut / hodin.
                    </Text>
                    <Flex className="w-full md:max-w-3/4">
                        {
                            [
                                {
                                    href: "tel:+420737007626",
                                    title: "+420 737 007 626",
                                },
                                {
                                    href: "mailto:info@vojtaoliva.cz",
                                    title: "info@vojtaoliva.cz",
                                },
                            ].map((link, idx) => {
                                const {
                                    href,
                                    title,
                                } = link;

                                return (
                                    <Cta
                                        key={idx}
                                        variant={idx === 0 ? "secondary" : "primary"}
                                        href={href}
                                        className={idx === 0 ? "border w-full rounded-full" : "w-full rounded-full"}>
                                        <Flex
                                            type="flexRowOnly"
                                            className="justify-center md:justify-evenly items-center">
                                            {href === "tel:+420737007626" && <TbPhone className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
                                            {href === "mailto:info@vojtaoliva.cz" && <TbMail className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />}
                                            <Text
                                                type="cardHeading"
                                                fontVariant="kanit"
                                                className="uppercase">
                                                {title}
                                            </Text>
                                        </Flex>
                                    </Cta>
                                );
                            })
                        }
                    </Flex>
                    <Flex className="kmd:justify-evenly mt-(--spacing-sm) md:mt-(--spacing-md) lg:mt-(--spacing-lg)">
                        {
                            [
                                { key: "IČO", value: "21079820", },
                                { key: "Adresa", value: "Freyova 236/5, 190 00, Praha 9 - Vysočany", },
                                { key: "Provozní doba", value: "Každý den: 08:00 - 20:00", },
                            ].map((item, idx) => {
                                const { key, value } = item;

                                return (
                                    <Fragment key={idx}>
                                        <Flex
                                        type="flexCol"
                                        className="md:justify-start md:items-start md:gap-(--spacing-mini) md:text-start">
                                            <Text
                                            type="cardHeading"
                                            className="uppercase">
                                                {key}
                                            </Text>
                                            <Text>
                                                {value}
                                            </Text>
                                        </Flex>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </Flex>
                </UpAnimation>
            </Section>
        </Fragment>
    );
};

export default Contact;