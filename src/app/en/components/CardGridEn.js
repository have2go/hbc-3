import { cardsEn } from "@/constants/cardsEn";
import Card from "./CardEn";
import ModalWithFormEn from "./common/ModalWithFormEn";
import { useDisclosure } from "@nextui-org/react";
import React, { useState } from "react";
// import { useMask } from "@react-input/mask";

export default function CardGridEn() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [buttonText, setButtonText] = useState("Send");
    const [isLoaded, setIsLoaded] = useState(false);
    // const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });

    const onSubmitBtn = e => {
        e.preventDefault();
        setButtonText("Sending...");
        setTimeout(() => {
            setIsLoaded(true);
            setButtonText("Thanks!");
        }, 1000);
    };

    return (
        <>
            <div className="grid grid-cols-4 gap-[30px] 2XL:gap-4 XL:hidden">
                {cardsEn.map((card, i) => {
                    return <Card card={card} key={i} onOpen={onOpen} />;
                })}
                <div className=" flex flex-col box-border border-2 border-customYellow rounded-[21px] max-w-[400px]">
                    <form
                        className="flex flex-col items-center px-5 py-7 gap-6 2XL:gap-4 2XL:py-5"
                        onSubmit={onSubmitBtn}
                    >
                        <p className="text-XL 2XL:text-lg">Submit a request for the service</p>
                        <input
                            type="text"
                            className="bg-bgGray h-12 px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Name*"
                            name="name"
                            required
                        />
                        <input
                            type="text"
                            className="bg-bgGray h-12  px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Phone*"
                            name="phone"
                            required
                            // ref={inputRef}
                        />
                        <input
                            type="email"
                            className="bg-bgGray h-12  px-5 rounded focus:outline-customYellow w-full"
                            placeholder="Email*"
                            name="email"
                            required
                        />
                        <textarea
                            className="bg-bgGray col-start-1 col-end-4 min-h-20 py-3 px-5 rounded focus:outline-customYellow w-full 2xl:min-h-10"
                            placeholder="Message"
                        ></textarea>
                        <div className="w-full flex">
                            <button
                                type="submit"
                                className={`h-12 ${
                                    isLoaded ? "bg-[#7d7] text-white" : "bg-gradient-to-r from-[#F6E960] to-[#E4D119]"
                                } px-5 max-w-72 w-full rounded font-medium`}
                            >
                                {buttonText}
                            </button>
                        </div>
                        <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] 2XL:text-[10px]">
                                By clicking the button, you accept the Privacy Policy and consent to the processing of
                                personal data.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            <ModalWithFormEn isOpen={isOpen} onOpenChange={onOpenChange} title={"Submit a request for service"} />
        </>
    );
}
