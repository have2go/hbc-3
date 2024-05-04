import Image from "next/image";
import map from "/public/map.jpg";
import SvgMap from "../SvgMapEn";
import YandexMapEn from "../YandexMapEn";

export default function GeographyEn() {
    return (
        <>
            <section className=" mt-10 bg-[#BEBEBE] LG:mt-6 px-10 MD:hidden">
                <div className=" w-full max-w-[1690px] mx-auto relative ">
                    <h2 className="text-4xl my-10 text-white absolute left-0 top-0 z-50 LG:text-2xl">
                        Global presence
                    </h2>
                    <div className="w-9/12 mx-auto relative">
                        <SvgMap />
                        <Image src={map} alt="Global presence" className="h-auto object-contain" />
                    </div>
                </div>
            </section>
            {/* {typeof window !== "undefined" && window.innerWidth <= 768 ? <YandexMapEn /> : <></>} */}
            <YandexMapEn />
        </>
    );
}
