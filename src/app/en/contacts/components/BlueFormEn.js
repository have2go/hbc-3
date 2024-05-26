import React, { useState } from "react";

export default function BlueFormEn() {
    const [buttonText, setButtonText] = useState("Submit");
    const [isLoaded, setIsLoaded] = useState(false);

    const onSubmitBtn = e => {
        e.preventDefault();
        setButtonText("Sending...");
        setTimeout(() => {
            setIsLoaded(true);
            setButtonText("Thanks!");
        }, 1000);
    };

    return (
        <section className="py-[10px] my-20 LG:mt-10 MD:py-1 MD:px-7 XSM:px-4 bg-customPurple">
            <form
                className="p-[30px] max-w-[1400px] w-full mx-auto border-2 border-customPurple rounded-[20px] MD:p-5 SM:px-3 bg-white 2XL:max-w-[1000px] XL:max-w-[750px]"
                onSubmit={onSubmitBtn}
            >
                <h2 className="text-4xl LG:text-3xl MD:text-2xl SM:text-lg">Let&apos;s discuss your needs</h2>
                <p className="mt-5 mb-10 text-[#5E5E62] LG:text-sm MD:mt-4 MD:mb-6 MD:text-xs SM:mt-2 SM:mb-4 SM:text-[11px]">
                    Tell us about your requirements. We will get in touch with you to discuss the details and offer the
                    best solutions.
                </p>
                <div className="grid grid-cols-3 gap-6 MD:gap-3 SM:grid-cols-1">
                    <input
                        type="text"
                        className="bg-bgGray h-12 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Name*"
                        name="name"
                        required
                    />
                    <input
                        type="text"
                        className="bg-bgGray h-12  px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Phone*"
                        name="phone"
                        required
                    />
                    <input
                        type="email"
                        className="bg-bgGray h-12  px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow"
                        placeholder="Email*"
                        name="email"
                        required
                    />
                    <textarea
                        className="bg-bgGray col-start-1 col-end-4 min-h-20 py-3 px-5 MD:px-2 MD:text-sm rounded focus:outline-customYellow SM:col-end-auto"
                        placeholder="Message"
                    ></textarea>
                    <div className="col-start-1 col-end-4 flex gap-5 SM:col-end-auto SM:flex-col">
                        <button
                            type="submit"
                            className={`h-12 ${
                                isLoaded ? "bg-[#7d7] text-white" : "bg-gradient-to-r from-[#ACB5FE] to-[#6A7BFE]"
                            } px-5 max-w-72 w-full rounded font-medium`}
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
