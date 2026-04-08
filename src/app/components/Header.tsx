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
            <Flex
            type="flexRowOnly"
            className="justify-center items-center">
                <Relative className="z-50">
                    <Absolute>
                        <Flex
                        type="flexRowOnly"
                        className="p-2 md:p-2.5 hidden md:flex lg:p-4 justify-center items-center">
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
                                    {
                                        href: "#reference",
                                        text: "Reference",
                                    },
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
                    </Absolute>
                </Relative>
            </Flex>
        </Fragment>
    );
};

export default Header;