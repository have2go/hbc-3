import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import React, { useState} from "react";
import { useMask } from "@react-input/mask";


export default function ModalWithForm({ isOpen, onOpenChange, title }) {
    const inputRef = useMask({ mask: "+7 (___) ___-__-__", replacement: { _: /\d/ }, showMask: true });
    const [buttonText, setButtonText] = useState("Отправить");
    const [isLoaded, setIsLoaded] = useState(false);

    const onSubmitBtn = e => {
        e.preventDefault();
        setButtonText("Отправка...");
        setTimeout(() => {
            setIsLoaded(true);
            setButtonText("Спасибо!");
        }, 1000);
    };

    return (
        <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
            <ModalContent>
                {onClose => (
                    <>
                        {/* <ModalHeader className="flex flex-col gap-1 text-xl"></ModalHeader> */}
                        <ModalBody>
                            <form
                                className="flex flex-col items-center px-5 py-7 gap-6 SM:gap-4 SM:px-0"
                                onSubmit={onSubmitBtn}
                            >
                                <p className="text-xl">{title}</p>
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
                                    ref={inputRef}
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
                                        className={`h-12 ${
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
                                    <p className="text-[#909090] text-[13px] SM:text-[10px]">
                                        Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на
                                        обработку персональных данных
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
