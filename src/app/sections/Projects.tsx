import { type FC, Fragment } from "react";

import type DefaultAttributes from "../types/DefaultAttributes";
import Section from "../components/Section";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";
import Img from "../components/Img";
import Lnk from "../components/Lnk";
import UpAnimation from "../components/animations/UpAnimation";

const Projects:FC<DefaultAttributes> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
            {...attrs}
            sectionBackground="secondary"
            id="projekty">
                <UpAnimation>
                    <Flex type="flexCol">
                        <Text
                        type="boldText"
                        className="uppercase">
                            Projekty
                        </Text>
                        <Text
                        type="sectionHeading"
                        fontVariant="playFairDisplay"
                        textSpanning="webových projektů"
                        className="uppercase">
                            ukázky
                        </Text>
                        <Text>
                            Výběr mých několika, již realizovaných klientských projektů.
                        </Text>
                    </Flex>
                </UpAnimation>
                <Flex className="justify-evenly items-center flex-wrap text-center mt-(--spacing-sm) md:mt-(--spacing-md) lg:mt-(--spacing-lg)">
                    {
                        [
                            { title: "Malířství profi malby", description: "Webová prezentace pro malířství PROFI MALBY Petra Lejsky, u tohoto projektu jsme se primárně zaměřily na prezentaci malířských služeb.", src: "/assets/projects/01.avif", href: "https://www.profimalby.cz" },
                            { title: "Malířství makrepa", description: "Komplexnější webová stránka, prenzentující malířské služby malířství Makrepa pana Josefa Krejčiríka.", src: "/assets/projects/02.avif", href: "https://www.malirstvi-ostrava.cz" },
                            { title: "Repliky Oken", description: "Větší webová stránka, prezentující firmu Repliky Oken, která vyrábí a repliky historických oken do starých historických vil.", src: "/assets/projects/05.avif", href: "https://www.replikyoken.cz" },
                            { title: "Tax & Trust", description: "Jednoduchý jednostránkový web pro účetní společnost Tax & Trust. U tohoto projektu, jsem se zaměřil na jednoduchost a primárně hezké vystihující obrázky, které vystihly danou službu či sekci.", src: "/assets/projects/06.avif", href: "https://www.taxandtrust.cz" },
                        ].map((item, idx) => {
                            const { title, description, src, href } = item;
                            return (
                                <Fragment key={idx}>
                                    <UpAnimation>
                                        <Lnk
                                        href={href}
                                        target="_blank">
                                            <Wrapper className="bg-(--orange-color) text-(--white-color) p-(--spacing-sm) md:p-(--spacing-md) rounded-4xl">
                                                <Wrapper>
                                                    <Flex
                                                    type="flexCol"
                                                    className="justify-start items-start text-start md:w-[450px]">
                                                        <Img
                                                        width={500}
                                                        height={500}
                                                        src={src}
                                                        alt={title}
                                                        className="max-w-full rounded-md"
                                                        />
                                                        <Text
                                                        type="cardHeading"
                                                        fontVariant="kanit"
                                                        className="uppercase max-w-[450px]">
                                                            {title}
                                                        </Text>
                                                        <Text className="max-w-[450px]">
                                                            {description}
                                                        </Text>
                                                        <Text type="boldText">
                                                            Podívat se na ukázku <span className="text-(--black-color)">{title}</span>
                                                        </Text>
                                                        {/* <Flex type="flexRowOnly">
                                                            <Lnk href="#sluzby">
                                                                <Text
                                                                type="boldText"
                                                                fontVariant="baloo"
                                                                textSpanning="Vaše služby"
                                                                className="text-(--white-color) uppercase">
                                                                    Zajímá jí mě
                                                                </Text>
                                                            </Lnk>
                                                            <Lnk href="#kontakt">
                                                                <Text
                                                                type="boldText"
                                                                fontVariant="baloo"
                                                                textSpanning="mně"
                                                                className="text-(--black-color-2) uppercase">
                                                                    Kontaktujte
                                                                </Text>
                                                            </Lnk>
                                                        </Flex> */}
                                                    </Flex>
                                                </Wrapper>
                                            </Wrapper>
                                        </Lnk>
                                    </UpAnimation>
                                </Fragment>
                            );
                        })
                    }
                </Flex>
            </Section>
        </Fragment>
    );
};

export default Projects;