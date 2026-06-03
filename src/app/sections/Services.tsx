import { Fragment } from "react";
import { TbWorldWww, TbBuildingStore, TbShoppingBag } from "react-icons/tb";

import Wrapper from "../components/Wrapper";
import Section from "../components/Section";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Lnk from "../components/Lnk";

const Services = () => {
    return (
        <Fragment>
            <Section id="sluzby">
                <Flex type="flexCol">
                    <Text
                    type="boldText"
                    className="uppercase">
                        Služby
                    </Text>
                    <Text
                    type="sectionHeading"
                    fontVariant="playFairDisplay"
                    textSpanning="webové služby"
                    className="uppercase">
                        Komplexní
                    </Text>
                    <Text>
                        Ať jste řemeslník, jednotlivec nebo firma, já se o Váš projekt postarám jako o svůj.
                    </Text>
                </Flex>
                <Flex className="justify-between items-center mt-(--spacing-sm) md:mt-(--spacing-md) lg:mt-(--spacing-lg)">
                    {
                        [
                            { price: "6.000 - 8.000 Kč", title: "Malý projekt", description: "Jednostránkový web s libovolným počtem sekcí, základní funkcionalita, základní SEO optimalizace." },
                            { price: "10.000 - 12.000 Kč", title: "Firemní web", description: "Firemní webová prezentace šitá na míru, libovolný počet sekcí, libovolný počet podstránek, další přání budou zahrnuty v ceně." },
                            { price: "12.000 - 18.000 Kč", title: "E-SHOP", description: "Komplexní webová aplikace, vlastní redakční systém, administrační panel, uživatelské účty, omezený počet produktů." },
                        ].map((item, idx) => {
                            const { title, price, description } = item;
                            return (
                                <Fragment key={idx}>
                                    <Wrapper className="group bg-(--white-color) text-(--black-color) p-(--spacing-sm) md:p-(--spacing-md) lg:p-(--spacing-lg) rounded-4xl">
                                        <Flex type="flexCol">
                                            { title === "Malý projekt" && <TbWorldWww className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-(--orange-color)" /> }
                                            { title === "Firemní web" && <TbBuildingStore className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-(--orange-color)" /> }
                                            { title === "E-SHOP" && <TbShoppingBag className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-(--orange-color)" /> }
                                            <Text
                                            type="boldText"
                                            fontVariant="kanit"
                                            className="uppercase">
                                                {title}
                                            </Text>
                                            <Text
                                            type="cardHeading"
                                            className="whitespace-nowrap">
                                                {price}
                                            </Text>
                                            <Wrapper className="border-t border-(--gray-color-1)" />
                                            <Text>
                                                {description}
                                            </Text>
                                            {/* <Wrapper className="border-t border-(--gray-color-1)" /> */}
                                            <Lnk href="#kontakt"
                                            >
                                                <Text
                                                type="boldText"
                                                fontVariant="baloo"
                                                textSpanning="více"
                                                className="text-(--black-color-2) uppercase">
                                                    Zjistit
                                                </Text>
                                            </Lnk>
                                        </Flex>
                                    </Wrapper>
                                </Fragment>
                            );
                        })
                    }
                </Flex>
                <Flex className="justify-center items-center text-center mt-(--spacing-sm) md:mt-(--spacing-md) lg:mt-(--spacing-lg)">
                    <Text>
                        Ceny jsou pouze orientační, přesnou cenu vždy určím, po bezplatné detailní konzultaci.
                    </Text>
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Services;