"use client";

import { type FC, type AllHTMLAttributes, useState, Fragment, type TouchEvent } from "react";
import { CgProfile } from "react-icons/cg";
import { TbChevronLeft } from "react-icons/tb";
import { type HTMLMotionProps, motion } from "motion/react";
import clsx from "clsx";

import type DefaultAttributes from "../types/DefaultAttributes";
import Section from "../components/Section";
import UpAnimation from "../components/animations/UpAnimation";
import Flex from "../components/Flex";
import Text from "../components/Text";
import Wrapper from "../components/Wrapper";

type CardProps = AllHTMLAttributes<HTMLDivElement | null> & {
    variant?: "primary" | "secondary" | "third" | "fourth";
    children: React.ReactNode;
};

type CardVariantOptions = {
    primary: string;
    secondary: string;
    third: string;
    fourth: string;
};

type CardVariants = keyof CardVariantOptions;
type AllowedUnitsOptions = "px" | "%" | "vh" | "vw";
type AllowedUnits = `${number}${AllowedUnitsOptions}`;

type SliderProps = HTMLMotionProps<"button"> & {
    children?: React.ReactNode;
};

type ReferenceType = {
    author: string;
    subheading: string;
    description: string;
}

const references:ReferenceType[] = [
    { author: "Petr Lejska", subheading: "Malířství Profi Malby - www.profimalby.cz", description: `Spolupráce s panem Olivou probíhala velmi profesionálně, komunikace byla věcná a efektivní. Vždy ochotně reagoval na mé připomínky a veškeré požadavky byly zohledněny a zapracovány v dohodnutých termínech. Oceňuji vstřícný přístup a rychlou komunikaci. Výsledný web je moderní, přehledný a funguje bez problémů i na mobilních zařízeních. Služby pana Olivy můžu s klidným svědomím doporučit. Petr Lejska PROFI MALBY` },
    { author: "Josef Krejčiřík", subheading: "Malířství Makrepa - www.malirstvi-ostrava.cz", description: `Mé zadání bylo vytvořit nové moderní stránky se zaměřením na malířské práce. Oslovil jsem tudíž  pana Olivu a domluvili se na spolupráci. Hodnotím velmi ochotné a příjemné jednání na profesionální úrovni. Vyhověl mi co jsem požadoval, návrhy a změny a ještě mi poradil. Nové webové stránky jsou pěkné a nápadité. Dobrá komunikace a bylo hotovo v domluveném termínu a za příznivou cenu. Ještě jednou chci poděkovat  panu Olivovi a přeji mnoho spokojených zákazníků.` },
    { author: "Zdeněk Ludvar", subheading: "Elektrikář Zdeněk Ludvar - www.ludvar.cz", description: `Rád bych touto cestou poděkoval za spolupráci a ostatním mohu pana Vojtu jen doporučit. Vše proběhlo v pohodě, rychle a i celková cena byla příjemná, předem domluvená, tedy spolupráce, jak má být. Děkuji a doporučuji.` },
    { author: "Marek Svoboda", subheading: "Saxon DVB - www.saxondvb.cz", description: `Ze spolupráce s Vojtou Olivou mám velice dobrý pocit. Jak z výsledku, tak i z průběhu vývoje webových stránek. Vojta byl vstřícný, rychlý, jednoduše operativní po všech stránkách. Kdo chce profesionální webové stránky za rozumnou a férovou cenu, Vojta Oliva je vaše správná volba. Přes svůj mladý věk je neobyčejně schopný a zkušený profík.  Vojto, děkuji vám:)`, },
    // { author: "Josef Krejčiřík", subheading: "Malířství Makrepa - www.malirstvi-ostrava.cz", description: `Mé zadání bylo vytvořit nové moderní stránky se zaměřením na malířské práce. Oslovil jsem tudíž  pana Olivu a domluvili se na spolupráci. Hodnotím velmi ochotné a příjemné jednání na profesionální úrovni. Vyhověl mi co jsem požadoval, návrhy a změny a ještě mi poradil. Nové webové stránky jsou pěkné a nápadité. Dobrá komunikace a bylo hotovo v domluveném termínu a za příznivou cenu. Ještě jednou chci poděkovat  panu Olivovi a přeji mnoho spokojených zákazníků.` },
];

