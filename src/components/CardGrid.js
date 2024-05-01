import { cardsS } from "@/constants/cards";
import Card from "./Card";
import ModalWithForm from "./common/ModalWithForm";
import { useDisclosure } from "@nextui-org/react";


export default function CardGrid() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <>
        <div className="grid grid-cols-4 gap-[30px] 2xl:gap-4">
            {cardsS.map((card, i) => {
                return <Card card={card} key={i} onOpen={onOpen} />;
            })}
            <div className=" flex flex-col box-border border-2 border-customYellow rounded-[21px] max-w-[400px]">
                <form className="flex flex-col items-center px-5 py-7 gap-6 2xl:gap-4 2xl:py-5">
                    <p className="text-xl 2xl:text-lg">Оставить заявку на услугу</p>
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
                        placeholder="Сообщение"
                    ></textarea>
                    <div className="w-full flex">
                        <button className="font-medium rounded w-1/2 bg-gradient-to-r from-[#F6E960] to-[#E4D119] py-2">Отправить</button>
                    </div>
                    <div className="flex gap-[10px] items-center">
                            <input type="checkbox" className="" required />
                            <p className="text-[#909090] text-[13px] 2xl:text-[10px]">
                                Нажимая на кнопку, вы принимаете политику конфиденциальности и даете согласие на
                                обработку персональных данных
                            </p>
                        </div>
                </form>
            </div>
        </div>
        <ModalWithForm isOpen={isOpen} onOpenChange={onOpenChange} title={'Оставить заявку на услугу'}/>
        </>
    );
}
