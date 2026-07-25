"use client";

import {
    type FC,
    Fragment,
} from "react";
import { usePathname } from "next/navigation";

import DefaultType from "@/app/types/Default Type/DefaultType";
import ArticlesArray from "@/app/Arrays/Articles/ArticlesArray";
import Wrapper from "@/app/components/Wrapper";
import Section from "@/app/components/Section";
import Flex from "@/app/components/Flex";
import Text from "@/app/components/Text";
import UpAnimation from "@/app/components/animations/UpAnimation";
import Img from "@/app/components/Img";
import List from "@/app/components/List";
import ListItem from "@/app/components/ListItem/ListItem";
import Header from "@/app/components/Header";
import Projects from "@/app/sections/Projects";
import Services from "@/app/sections/Services";
import AboutMe from "@/app/sections/AboutMe";
import MyOffer from "@/app/sections/MyOffer";
import Contact from "@/app/sections/Contact";
import Footer from "@/app/sections/Footer";

const BASE_FOLDER = "/clanky"

const Content:FC<DefaultType> = () => {
    const pathname = usePathname();

    const currentPage = ArticlesArray.find((page) => {
        const pageSlug = page.slug;

        return pathname === `${BASE_FOLDER}/${pageSlug}`;
    });

    return (
        <Fragment>
            <Wrapper>
                <Header />
                <Section>
                    <Flex
                    type="flexCol"
                    className="pt-2xl">
                        <Flex>
                            <Flex
                            type="flexCol"
                            className="justify-start max-w-4xl">
                                <Text type="heroHeading">{currentPage?.heading}</Text>
                                <Flex type="flexCol">
                                    {currentPage?.subheadings && Array.from(currentPage?.subheadings).map((subheading, i) => {
                                        return (
                                            <UpAnimation key={i}>
                                                <Text>{subheading}</Text>
                                            </UpAnimation>
                                        );
                                    })}
                                </Flex>
                            </Flex>
                            {currentPage?.src && (
                                <UpAnimation>
                                    <Img
                                    width={800}
                                    height={800}
                                    src={currentPage?.src}
                                    alt={currentPage?.alt}
                                    className="w-full rounded-2xl"
                                    />
                                </UpAnimation>
                            )}
                        </Flex>
                        <Flex type="flexCol">
                            {currentPage?.content.map((item, j) => {
                                const { title, subTitle, points } = item;

                                return (
                                    <Fragment key={j}>
                                        <Flex type="flexCol">
                                            <UpAnimation>
                                                <Text type="cardHeading">{j + 1}. {title}</Text>
                                            </UpAnimation>
                                            <UpAnimation><Text>{subTitle}</Text></UpAnimation>
                                            {points && (
                                                <List className="ml-md md:ml-lg lg:ml-xl">
                                                    {points && points.map((point: any, k: number) => {
                                                        return (
                                                            <UpAnimation key={k}>
                                                                <ListItem className="list-disc">{point}</ListItem>
                                                            </UpAnimation>
                                                        );
                                                    })}
                                                </List>
                                            )}
                                        </Flex>
                                    </Fragment>
                                );
                            })}
                        </Flex>
                    </Flex>
                </Section>
                <Projects />
                <Services />
                <AboutMe />
                <MyOffer />
                <Contact />
                <Footer />
            </Wrapper>
        </Fragment>
    );
};

export default Content;