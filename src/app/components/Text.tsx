import
  React, {
  ReactNode,
  RefObject,
} from "react";
import clsx from "clsx";

interface props {
    ref?: React.RefObject<HTMLHeadingElement | HTMLParagraphElement | null>;
    type?: "heroHeading" | "cardHeading" | "sectionHeading" | "boldText" | "bodyText" | "smallBodyText";
    fontVariant?: "inter" | "playFairDisplay" | "kanit" | "baloo" | "greatVibes",
    textSpanning?: string;
    className?: string;
    children: ReactNode;
};

// type FontVariant = "inter" | "playFairDisplay" | "kanit" | "baloo";

type Font = {
    inter?: object;
    playFairDisplay?: object;
    kanit?: object;
    baloo?: object;
    greatVibes?: object;
    // inter?: string;
    // playFairDisplay?: string;
    // kanit?: string;
    // baloo?: string;
};

const Text = ({
    ref,
    type = "bodyText",
    fontVariant = "inter",
    textSpanning,
    className,
    children
} : props) => {
  const textVariants = {
      heroHeading: "text-4xl/10 md:text-5xl/14 lg:text-6xl font-black hero-heading-component",
      sectionHeading: "text-3xl md:text-4xl lg:text-5xl font-extrabold section-heading-component",
      cardHeading: "text-2xl md:text-3xl font-bold card-heading-component",
      boldText: "text-xl font-semibold",
      bodyText: "text-base md:text-[16.5px] lg:text-[16.75px] md:max-w-3xl body-text-component",
      smallBodyText: "text-sm md:text-[15px] small-body-text-component",
  };

  const fonts:Font = {
    inter: {
        fontFamily: "var(--font-inter)",
    },
    playFairDisplay: {
        fontFamily: "var(--font-playfair-display)",
    },
    kanit: {
        fontFamily: "var(--font-kanit)",
    },
    baloo: {
        fontFamily: "var(--font-baloo)",
    },
    greatVibes: {
        fontFamily: "var(--font-great-vibes)",
    },
  };

  if ( type === "heroHeading" ) {
    return (
        <h1
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            {/* font-normal font-light */}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </h1>
    );
  } else if ( type === "sectionHeading" ) {
    return (
        <h2
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </h2>
    );
  } else if ( type === "cardHeading" ) {
    return (
        <h3
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </h3>
    );
  } else if ( type === "boldText" ) {
    return (
        <p
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </p>
    );
  } else if ( type === "bodyText" ) {
    return (
        <p
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </p>
    );
  } else if ( type === "smallBodyText" ) {
    return (
        <p
        { ...( ref && { ref: ref } ) }
        className={clsx(className, `${textVariants[type]}`)}
        style={fonts[fontVariant]}>
            {children}
            {" "}
            { textSpanning && ( <span className="font-light">{textSpanning}</span> ) }
        </p>
    );
  };
};

export default Text;