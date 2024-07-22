import { cardsS } from "@/constants/cards";
import Card from "./Card";
import ModalWithForm from "./common/ModalWithForm";
import { useDisclosure } from "@nextui-org/react";
import React, { useState, useRef } from "react";
import { useMask } from "@react-input/mask";
import emailjs from "@emailjs/browser";

export default function CardGrid() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [buttonText, setButtonText] = useState("Отправить");
    const [isLoaded, setIsLoaded] = useState(false);
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });

    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
        setButtonText("Отправка...");
        emailjs
            .sendForm("service_3w4w60i", "template_dj6kaud", form.current, {
                publicKey: "o3u4fext32rohw6Zf",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setIsLoaded(true);
                    setButtonText("Спасибо!");
                },
                error => {
                    console.log("FAILED...", error);
                    setButtonText("Ошибка.");
                }
            );
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-[30px] 2XL:gap-4 XL:hidden">
                {cardsS.map((card, i) => {
                    return <Card card={card} key={i} onOpen={onOpen} />;
                })}
                <div className=" flex flex-col box-border border-2 border-customYellow rounded-[21px] max-w-[400px]">
                    <form
                        className="flex flex-col items-center px-5 py-7 gap-6 2XL:gap-4 2XL:py-5"
                        onSubmit={sendEmail}
                        ref={form}
                    >
                        <p className="text-XL 2XL:text-lg">Оставить заявку на услугу</p>
                        <input
                            type="text"
                            className="bg-bgGray h-12 px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Имя*"
                            name="from_name"
                            required
                        />
                        <input
                            type="text"
                            className="bg-bgGray h-12  px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Телефон*"
                            name="from_phone"
                            required
                            ref={inputRef}
                        />
                        <input
                            type="email"
                            className="bg-bgGray h-12  px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Email*"
                            name="from_email"
                            required
                        />
                        <textarea
                            className="bg-bgGray col-start-1 col-end-4 min-h-20 py-3 px-5 rounded focus:outline-customYellow w-full 2xl:min-h-10"
                            placeholder="Сообщение"
                            name="message"
                        ></textarea>
                        <div className="w-full flex">
                            <button
                                type="submit"
                                className={`h-12 ${
                                    isLoaded ? "bg-[#7d7] text-white" : "bg-gradient-to-r from-[#F6E960] to-[#E4D119]"
                                } px-5 max-w-72 w-full rounded font-medium`}
                                disabled={isLoaded}
                            >
                                {buttonText}
                            </button>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] 2XL:text-[10px]">
                                Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на
                                обработку персональных данных
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={"Оставить заявку на услугу"} />
        </>
    );
}
