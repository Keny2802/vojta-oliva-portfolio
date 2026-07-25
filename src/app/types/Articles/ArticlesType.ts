type ArticlesType = {
    slug: string;
    src?: string;
    alt?: string;
    heading: string;
    subheadings?: string | string[];
    content: any[];
    points?: string[];
};

export default ArticlesType;