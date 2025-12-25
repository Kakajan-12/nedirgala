"use client";
import { useState } from "react";
import Gallery from "../../components/Gallery";
import Tab from "../../components/Tab";
import { useTranslations } from "next-intl";

const technicTabs = [
    {
        id: "construction",
        images: [
            "/assets/img/technics/tehnika1.webp",
            "/assets/img/technics/tehnika2.webp",
            "/assets/img/technics/tehnika3.webp",
            "/assets/img/technics/tehnika4.webp",
            "/assets/img/technics/tehnika5.webp",
            "/assets/img/technics/tehnika6.webp",
            "/assets/img/technics/tehnika7.webp",
            "/assets/img/technics/tehnika8.webp",
            "/assets/img/technics/tehnika9.webp",
            "/assets/img/technics/tehnika10.webp",
            "/assets/img/technics/tehnika11.webp",
            "/assets/img/technics/tehnika12.webp",
            "/assets/img/technics/tehnika13.webp",
            "/assets/img/technics/tehnika14.webp",
            "/assets/img/technics/tehnika15.webp",
            "/assets/img/technics/tehnika16.webp",
            "/assets/img/technics/tehnika17.webp",
            "/assets/img/technics/tehnika18.webp",
            "/assets/img/technics/tehnika19.webp",
            "/assets/img/technics/tehnika20.webp",
            "/assets/img/technics/tehnika21.webp",
            "/assets/img/technics/tehnika22.webp",
            "/assets/img/technics/tehnika23.webp",
        ],
    },
    {
        id: "agricultural",
        images: [
            "/assets/img/technics/oba-hojalyk1.webp",
            "/assets/img/technics/oba-hojalyk2.webp",
            "/assets/img/technics/oba-hojalyk3.webp",
            "/assets/img/technics/oba-hojalyk4.webp",
            "/assets/img/technics/oba-hojalyk5.webp",
            "/assets/img/technics/oba-hojalyk6.webp",
            "/assets/img/technics/oba-hojalyk7.webp",
            "/assets/img/technics/oba-hojalyk8.webp",
            "/assets/img/technics/oba-hojalyk9.webp",
            "/assets/img/technics/oba-hojalyk10.webp",
            "/assets/img/technics/oba-hojalyk11.webp",
            "/assets/img/technics/oba-hojalyk12.webp",
            "/assets/img/technics/oba-hojalyk13.webp",
            "/assets/img/technics/oba-hojalyk14.webp",
            "/assets/img/technics/oba-hojalyk15.webp",
            "/assets/img/technics/oba-hojalyk16.webp",
            "/assets/img/technics/oba-hojalyk17.webp",
            "/assets/img/technics/oba-hojalyk18.webp",
            "/assets/img/technics/oba-hojalyk19.webp",
            "/assets/img/technics/oba-hojalyk20.webp",
            "/assets/img/technics/oba-hojalyk21.webp",
            "/assets/img/technics/oba-hojalyk22.webp",
            "/assets/img/technics/oba-hojalyk23.webp",
            "/assets/img/technics/oba-hojalyk24.webp",
            "/assets/img/technics/oba-hojalyk25.webp",
            "/assets/img/technics/oba-hojalyk26.webp",
            "/assets/img/technics/oba-hojalyk27.webp",
            "/assets/img/technics/oba-hojalyk28.webp",
            "/assets/img/technics/oba-hojalyk29.webp",
        ],
    },
];

export default function Technics() {
    const [activeTab, setActiveTab] = useState(0);
    const t = useTranslations("technics");
    return (
        <div className="container mx-auto px-4">
            <div className="grid gap-4 md:gap-[85px] my-4 md:px-[55px] px-[20px]">
                <div className="flex justify-items-center mx-auto">
                    <Tab
                        onChange={setActiveTab}
                        buttons={technicTabs.map((tab) => t(`tabs.${tab.id}`))}
                    ></Tab>
                </div>
                <Gallery images={technicTabs[activeTab].images}></Gallery>
            </div>
        </div>

    );
}
