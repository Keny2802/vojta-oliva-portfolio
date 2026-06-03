import { type FC, Fragment } from "react";
import { TbPhone, TbMail } from "react-icons/tb";

import type DefaultAttributes from "../types/DefaultAttributes";
import Section from "../components/Section";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Lnk from "../components/Lnk";

const Footer:FC<DefaultAttributes> = ({
    ...attrs
}) => {
    const YEAR = new Date().getFullYear();

    return (
        <Fragment>
            <Section {...attrs}>
                <Flex className="justify-evenly items-start">
                    <Flex type="flexCol">
                        <Text
                        type="cardHeading"
                        textSpanning="odkazy"
                        className="uppercase">
                            důležité
                        </Text>
                        {
                            [
                                { href: "#domu", title: "domů" },
                                { href: "#sluzby", title: "služby" },
                                { href: "#projekty", title: "projekty" },
                                { href: "#o-mne", title: "o mně" },
                                { href: "#kontakt", title: "kontakt" },
                            ].map((item, idx) => {
                                const { href, title } = item;
                                return (
                                    <Fragment key={idx}>
                                        <Lnk href={href}>
                                            <Text
                                            type="boldText"
                                            className="uppercase">
                                                {title}
                                            </Text>
                                        </Lnk>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                    <Flex type="flexCol">
                        <Text
                        type="cardHeading"
                        textSpanning="studie"
                        className="uppercase">
                            užitečné
                        </Text>
                        {
                            [
                                { href: "/pripadove-studie/malirstvi-profi-malby", title: "Malířství PROFI MALBY" },
                                { href: "/pripadove-studie/malirstvi-makrepa", title: "Malířství Makrepa" },
                                { href: "/pripadove-studie/repliky-oken", title: "Repliky Oken" },
                                { href: "/pripadove-studie/tax-and-trust", title: "Tax & Trust" },
                            ].map((item, idx) => {
                                const { href, title } = item;
                                return (
                                    <Fragment key={idx}>
                                        <Lnk href={href}>
                                            <Text
                                            type="boldText"
                                            className="uppercase">
                                                {title}
                                            </Text>
                                        </Lnk>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                    <Flex type="flexCol">
                        <Text
                        type="cardHeading"
                        textSpanning="dokumenty"
                        className="uppercase">
                            Důležité 
                        </Text>
                        {
                            [
                                { href: "/povinne-dokumenty/ochrana-osobnich-udaju", title: "Ochrana osobních údajů" },
                                { href: "/povinne-dokumenty/obchodni-podminky", title: "Obchodní podmínky" },
                                { href: "/povinne-dokumenty/nastaveni-cookies", title: "Nastavení cookies" },
                            ].map((item, idx) => {
                                const { href, title } = item;
                                return (
                                    <Fragment key={idx}>
                                        <Lnk href={href}>
                                            <Text
                                            type="boldText"
                                            className="uppercase">
                                                {title}
                                            </Text>
                                        </Lnk>
                                    </Fragment>
                                );
                            })
                        }
                    </Flex>
                </Flex>
                <Flex className="justify-center items-center text-center mt-(--spacing-sm) md:mt-(--spacing-md) lg:mt-(--spacing-lg)">
                    <Text>
                        &copy; Webový vývojář Vojtěch Oliva. 2025-{YEAR}. Všechna práva vyhrazena.
                    </Text>
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Footer;