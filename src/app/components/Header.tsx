import {
    Fragment
} from "react";
import clsx from "clsx";

import Relative from "./Relative";
import Absolute from "./Absolute";
import Flex from "./Flex";
import Lnk from "./Lnk";
import Text from "./Text";

type Props = {
    className?: string;
    id?: string;
};

const Header = () => {
    return (
        <Fragment>
            <Relative className="z-50">
                <Absolute className="p-(--spacing-xs) md:p-(--spacing-sm)">
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
                        className="p-(--spacing-xs) md:p-(--spacing-sm) lg:p-(--spacing-md) hidden md:flex justify-center items-center">
                            {
                                [
                                    {
                                        href: "#domu",
                                        text: "Domů",
                                    },
                                    {
                                        href: "#sluzby",
                                        text: "Služby",
                                    },
                                    {
                                        href: "#projekty",
                                        text: "Projekty",
                                    },
                                    // {
                                    //     href: "#reference",
                                    //     text: "Reference",
                                    // },
                                    {
                                        href: "#o-mne",
                                        text: "O mně",
                                    },
                                    {
                                        href: "#kontakt",
                                        text: "Kontakt",
                                    },
                            ].map((link, idx) => {
                                const {
                                    href,
                                    text
                                } = link;

                                return (
                                    <Fragment key={idx}>
                                        <Lnk
                                        href={href}>
                                            <Text
                                            type="boldText"
                                            className="uppercase text-white text-nowrap">
                                                {text}
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
                    </Flex>
                </Absolute>
            </Relative>
        </Fragment>
    );
};

export default Header;