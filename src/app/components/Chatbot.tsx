"use client";

import { type FC, useState, type ChangeEvent, type KeyboardEvent, Fragment } from "react";
import { TbX } from "react-icons/tb";
import { TbSend } from "react-icons/tb";
import clsx from "clsx";

import type DefaultAttributes from "../types/DefaultAttributes";
import Wrapper from "./Wrapper";
import Img from "./Img";
import Flex from "./Flex";
import Text from "./Text";
import Relative from "./Relative";

const Chatbot:FC<DefaultAttributes> = ({
    ...attrs
}) => {
    const [isChatVisible, setChatVisible] = useState<boolean>(false);
    const [isChatPrompt, setChatPrompt] = useState<string>("");
    // const [isUserChatPrompt, setUserChatPrompt] = useState<string>("");
    const [isChatResponse, setChatResponse] = useState<string>("");
    const [isPromptMessageDeleted, setPromptMessageDelete] = useState<boolean>(false);
    const [isResponseMessageDeleted, setResponseMessageDelete] = useState<boolean>(false);

    const handleChat = async (e: ChangeEvent<HTMLFormElement>) => {
       e.preventDefault();
       const target = e.target;

       try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isChatPrompt }),
            });

            const body = await response.json();

            if (response.ok) {
                setChatResponse(body.result);
                // setChatPrompt("");
                setPromptMessageDelete(false);
                setResponseMessageDelete(false);
            } else {
                console.error(body.error);
            };
       } catch (error) {
            console.error(error);
       };
    };

    const detectKeyboardKeys = async (e: KeyboardEvent<HTMLTextAreaElement>) => {
        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ isChatPrompt }),
            });

            const body = await response.json();

            if (response.ok) {
                setChatResponse(body.result);
                if (e.ctrlKey && e.key === "Enter") {
                    setChatResponse(body.result);
                    setChatPrompt("");
                };
            } else {
                console.error(body.error);
            };
        } catch (error) {
            console.error(error);
        };
    };

    return (
        <Fragment>
            <Wrapper
            onClick={() => setChatVisible(true)}
            className="relative overflow-hidden cursor-pointer rounded-full">
                <Img
                width={65}
                height={65}
                src="/assets/me-1.avif"
                alt="Vojtěch Oliva webový vývojář"
                className="max-w-[65px] max-h-[65px] rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
            </Wrapper>
            {
                isChatVisible && (
                    <Fragment>
                        <Wrapper
                        className="fixed right-5 bottom-5 bg-(--white-color) shadow-lg border border-white/25 w-[350px] max-w-[400px] min-h-[300px] h-[420px] md:h-[400px] max-h-[500px] z-[100] rounded-2xl">
                            <Flex
                            type="flexCol"
                            className="h-full justify-between">
                                <Wrapper className="bg-(--orange-color) p-(--spacing-sm) rounded-t-2xl">
                                    <Flex
                                    type="flexRowOnly"
                                    className="justify-between items-center">
                                        <Wrapper className="flex gap-(--spacing-xs) md:gap-(--spacing-md)">
                                            <Img
                                            width={50}
                                            height={50}
                                            src="/assets/me-1.avif"
                                            alt="Vojtěch Oliva webový vývojář"
                                            className="max-w-[50px] max-h-[50px] rounded-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                                            />
                                            <Wrapper className="text-(--white-color)">
                                                <Text
                                                type="boldText"
                                                className="uppercase">
                                                    Zeptejte se AI
                                                </Text>
                                                <Text>
                                                    Odpoví okamžitě
                                                </Text>
                                            </Wrapper>
                                        </Wrapper>
                                        <TbX
                                        className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10 text-(--white-color) cursor-pointer"
                                        onClick={() => setChatVisible(false)}
                                        />
                                    </Flex>
                                </Wrapper>
                                <form
                                onSubmit={handleChat}
                                className="p-(--spacing-sm)">
                                    <Flex type="flexCol">
                                        <Wrapper className="flex flex-col gap-(--spacing-xs) max-h-[180px] overflow-auto">
                                            {
                                                isChatPrompt && (
                                                    <Fragment>
                                                        <Wrapper className={clsx(isPromptMessageDeleted ? "hidden" : "static", "bg-(--orange-color) text-(--white-color) p-(--spacing-sm) rounded-2xl")}>
                                                            <Flex
                                                            type="flexRowOnly"
                                                            className="justify-end">
                                                                <TbX
                                                                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer"
                                                                onClick={() => setPromptMessageDelete(true)}
                                                                />
                                                            </Flex>
                                                            <Text type="smallBodyText">
                                                                Vy: {isChatPrompt}
                                                            </Text>
                                                        </Wrapper>
                                                    </Fragment>
                                                )
                                            }
                                            {
                                                isChatResponse && (
                                                    <Fragment>
                                                        <Wrapper className={clsx(isResponseMessageDeleted ? "hidden" : "static", "bg-[#F1F5F9] p-(--spacing-sm) rounded-2xl")}>
                                                            <Flex
                                                            type="flexRowOnly"
                                                            className="justify-end">
                                                                <TbX
                                                                className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 cursor-pointer"
                                                                onClick={() => setResponseMessageDelete(true)}
                                                                />
                                                            </Flex>
                                                            <Text type="smallBodyText">
                                                                AI Chat: {isChatResponse}
                                                            </Text>
                                                        </Wrapper>
                                                    </Fragment>
                                                )
                                            }
                                        </Wrapper>
                                        <Flex
                                        type="flexRowOnly"
                                        className="-mt-(--spacing-xs)">
                                            <Relative className="w-full max-h-[100px] flex justify-between items-center">
                                                <textarea
                                                    value={isChatPrompt}
                                                    // onKeyDown={detectKeyboardKeys}
                                                    onChange={(e) => {
                                                        setChatPrompt(e.target.value);
                                                        // setUserChatPrompt(e.target.value);
                                                    }}
                                                    // autoCapitalize="words"
                                                    placeholder="Napište nám zprávu"
                                                    className="bg-[#F1F5F9] w-full max-h-[100px] resize-none rounded-2xl p-(--spacing-xs) md:p-(--spacing-sm) focus:outline-none" />
                                                    {isChatPrompt && (
                                                        <Fragment>
                                                            <TbX
                                                            className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 relative right-10 cursor-pointer"
                                                            onClick={() => setChatPrompt("")}
                                                            />
                                                        </Fragment>
                                                    )}
                                            </Relative>
                                            {
                                                isChatPrompt && (
                                                    <Fragment>
                                                        <button
                                                        type="submit"
                                                        className="bg-(--orange-color) text-(--white-color) p-(--spacing-xs) rounded-full cursor-pointer">
                                                            <TbSend className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />
                                                        </button>
                                                    </Fragment>
                                                )
                                            }
                                        </Flex>
                                    </Flex>
                                </form>
                            </Flex>
                        </Wrapper>
                    </Fragment>
                )
            }
        </Fragment>
    );
};

export default Chatbot;