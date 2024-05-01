import Image from "next/image";

export default function Card({ card, onOpen }) {
    return (
        <div className=" flex flex-col box-border border-2 border-[#EFF0F4] hover:border-customYellow rounded-[21px] max-w-[400px] transition-all h-full SM:w-[90%] SM:mx-auto">
            <Image src={card.img} alt={card.title} className="-z-40 rounded-t-[20px] " />
            <div className="p-8 flex flex-col h-full 2xl:p-4 SM:p-3 SM:pb-5">
                <div className="flex gap-[10px] items-center">
                    <span className="h-[10px] w-[10px] bg-customYellow rounded-full" />
                    <p className="text-2xl 2XL:text-xl ">{card.title}</p>
                </div>
                <div className="flex flex-col h-full justify-between">
                    {card.text}
                    <button
                        className="h-[38px] max-w-[168px] w-full bg-customPurple text-[15px] text-white rounded"
                        onClick={onOpen}
                    >
                        Оставить заявку
                    </button>
                </div>
            </div>
        </div>
    );
}
