"use client";

import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";
import Link from "next/link";

import HashLess from "../functions/HashLess";

type Props = {
    href: string;
    className?: string;
    id?: string;
    onClick?: (_: any) => void;
    target?: "_self" | "_top" | "_parent" | "_blank";
    children: ReactNode;
};

const Lnk = ({
    href,
    className,
    id,
    target = "_self",
    onClick,
    children
}: Props) => {
    return (
        <Fragment>
            <Link
            className={clsx(className, "header-link-component")}
            id={id}
            {
                ...(
                    href.startsWith("#") ? ({
                        href: href,
                        onClick: (e) => HashLess(e, href)
                    }) : ({
                        href: href,
                        onClick: onClick
                    })
                )
            }
            {
                ...(
                    target ? ({
                        target: target
                    }) : ({
                        target: "_self"
                    })
                )
            }
            {
                ...(
                    onClick && ({
                        onClick: onClick
                    })
                )
            }>
                {children}
            </Link>
        </Fragment>
    );
};

export default Lnk;