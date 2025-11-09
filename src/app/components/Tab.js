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
                            "py-2 px-4 rounded-full  hover:bg-green-600 hover:text-white border border-slate-300 duration-200 " +
                            (activeIndex == index
                                ? "bg-green-600 text-white"
                                : "bg-white text-slate-600")
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
