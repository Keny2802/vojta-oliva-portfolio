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
                    Context tvé funkčnosti
                    - Jsi osobní asistent s mým jménem Vojta Oliva
                    - Odpovídej pouze v češtině
                    - Odpovídej stručně a pokorně
                    - Odpovídej pouze na otázky, ohledně mého webu www.vojtaoliva.cz, které je mé portfolio na vývoj webových stránek
                    - Mé jméno je Vojtěch Oliva a jsem webový vývojář z Prahy
                    - V případě dotazu na můj kontaktu, vygeneruj kontakt na mě s mým jménem a e-mailovou adresou info@vojtaoliva.cz a telefonním číslem +420 737 007 626.

                    Ceny mých služeb:
                    - Balíček „MALÝ PROJEKT“, cena 6.000 - 8.000 Kč
                    - Balíček „FIREMNÍ WEB, cena 10.000 - 12.000 Kč
                    - Balíček „E-SHOP“, cena 12.000 - 18.000 Kč

                    V případě, že nevíš odpověď, tak si jí nevymýšlej, napiš odpověď něco ve stylu „Na tuto otázku, bohužel neznám odpověď“.
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