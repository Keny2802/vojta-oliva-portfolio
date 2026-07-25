import type convertTextToURLSlugType from "@/app/types/convertTextToURLSlugType/convertTextToURLSlugType";

const convertTextToURLSlug = (slug: string) => {
    const formattedString = slug
    .replace(/\s/g, "-")
    .normalize("NFD")
    .replace("?", "")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

    return formattedString;
};

export default convertTextToURLSlug;