"use client";

import {
    useState,
    Fragment,
} from "react";
import { MinusIcon, Bars3Icon } from "@heroicons/react/24/solid";

import HeaderArray from "../Arrays/Header/HeaderArray";
import Relative from "./Relative";
import Absolute from "./Absolute";
import Flex from "./Flex";
import Wrapper from "./Wrapper";
import Lnk from "./Lnk";
import Text from "./Text";
import MobileMenu from "./Mobile Menu/MobileMenu";

type Props = {
    className?: string;
    id?: string;
};

const Header = () => {
    const [isMobileMenuDisplay, setMobileMenuToDisplay] = useState<boolean>(false);

    return (
        <Fragment>
            <Relative className="z-10">
                <Absolute className="p-sm md:p-md">
                    <Flex
                    type="flexRowOnly"
                    className="justify-between md:justify-evenly items-center">
                        <Text
                        type="cardHeading"
                        fontVariant="greatVibes"
                        textSpanning="Oliva"
                        className="text-(--white-color)">
                            Vojta
                        </Text>
                        <Flex
                        type="flexRowOnly"
                        className="p-xs md:p-sm lg:p-md hidden md:flex justify-center items-center">
                            {
                                HeaderArray.map((link, idx) => {
                                const {
                                    href,
                                    title
                                } = link;

                                return (
                                    <Fragment key={idx}>
                                        <Lnk
                                        href={href}>
                                            <Text
                                            type="boldText"
                                            className="uppercase text-white text-nowrap">
                                                {title}
                                            </Text>
                                        </Lnk>
                                        <span className="text-white">
                                            |
                                        </span>
                                    </Fragment>
                                );
                            })
                            }
                        </Flex>
                        <Wrapper className="inline-block md:hidden">
                            {isMobileMenuDisplay ? (
                                <MinusIcon
                                onClick={() => setMobileMenuToDisplay(false)}
                                className="w-10 h-10 text-white cursor-pointer"
                                />
                            ) : (
                                <Bars3Icon
                                onClick={() => setMobileMenuToDisplay(true)}
                                className="w-10 h-10 text-white cursor-pointer"
                                />
                            )}
                        </Wrapper>
                    </Flex>
                </Absolute>
            </Relative>
            <MobileMenu
            isMobileMenuDisplay={isMobileMenuDisplay}
            setMobileMenuToDisplay={setMobileMenuToDisplay}
            />
        </Fragment>
    );
};

export default Header;