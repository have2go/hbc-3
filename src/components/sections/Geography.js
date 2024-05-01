import Image from "next/image";
import map from "/public/map.jpg";
import SvgMap from "../SvgMap";

export default function Geography() {
    return (
        <section className=" mt-10 bg-[#BEBEBE] LG:mt-6 px-10">
            <div className=" w-full max-w-[1690px] mx-auto relative ">
                <h2 className="text-4xl my-10 text-white absolute left-0 top-0 z-50 LG:text-2xl">География присутствия</h2>
                <div className="w-9/12 mx-auto relative">
                    <SvgMap />
                    <Image src={map} alt="География присутсвия" className="h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}
