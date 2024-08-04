"use client";
import Image from "next/image";
import mainBg from "/public/main-bg.jpg";
import Main from "@/components/sections/Main";
import headerBg from "/public/header-bg.jpg";
import altBg from "/public/alt-bg.jpg";
import { Open_Sans } from "next/font/google";
const openSans = Open_Sans({ subsets: ["latin"] });

import { useDisclosure } from "@nextui-org/react";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Customs from "./components/Customs";
import Services from "./components/Services";
import Stages from "./components/Stages";
import Docs from "./components/Docs";
import CustomsSeo from "./components/CustomsSeo";

export default function Home() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <main className="relative text-customGray">
      {/* <Image
                src={headerBg}
                alt="Highbrow Customs"
                className="absolute top-0 left-0 -z-50 h-[175px] w-screen object-cover shadow-lg SM:h-[150px]"
            /> */}
      <Image
        src={altBg}
        alt="Highbrow Customs"
        className="absolute top-0 left-0 -z-50 h-[75vh] w-screen object-cover shadow-lg SM:h-[150px]"
      />
      <section className="relative max-w-[1690px] px-10 h-[75vh] SM:h-[150px]  mx-auto pt-10 text-black MD:px-5 SM:px-3 ">
        {/* <div className=" mx-auto ">
          <Header />
        </div> */}
        <div className="flex flex-col justify-between h-4/5">
          <Header />
          <button
            onClick={onOpen}
            className="bg-transparent text-3xl font-medium border-[3px] border-black rounded-[20px] w-full max-w-[505px] h-20 XL:h-16 XL:text-[26px] LG:text-2xl LG:max-w-[450px] MD:border-[3px] SM:text-xl SM:border-[2px] MD:bg-white/60 SM:max-w-[300px] hover:bg-gradient-to-r from-[#F6E960] to-[#E4D119]  hover:border-2 hover:scale-[1.01] transition-all"
          >
            Получите консультацию
          </button>
        </div>
      </section>
      <Customs />
      <Services />
      <Stages />
      <Docs />
      <CustomsSeo />
      <Footer />
    </main>
  );
}
