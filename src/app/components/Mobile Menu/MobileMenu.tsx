import { type FC, Fragment } from "react";
import clsx from "clsx";

import type MobileMenuType from "@/app/types/MobileMenu/MobileMenuType";
import Wrapper from "../Wrapper";
import Flex from "../Flex";
import Text from "../Text";
import List from "../List";
import HeaderArray from "@/app/Arrays/Header/HeaderArray";
import ListItem from "../ListItem/ListItem";
import Lnk from "../Lnk";

const DYNAMIC_YEAR = new Date().getFullYear();

const MobileMenu:FC<MobileMenuType> = ({
    isMobileMenuDisplay,
    setMobileMenuToDisplay,
    ...attrs
}) => {
    return (
        <Fragment>
            <Wrapper className={clsx(
                attrs.className,
                isMobileMenuDisplay ? "translate-x-0 md:-translate-x-full" : "-translate-x-full",
                "mobile-menu-component w-72 h-screen z-50 fixed top-0 bg-primary text-white dark:text-white transition-transform duration-300 ease-in-out",
            )}>
                <Flex
                type="flexCol"
                className="h-full justify-evenly p-sm md:p-md lg:p-lg">
                    <Text
                    type="cardHeading"
                    fontVariant="greatVibes"
                    textSpanning="Oliva"
                    className="text-(--white-color)">
                        Vojta
                    </Text>
                    <List>
                        <Flex
                        type="flexCol"
                        className="text-white">
                            {HeaderArray.map((item, idx) => {
                                const { href, title } = item;

                                return (
                                    <Fragment key={idx}>
                                        <ListItem className="p-sm md:p-md border-b border-white/25">
                                            <Lnk
                                            href={href}
                                            onClick={() => setMobileMenuToDisplay(false)}>
                                                <Text
                                                type="cardHeading"
                                                className="uppercase">
                                                    {title}
                                                </Text>
                                            </Lnk>
                                        </ListItem>
                                    </Fragment>
                                );
                            })}
                        </Flex>
                    </List>
                    <Text className="text-center">
                        &copy; Vojta Oliva webový vývojář z Prahy. 2025-{DYNAMIC_YEAR}. Všechna práva vyhrazena.
                    </Text>
                </Flex>
            </Wrapper>
        </Fragment>
    );
};

export default MobileMenu;