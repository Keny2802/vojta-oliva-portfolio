import {
  ReactNode,
  Fragment
} from "react";
import clsx from "clsx";

interface props {
    type?: "heroHeading" | "cardHeading" | "sectionHeading" | "boldText" | "bodyText";
    className?: string;
    children: ReactNode;
};

const Text = ({ type="bodyText", className, children } : props) => {
  const textVariants = {
      heroHeading: "text-4xl/10 md:text-5xl/14 lg:text-6xl font-black hero-heading-component",
      sectionHeading: "text-3xl md:text-4xl lg:text-5xl font-extrabold section-heading-component",
      cardHeading: "text-2xl md:text-3xl font-bold card-heading-component",
      boldText: "text-xl font-semibold",
      bodyText: "text-base md:text-[16.5px] lg:text-[16.75px] md:max-w-3xl body-text-component"
  };

  if ( type === "heroHeading" ) {
    return (
        <h1 className={clsx(className, `${textVariants[type]}`)}>
            {children}
        </h1>
    );
  } else if ( type === "sectionHeading" ) {
    return (
        <h2 className={clsx(className, `${textVariants[type]}`)}>
            {children}
        </h2>
    );
  } else if ( type === "cardHeading" ) {
    return (
        <h3 className={clsx(className, `${textVariants[type]}`)}>
            {children}
        </h3>
    );
  } else if ( type === "boldText" ) {
    return (
        <p className={clsx(className, `${textVariants[type]}`)}>
            {children}
        </p>
    );
  } else if ( type === "bodyText" ) {
    return (
        <p className={clsx(className, `${textVariants[type]}`)}>
            {children}
        </p>
    );
  };
};

export default Text;