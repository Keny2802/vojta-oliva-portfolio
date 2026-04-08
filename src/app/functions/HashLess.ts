const HashLess = (evt: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    evt.preventDefault();

    const currentTarget = evt.currentTarget;
    const targetElement = currentTarget.getAttribute("href")?.substring(1);
    const targetLink = document.getElementById(targetElement || "");

    if (targetLink) {
        targetLink.scrollIntoView({
            behavior: "smooth"
        });
    };
};

export default HashLess;