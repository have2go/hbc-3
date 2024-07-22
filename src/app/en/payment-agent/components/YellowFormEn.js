import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
// import { useMask } from "@react-input/mask";

export default function YellowForm() {
    // const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });
    const [buttonText, setButtonText] = useState("Submit");
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
        <section className="py-[10px] mt-20 LG:mt-10 MD:py-1 MD:px-7 XSM:px-4 bg-customYellow">
            <form
                className="p-[30px] max-w-[1400px] w-full mx-auto border-2 border-customYellow rounded-[20px] MD:p-5 SM:px-3 bg-white 2XL:max-w-[1000px] XL:max-w-[750px]"
                onSubmit={sendEmail}
                ref={form}
            >
                <h2 className="text-4xl LG:text-3xl MD:text-2xl SM:text-lg">Submit a request</h2>
                <p className="mt-5 mb-10 text-[#5E5E62] LG:text-sm MD:mt-4 MD:mb-6 MD:text-xs SM:mt-2 SM:mb-4 SM:text-[11px]">
                    Complete a simple form and we&apos;ll be in touch to discuss how our solutions can help your
                    business reduce costs, minimise risk and streamline payment processes.
                </p>
                <div className="grid grid-cols-3 gap-6 MD:gap-3 SM:grid-cols-1">
                    <input
                        type="text"
                        className="bg-bgGray h-12 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Name*"
                        name="from_name"
                        required
                    />
                    <input
                        type="text"
                        className="bg-bgGray h-12  px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Phone*"
                        name="from_phone"
                        required
                        // ref={inputRef}
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
                        placeholder="Message"
                        name="message"
                    ></textarea>
                    <div className="col-start-1 col-end-4 flex gap-5 SM:col-end-auto SM:flex-col">
                        <button
                            type="submit"
                            className={`h-12 ${
                                isLoaded ? "bg-[#7d7] text-white" : "bg-gradient-to-r from-[#F6E960] to-[#E4D119]"
                            } px-5 max-w-72 w-full rounded font-medium`}
                            disabled={isLoaded}
                        >
                            {buttonText}
                        </button>
                        <div className="flex gap-2 items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] LG:text-[10px] MD:text-[8px]">
                                By clicking on the button, you accept the Privacy Policy and agree to allow the
                                processing of personal data.
                            </p>
                        </div>
                    </div>
                </div>
            </form>
        </section>
    );
}
