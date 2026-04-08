import {
    Fragment
} from "react";
import clsx from "clsx";

import Relative from "./Relative";
import Absolute from "./Absolute";

type Props = {
    className?: string;
    id?: string;
};

const Header = () => {
    return (
        <Fragment>
            <Relative>
                <Absolute>
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
                            return (
                                Header
                            );
                        })
                    }
                </Absolute>
            </Relative>
        </Fragment>
    );
};