import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import React, { useState } from "react";
// import { useMask } from "@react-input/mask";

export default function ModalWithFormMapEn({ isOpen, onOpenChange, title }) {
    // const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });
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
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
            <ModalContent>
                {onClose => (
                    <>
                        {/* <ModalHeader className="flex flex-col gap-1 text-xl"></ModalHeader> */}
                        <ModalBody>
                            <form className="flex flex-col items-center px-2 py-4 gap-4 SM:px-0" onSubmit={onSubmitBtn}>
                                <div className="flex flex-col gap-3">
                                    <p className="text-xl">{title}</p>
                                    <p className="text-sm">
                                        To contact the selected representative, please fill out the form below.
                                        {<br />}Our specialists will answer your questions and provide detailed
                                        information.
                                    </p>
                                </div>

                                <input
                                    type="text"
                                    className="bg-bgGray h-12 px-5 rounded focus:outline-customYellow w-full"
                                    placeholder="Имя*"
                                    name="name"
                                    required
                                />
                                <input
                                    type="text"
                                    className="bg-bgGray h-12  px-5 rounded focus:outline-customYellow w-full"
                                    placeholder="Телефон*"
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
                                    className="bg-bgGray col-start-1 col-end-4 min-h-20 py-3 px-5 rounded focus:outline-customYellow w-full"
                                    placeholder="Сообщение"
                                ></textarea>
                                <div className="w-full flex">
                                    <button
                                        type="submit"
                                        className={`h-12 mx-auto ${
                                            isLoaded
                                                ? "bg-[#7d7] text-white"
                                                : "bg-gradient-to-r from-[#F6E960] to-[#E4D119]"
                                        } px-5 max-w-72 w-full rounded font-medium`}
                                    >
                                        {buttonText}
                                    </button>
                                </div>
                                <div className="flex gap-[10px] items-center">
                                    <input type="checkbox" className="cursor-pointer" required />
                                    <p className="text-[#909090] text-[10px]">
                                        By clicking the button, you accept the Privacy Policy and consent to the
                                        processing of personal data.
                                    </p>
                                </div>
                            </form>
                        </ModalBody>
                        {/* <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Close
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Action
                                </Button>
                            </ModalFooter> */}
                    </>
                )}
            </ModalContent>
        </Modal>
    );
}
