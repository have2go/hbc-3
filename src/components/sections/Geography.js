import Image from "next/image";
import map from "/public/map.jpg";
import SvgMap from "../SvgMap";

// import { useEffect, useState } from "react";

export default function Geography() {
    // const [isMobile, setIsMobile] = useState(true);
    // const [system, setSystem] = useState("unknown");

    // const userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // if (/android/i.test(userAgent)) {
    //     setSystem("Android");
    // }
    // // iOS detection from: http://stackoverflow.com/a/9039885/177710
    // if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    //     setSystem("iOS");
    // }

    // useEffect(() => {
    //     setIsMobile(window.innerWidth >= 1023);
    // }, []);

    // return isMobile ? (
    //     <section className=" mt-10 bg-[#BEBEBE] LG:mt-6 px-10">
    //         <div className=" w-full max-w-[1690px] mx-auto relative ">
    //             <h2 className="text-4xl my-10 text-white absolute left-0 top-0 z-50 LG:text-2xl">
    //                 География присутствия
    //             </h2>
    //             <div className="w-9/12 mx-auto relative">
    //                 <SvgMap />
    //                 <Image src={map} alt="География присутсвия" className="h-auto object-contain" />
    //             </div>
    //         </div>
    //     </section>
    // ) : (
    //     <></>
    // );
    return (
        <section className=" mt-10 bg-[#BEBEBE] LG:mt-6 px-10 MD:hidden">
            <div className=" w-full max-w-[1690px] mx-auto relative ">
                <h2 className="text-4xl my-10 text-white absolute left-0 top-0 z-50 LG:text-2xl">
                    География присутствия
                </h2>
                <div className="w-9/12 mx-auto relative">
                    <SvgMap />
                    <Image src={map} alt="География присутсвия" className="h-auto object-contain" />
                </div>
            </div>
        </section>
    );
}
