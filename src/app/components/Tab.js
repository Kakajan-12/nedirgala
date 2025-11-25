"use client";
import { useState } from "react";

export default function Tab({ onChange = (index) => {}, buttons = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex gap-2 w-full overflow-x-auto ">
            {buttons?.map((item, index) => {
                return (
                    <button
                        onClick={() => {
                            onChange(index);
                            setActiveIndex(index);
                        }}
                        className={
                            "py-1 md:py-2 md:px-4 px-2 rounded-full text-[14px] md:text-[25px] text-[#1F1F30]  hover:bg-[#F0F7E8] border hover:border-[#017344] duration-200  " +
                            (activeIndex == index
                                ? "bg-[#F0F7E8] border-[#017344]"
                                : "text-[#969494] border")
                        }
                        key={index}
                    >
                        {item}
                    </button>
                );
            })}
        </div>
    );
}
