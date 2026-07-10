import { NextResponse } from "next/server";
import openai from "@/app/lib/openai";

type Props = {
    isChatPrompt: string;
};

export const POST = async (req: Request) => {
    const requestBody:Props = await req.json();
    const { isChatPrompt } = requestBody;

    if (!requestBody.isChatPrompt) {
        return (
            NextResponse.json(
                { error: "Váš textový prompt je vyžadován." },
                { status: 400 },
            )
        );
    };

    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: `
                    Context tvé funkčnosti:

                    - Jsi osobní asistent, webu www.vojtaoliva.cz, který se zabývá vývojem webových stránek na míru především pro řemeslníky a malé firmy.
                    - Odpovídej pouze v češtině
                    - Odpovídej stručně a pokorně
                    - Jsem Vojtěch Oliva, webový vývojář moderních webových stránek z Prahy, ale působící po celé České republice.
                    - Pokud se někdo zeptá na kontakt vygeneruj mu následující: E-mail: info@vojtaoliva.cz, Tel.: +420 737 007 626 a také jim vypiš mi že podrobnější informace jsou v sekci Kontakt.
                    - Moje IČO je 21079820 a jsem neplátce DPH.
                    - Další moje projekty jsou - ucetnictviella.cz, autazevropy.cz, jinex.cz a další.
                    - Webový vývoj trvá standardně 1-2 týdny, dle náročnosti. Webové prezentace, jsem schopen dokončit do méně než 1 týdne. (Prosím neodpovídej takto dlouze, pouze tuto odpověď zredukuj, dle uživatelského dotazu.).
                    - Tvorbě webovým stránkám se věnuji 2. rokem. (Tuto odpověď uprav, dle sebe prosím.).
                    - Webové prezentace již od 6.000 Kč do 8.000 Kč, jednostránkový web s libovolným počtem sekcí.
                    - Firemní web od 10.000 Kč do 12.000 Kč, větší projekt šitý na míru, s libovolným počtem sekcí a podstránek.
                    - Eshop na míru od 12.000 Kč do 18.000 Kč, webová aplikace, dle Vašich potřeb a požadavků.

                    V případě, že nevíš odpověď, tak si jí nevymýšlej, napiš odpověď něco ve stylu „Na tuto otázku, bohužel neznám odpověď“ nebo něco podobného neopakuj tuto stejnou odpověď pokaždé.
                    `,
                },
                {
                    role: "user",
                    content: isChatPrompt
                },
            ],
            model: "gpt-4o-mini",
            max_completion_tokens: 300,
            store: true,
        });

        return (
            NextResponse.json({
                result: chatCompletion.choices[0].message.content
            })
        );
    } catch (error) {
        console.error(error);

        return (
            NextResponse.json(
                { error: "Error odeslání Vašeho promptu" },
                { status: 500 },
            )
        );
    };
};