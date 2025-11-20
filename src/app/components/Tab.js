"use client";
import { useState } from "react";

export default function Tab({ onChange = (index) => {}, buttons = [] }) {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <div className="flex flex-wrap gap-2">
            {buttons?.map((item, index) => {
                return (
                    <button
                        onClick={() => {
                            onChange(index);
                            setActiveIndex(index);
                        }}
                        className={
                            "py-2 px-4 rounded-full text-[#1F1F30]  hover:bg-[#F0F7E8] border hover:border-[#017344] duration-200  " +
                            (activeIndex == index
                                ? "bg-[#F0F7E8] border-[#017344]"
                                : "text-[#969494] border-transparent")
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
