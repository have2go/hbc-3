import React, { useState, useRef } from "react";
import { useMask } from "@react-input/mask";
import emailjs from "@emailjs/browser";

export default function FormEn() {
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });
    const [buttonText, setButtonText] = useState("Send");
    const [isLoaded, setIsLoaded] = useState(false);

    const form = useRef();

    const sendEmail = e => {
        e.preventDefault();
        setButtonText("Sending...");
        emailjs
            .sendForm("service_3w4w60i", "template_dj6kaud", form.current, {
                publicKey: "o3u4fext32rohw6Zf",
            })
            .then(
                () => {
                    console.log("SUCCESS!");
                    setIsLoaded(true);
                    setButtonText("Thanks!");
                },
                error => {
                    console.log("FAILED...", error);
                    setButtonText("Error.");
                }
            );
    };

    return (
        <section className="py-[10px] my-20 LG:mt-10 MD:py-1 MD:px-7 XSM:px-4 SM:mt-0 SM:mb-6">
            <form
                className="p-[30px] max-w-[1400px] w-full mx-auto border border-customPurple rounded-[20px] MD:p-5 SM:px-3 bg-white 2XL:max-w-[1000px] XL:max-w-[750px]"
                onSubmit={sendEmail}
                ref={form}
            >
                <h2 className="text-4xl 1.5XL:text-3xl MD:text-2xl SM:text-lg">Leave a request or ask a question</h2>
                <p className="mt-5 mb-10 text-[#5E5E62] LG:text-sm 1.5XL:mt-4 1.5XL:mb-6 MD:text-xs SM:mt-2 SM:mb-4 SM:text-[11px]">
                    For more information and advice on customs clearance, please fill in the feedback form.
                </p>
                <div className="grid gap-6 grid-cols-1 MD:gap-3">
                    <input
                        type="text"
                        className="bg-bgGray h-12 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Name*"
                        name="from_name"
                        required
                    />
                    <input
                        type="text"
                        className="bg-bgGray h-12 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Phone*"
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
                        className="bg-bgGray min-h-20 py-3 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Message"
                        name="message"
                    ></textarea>
                    <div className="flex gap-5 flex-col">
                        <button
                            type="submit"
                            className={`h-12 ${
                                isLoaded ? "bg-[#7d7] " : "bg-gradient-to-r from-[#ACB5FE] to-[#6A7BFE]"
                            } px-5 max-w-72 w-full rounded font-medium text-white mx-auto`}
                            disabled={isLoaded}
                        >
                            {buttonText}
                        </button>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] LG:text-[10px] MD:text-[8px]">
                                By clicking on the button, you accept the privacy policy and consent to processing of
                                personal data
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
