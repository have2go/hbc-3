"use client";
import { useEffect, useState } from "react";

export default function Service({ data }) {
    return (
        <div
            className={`grid grid-cols-[24px_1fr] gap-11 SM:gap-5 border-2 border-customPurple  rounded-[20px] items-center relative transition-all`}
        >
            <div className={`h-[calc(100%-25px)] w-6 bg-customPurple/50  rounded-r-[20px]`}></div>
            <div className="mr-5 pb-10">
                <div className="h-28 flex items-center LG:h-24 SM:h-20">
                    <p className="font-bold text-2xl LG:text-xl SM:text-lg">{data.title}</p>
                </div>
                <div className={``}>{data.text}</div>
            </div>
        </div>
    );
}