const References:FC<DefaultAttributes> = ({
    ...attrs
}) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [touchPosition, setTouchPosition] = useState<number | null>(null);

    const currentReferenceIndex = references.findIndex((_, idx) => {
        return currentIndex === idx;
    });

    const touchStart = (e: TouchEvent<HTMLDivElement | null>) => {
        const touchDown = e.touches[0].clientX;

        setTouchPosition(touchDown);
    };

    const touchMove = (e: TouchEvent<HTMLDivElement | null>) => {
        if (touchPosition === null) return;

        const currentPosition = e.touches[0].clientX;
        const direction = currentPosition - touchPosition;

        if (direction < -10) setCurrentIndex(prev => prev === 0 ? references.length - 1 : prev - 1);
        if (direction > 10) setCurrentIndex(prev => prev === references.length - 1 ? 0 : prev + 1);

        setTouchPosition(null);
    };

    return (
        <Fragment>
            <Section
            {...attrs}
            id="reference">
                <UpAnimation>
                    <Flex type="flexCol">
                        <Text
                        type="boldText"
                        className="uppercase">
                            reference
                        </Text>
                        <Text
                        type="sectionHeading"
                        textSpanning="napsal referenci."
                        fontVariant="playFairDisplay"
                        className="uppercase">
                            Kdo mi
                        </Text>
                    </Flex>
                    <Flex
                    type="flexRowOnly"
                    className="justify-end items-center mt-xs md:mt-sm lg:mt-lg">
                        <Slider onClick={() => setCurrentIndex(prev => prev === 0 ? references.length - 1 : prev - 1)} />
                        <Slider
                        onClick={() => setCurrentIndex(prev => prev === references.length - 1 ? 0 : prev + 1)}
                        className="rotate-180" />
                    </Flex>
                    <Wrapper
                    onTouchStart={touchStart}
                    onTouchMove={touchMove}
                    className="w-full overflow-hidden">
                        <Flex
                        type="flexRowOnly"
                        className="mt-xs md:mt-sm lg:mt-lg transition-transform ease-in-out duration-300"
                        style={{
                            transform: `translateX(-${currentReferenceIndex * 100}%)`
                        }}>
                            {references.map((item, idx) => {
                                const { author, subheading, description } = item;

                                return (
                                    <Fragment key={idx}>
                                        <Card>
                                            <Flex type="flexCol">
                                                <Flex
                                                type="flexRowOnly"
                                                className="items-start">
                                                    <CgProfile className="w-md md:w-md lg:w-lg h-md md:h-md lg:h-lg text-primary" />
                                                    <Wrapper className="flex flex-col gap-mini md:gap-xs">
                                                        <Text
                                                        type="cardHeading"
                                                        className="uppercase">{author}</Text>
                                                        <Text className="opacity-50">{subheading}</Text>
                                                    </Wrapper>
                                                </Flex>
                                                <Text className="w-full md:min-w-2-extra-large p-sm">{description}</Text>
                                            </Flex>
                                        </Card>
                                    </Fragment>
                                );
                            })}
                        </Flex>
                    </Wrapper>
                </UpAnimation>
            </Section>
        </Fragment>
    );
};

const Card:FC<CardProps> = ({
    className,
    variant = "secondary",
    children,
    ...attrs
}) => {
    const variants:CardVariantOptions = {
        primary: "bg-primary text-secondary",
        secondary: "bg-secondary text-third",
        third: "bg-third text-secondary",
        fourth: "bg-fourth text-secondary",
    };

    return (
        <Fragment>
            <Wrapper
            // md:min-w-medium lg:min-w-large h-medium md:h-small md:min-h-secondary-medium md:max-h-medium
            className={clsx(variants[variant], "p-sm md:p-md lg:p-lg min-w-full min-h-small md:h-extra-small md:min-h-small rounded-3xl references-section-component")}>
                {children}
            </Wrapper>
        </Fragment>
    );
};

const Slider:FC<SliderProps> = ({
    className,
    ...attrs
}) => {
    return (
        <Fragment>
            <motion.button
            {...attrs}
            type="button"
            whileFocus={{
                background: "#000",
                scale: 1.25,
            }}
            whileHover={{
                background: "#000",
                scale: 1.25,
            }}
            transition={{
                duration: 0.3,
                ease: "easeInOut"
            }}
            className="bg-secondary rounded-full cursor-pointer">
                <TbChevronLeft className={clsx(className, "w-lg h-lg text-primary")} />
            </motion.button>
        </Fragment>
    );
};

export default References;