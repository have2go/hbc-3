import React, { useState, useRef } from "react";
import { useMask } from "@react-input/mask";
import emailjs from "@emailjs/browser";

export default function Form({ title, subtitle }) {
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });
    const [buttonText, setButtonText] = useState("Отправить");
    const [isLoaded, setIsLoaded] = useState(false);

    const form = useRef();

    function sendEmail(e) {
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
        <section className="pt-20 LG:pt-10 px-10 MD:px-7 XSM:px-4">
            <form
                className="p-[30px] max-w-[1400px] w-full mx-auto border-2 border-customYellow rounded-[20px] MD:p-5 SM:px-3"
                onSubmit={sendEmail}
                ref={form}
            >
                <h2 className="text-4xl LG:text-3xl SM:text-2xl">{title}</h2>
                <p className="mt-5 mb-10 text-[#5E5E62] LG:text-sm MD:mt-4 MD:mb-6 MD:text-xs SM:mt-2 SM:mb-4 SM:text-[11px]">
                    {subtitle}
                </p>
                <div className="grid grid-cols-3 gap-6 MD:gap-3 SM:grid-cols-1">
                    <input
                        type="text"
                        className="bg-bgGray h-12 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Имя*"
                        name="from_name"
                        required
                    />
                    <input
                        type="text"
                        className="bg-bgGray h-12  px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Телефон*"
                        name="from_phone"
                        required
                        ref={inputRef}
                    />
                    <input
                        type="email"
                        className="bg-bgGray h-12  px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Email*"
                        name="from_email"
                        required
                    />
                    <textarea
                        className="bg-bgGray col-start-1 col-end-4 min-h-20 py-3 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow SM:col-end-auto"
                        placeholder="Сообщение"
                        name="message"
                    ></textarea>
                    <div className="col-start-1 col-end-4 flex gap-5 SM:col-end-auto SM:flex-col">
                        <button
                            type="submit"
                            className={`g-recaptcha h-12 ${
                                isLoaded ? "bg-[#7d7] text-white" : "bg-gradient-to-r from-[#F6E960] to-[#E4D119]"
                            } px-5 max-w-72 w-full rounded font-medium`}
                            disabled={isLoaded}
                            data-sitekey="6LfelU0qAAAAAKHsA5awCQYfuwH-6v58obYJrBGD"
                            data-callback="sendEmail"
                        >
                            {buttonText}
                        </button>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] LG:text-[10px] MD:text-[8px]">
                                Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на
                                обработку персональных данных
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
