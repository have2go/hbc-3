"use client";
import Image from "next/image";

import mainBg from "/public/main-bg.jpg";

import { Open_Sans, Stick_No_Bills } from "next/font/google";
import Section from "@/components/common/Section";

import HeaderEn from "../components/common/HeaderEn";
import FormEn from "../components/sections/FormEn";
import FooterEn from "../components/common/FooterEn";

const stickNoBills = Stick_No_Bills({ subsets: ["latin"] });

export default function inDevelopment() {
  const daysLeft = Math.floor((1722486898557 - Date.now()) / 86400000);
  const hoursAndMinutes = 1722486898557 - (Date.now() + 86400000 * daysLeft);
  const hoursLeft = Math.floor(hoursAndMinutes / 3600000);
  const minutes =
    1722486898557 - (Date.now() + 86400000 * daysLeft + 3600000 * hoursLeft);
  const minutesLeft = Math.floor(minutes / 60000);

  return (
    <main className="relative text-customGray">
      <Image
        src={mainBg}
        alt="Highbrow Customs"
        className="absolute top-0 left-0 -z-50 h-screen w-screen object-cover"
      />
      <section className="w-full px-10 max-w-[1690px] mx-auto h-screen pt-10 text-black MD:px-5 SM:px-3 ">
        <div className="flex flex-col justify-between h-[90%] SM:h-3/4">
          <HeaderEn />
          <h1
            className={`text-white text-[40px] leading-tight ${stickNoBills.className} font-bold 2XL:text-4xl LG:text-3xl MD:text-2xl SM:text-xl w-3/4 MD:w-4/5 SM:w-full`}
          >
            We are preparing something valuable for international businesses
            aiming to enter the Russian market.
          </h1>
          <div className="flex flex-col gap-14">
            <div className="flex items-center gap-10 MD:gap-4">
              <div className="w-[350px] border border-customYellow h-[1px] -ml-64 MD:-ml-[350px] XXSM:hidden"></div>
              <p className="text-4xl text-white 2XL:text-3xl LG:text-2xl SM:text-xl">
                The page will be live in:
              </p>
            </div>
            <div
              className={`grid grid-cols-[140px_140px_140px] grid-rows-[100px_60px] gap-x-[10px] gap-y-[5px] w-fit text-customGray ${stickNoBills.className} SM:grid-cols-[90px_90px_90px]`}
            >
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">
                  {daysLeft}
                </p>
              </div>
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">
                  {hoursLeft}
                </p>
              </div>
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[90px] SM:text-6xl font-extrabold">
                  {minutesLeft}
                </p>
              </div>
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">
                  days
                </p>
              </div>
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">
                  hours
                </p>
              </div>
              <div className="bg-white/70 flex justify-between items-center">
                <p className="mx-auto text-[40px] SM:text-2xl font-extrabold">
                  minutes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Section
        title={
          "While this page is under construction, our comprehensive range of services is ready to assist you:"
        }
      >
        <div className="flex flex-col gap-10 MD:gap-5">
          <div className="flex flex-col gap-5 SM:gap-1">
            <div className="flex gap-[10px] items-center">
              <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
              <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                Payment agent services:
              </p>
            </div>
            <p className="text-xl 2XL:text-base SM:text-sm">
              Simplify your transactions with our robust international payment
              solutions.
            </p>
          </div>
          <div className="flex flex-col gap-5 SM:gap-1">
            <div className="flex gap-[10px] items-center">
              <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
              <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                Excise goods:
              </p>
            </div>
            <p className="text-xl 2XL:text-base SM:text-sm">
              Navigate the complexities of customs clearance for excisable
              products with ease.
            </p>
          </div>
          <div className="flex flex-col gap-5 SM:gap-1">
            <div className="flex gap-[10px] items-center">
              <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
              <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                Customs clearance:
              </p>
            </div>
            <p className="text-xl 2XL:text-base SM:text-sm">
              From surety to import, export, and transit, we handle it all to
              ensure your smooth market entry.
            </p>
          </div>
          <div className="flex flex-col gap-5 SM:gap-1">
            <div className="flex gap-[10px] items-center">
              <span className="h-[10px] w-[10px] bg-customYellow rounded-full shrink-0" />
              <p className="font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
                Logistics:
              </p>
            </div>
            <p className="text-xl 2XL:text-base SM:text-sm">
              Whether by land, sea, or air, we organize and optimize your
              shipments to and from Russia.
            </p>
          </div>
          <p className="mt-14 SM:mt-5 font-bold text-2xl 2XL:text-xl SM:text-lg XSM:text-base">
            If you have questions about our services or need detailed insights
            on how we can facilitate your business operations in Russia, please
            reach out to our expert team.
          </p>
        </div>
      </Section>
      <FormEn
        title="Contact Our Expert"
        subtitle="We are here to provide you with tailored support and solutions that align with your business goals.
                "
      />
      <Section
        title="Thank you for your patience. Check back soon to explore our new resources designed specifically for international companies like yours!
                "
      ></Section>
      <FooterEn />
    </main>
  );
}
