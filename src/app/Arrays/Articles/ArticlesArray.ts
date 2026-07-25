import type ArticlesType from "@/app/types/Articles/ArticlesType";
import convertTextToURLSlug from "@/app/functions/convertTextToURLSlug/convertTextToURLSlug";

const ArticlesArray:ArticlesType[] = [
    {
        slug: convertTextToURLSlug("Proč se vyplatí modernizace Vašeho webu v roce 2026?"),
        src: "/assets/clanky/proc-se-vyplati-modernizace-webu-v-roce-2026.jfif",
        alt: "Proč se vyplatí modernizace Vašeho webu v roce 2026 - Vojtěch Oliva",
        heading: "Proč se vyplatí modernizace Vašeho webu v roce 2026?",
        subheadings: [
            "Jste řemeslník, malá či střední firma, ale Váš web byl vytvořen v letech 2000 - 2015 a už neměl žádnou úpravu? Tak jste na správném místě.",
            "Moderní webová prezentace s přehledným a hlavně responzivním designem je dnešním standardem.",
        ],
        content: [
            {
                title: "Mobilní verze",
                subTitle: "I přesto se najde obrovské množství webových stránek firem a především živnostníků, které nejsou moderní a nemají mobilní verzi, toto je závažné kritérium, kvůli kterému můžete přijít až o 70% Vašich potenciálních klientů, které se nacházejí na mobilních zařízení.",
            },
            {
                title: "Zákazník nakupuje vlastníma očima",
                subTitle: "V dnešní době mít web neznamená jen webová stránka, ale znamená obrovské množství dalších klíčových věcí (viz. níže ty nejdůležitější):",
                points: [
                    "Animace",
                    "Přehlednost",
                    "Rychlé načítání (musí být kratší než 4 sekundy)",
                    "Dostatečný kontrast barev",
                    "Moderní čistý design",
                    "Rychlost načítání obrázků",
                    "Více obrázků méně textu",
                ],
            },
            {
                title: "Rychlost načítání webu",
                subTitle: "Drtivá většina webů živnostníků a malých firem na českém trhu mají pomalé weby (web se nenačte dříve než za 4 sekundy. Kvůli pomalému načítání webu můžete přijít až o 50-60% poptávek, tento případ primárně se týká především řemeslníků, kteří primárně hledají své zakázky ze svých webových prezentací a také ze svých již realizovaných prací.",
            },
            {
                title: "Optimalizace vyhledávačů (SEO)",
                subTitle: "V 6 - 7/10 případech  u webových stránek řemeslníků a malých firem na českém trhu, bohužel neobsahuje vysokou dohledatelnost jejich služeb na Internetu. Kvůli tomuto můžete přijít ještě o více poptávek než jen když nemáte moderní web se standardy roku 2026. Drtivá většina zákazníků nevyhledá přímo Vaši webovou doménu, ale hledají dotazy jako „Účetnictví Praha“, „Elektrikář Praha“ a podobně.",
            },
            {
                title: "Kontaktní formulář je číslo 1",
                subTitle: "V 6 - 7/10 případech  u webových stránek řemeslníků a malých firem na českém trhu, bohužel neobsahuje vysokou dohledatelnost jejich služeb na Internetu. Kvůli tomuto můžete přijít ještě o více poptávek než jen když nemáte moderní web se standardy roku 2026. Drtivá většina zákazníků nevyhledá přímo Vaši webovou doménu, ale hledají dotazy jako „Účetnictví Praha“, „Elektrikář Praha“ a podobně.",
            },
        ],
    },
];

export default ArticlesArray;