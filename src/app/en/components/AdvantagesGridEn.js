import { advantagesEn } from "@/constants/advantagesEn";
import Image from "next/image";

export default function AdvantagesGridEn() {
    return (
        <div className="grid grid-cols-4 py-10 gap-[100px] mx-auto LG:gap-5 MD:pb-0 SM:grid-cols-2 SM:py-5">
            {advantagesEn.map((adv, i) => {
                return (
                    <div className="flex flex-col items-center justify-start" key={i}>
                        <Image src={adv.img} alt="" className="SM:h-24 SM:w-24"/>
                        <p className="mt-10 mb-4 MD:text-xs SM:my-2 font-bold">{adv.number + "+"}</p>
                        {adv.text}
                    </div>
                );
            })}
        </div>
    );
}
