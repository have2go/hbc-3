import Image from "next/image";
import Link from "next/link";

export default function Card({ card, onOpen }) {
    return (
        <div className=" flex flex-col box-border border-2 border-[#EFF0F4] hover:border-customYellow hover:scale-[1.02] rounded-[21px] max-w-[400px] transition-all h-full SM:w-[90%] SM:mx-auto justify-between">
            {/* <Link href={card.linkTo} className="z-10"> */}
            <div href={card.linkTo} className="z-10">
                <Image src={card.img} alt={card.title} className="-z-40 rounded-t-[20px] " />
                <div className="p-8 flex flex-col 2XL:p-4 SM:p-3 SM:pb-5">
                    <div className="flex gap-[10px] items-center">
                        <span className="h-[10px] w-[10px] bg-customYellow rounded-full" />
                        <p className="text-2xl 2XL:text-xl">{card.title}</p>
                    </div>
                    {card.text}
                </div>
            </div>
            <button
                className="h-[38px] max-w-[168px] w-full bg-customPurple text-[15px] text-white rounded z-20 ml-8 mb-8 2XL:ml-4 SM:ml-3 SM:mb-5"
                onClick={onOpen}
            >
                Оставить заявку
            </button>
        </div>
    );
}
