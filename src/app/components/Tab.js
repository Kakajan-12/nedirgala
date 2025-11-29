"use client";
import { useState } from "react";

export default function Tab({ onChange = (index) => {}, buttons = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex gap-2 w-full overflow-x-auto p-4">
            {buttons?.map((item, index) => {
                return (
                    <button
                        onClick={() => {
                            onChange(index);
                            setActiveIndex(index);
                        }}
                        className={
                            "py-1 md:py-2 md:px-4 px-2 rounded-full text-[14px] md:text-[25px] text-[#1F1F30] border hover:shadow-md duration-200  " +
                            (activeIndex == index
                                ? "bg-[#017344] text-white "
                                : "text-[#969494]")
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
