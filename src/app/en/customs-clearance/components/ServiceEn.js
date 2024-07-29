"use client";
import { useEffect, useState } from "react";

export default function ServiceEn({ title, text, isActive }) {
    const [isDisabled, setIsDisabled] = useState(false);
    const [isHidden, setIsHidden] = useState(true);

    useEffect(() => {
        setIsDisabled(!isActive);
    }, [isActive]);
    return (
        <div
            className={`grid grid-cols-[24px_1fr] gap-11 SM:gap-5 border-2 ${
                isDisabled ? "border-bgGray" : "border-customPurple hover:scale-[1.01]"
            }  rounded-[20px] items-center relative transition-all`}
        >
            <button
                className={`top-0 left-0 h-full w-full z-50 rounded-2xl ${
                    isDisabled ? "cursor-default" : "cursor-pointer"
                } ${isHidden ? "absolute" : "hidden"}`}
                disabled={isDisabled}
                onClick={() => setIsHidden(false)}
            ></button>
            <div
                className={`h-[calc(100%-25px)] w-6 ${
                    isDisabled ? "bg-bgGray" : "bg-customPurple/50"
                }  rounded-r-[20px]`}
            ></div>
            <div className="mr-5">
                <div className="h-28 flex items-center LG:h-24 SM:h-20">
                    <p className="font-bold text-2xl LG:text-xl SM:text-lg">{title}</p>
                </div>
                <div className={`${isHidden ? "hidden" : "block"}`}>
                    {text()}
                    <div className="h-28 flex items-center LG:h-24 SM:h-20">
                        <p className="font-bold text-2xl LG:text-xl SM:text-lg">
                            The cost of declaring the goods: from 5000 rubles.
                        </p>
                    </div>
                    <div className="w-full flex justify-end">
                        <button
                            className="px-4 py-2 bg-customYellow font-medium rounded-2xl mb-5"
                            onClick={() => setIsHidden(true)}
                        >
                            Hide
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
