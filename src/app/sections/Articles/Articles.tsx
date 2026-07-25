import {
    type FC,
    Fragment,
} from "react";

import type DefaultType from "@/app/types/Default Type/DefaultType";
import Section from "@/app/components/Section";
import UpAnimation from "@/app/components/animations/UpAnimation";
import ArticlesArray from "@/app/Arrays/Articles/ArticlesArray";
import Flex from "@/app/components/Flex";
import Img from "@/app/components/Img";
import Text from "@/app/components/Text";
import Wrapper from "@/app/components/Wrapper";
import Lnk from "@/app/components/Lnk";

const Articles:FC<DefaultType> = ({
    ...attrs
}) => {
    return (
        <Fragment>
            <Section
            {...attrs}
            id="clanky">
                <UpAnimation>
                    <Flex type="flexCol">
                        <Text
                        type="boldText"
                        className="uppercase">
                            Články
                        </Text>
                        <Text
                        type="sectionHeading"
                        fontVariant="playFairDisplay"
                        textSpanning=" které vám mohou pomoct"
                        className="uppercase">
                            Užitečné články,
                        </Text>
                        <Flex className="justify-between items-center mt-sm md:mt-md lg:mt-lg">
                        {
                            ArticlesArray.map((item, idx) => {
                                const { src, alt, heading, subheadings, slug, } = item;
                                return (
                                    <Fragment key={idx}>
                                        <UpAnimation>
                                            <Wrapper className="group bg-white text-black p-sm md:p-md lg:p-lg rounded-4xl overflow-hidden relative md:max-w-large cursor-pointer">
                                                <Flex
                                                type="flexCol"
                                                className="gap-y-sm md:gap-y-6 transition-transform duration-300 ease-in-out md:group-hover:scale-95 lg:group-hover:scale-105">
                                                    {src && (
                                                        <Img
                                                        width={300}
                                                        height={300}
                                                        src={src}
                                                        alt={alt}
                                                        className="w-full rounded-2xl"
                                                        />
                                                    )}
                                                    <Text
                                                    type="cardHeading"
                                                    fontVariant="kanit"
                                                    className="uppercase">
                                                        {heading}
                                                    </Text>
                                                    {subheadings && Array.from(subheadings).map((subheading, idx) => {
                                                        return (
                                                            <Text
                                                            key={idx}
                                                            className="line-clamp-4">{subheading}</Text>
                                                        );
                                                    })}
                                                    <Lnk href={`/clanky/${slug}`}>
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
                                        </UpAnimation>
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

export default Articles;