"use client";
import { useState } from "react";
import Gallery from "../../components/Gallery";
import Tab from "../../components/Tab";

export default function Technics() {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="grid gap-4 my-4">
            <div className="flex justify-center">
                <Tab
                    onChange={(index) => {
                        setActiveTab(index);
                    }}
                    buttons={["Gurluşyk tehnikalar", "Oba hojalyk tehnikalar"]}
                ></Tab>
            </div>
            {activeTab == 0 && (
                <Gallery
                    images={[
                        "../assets/img/technics/tehnika1.jpg",
                        "../assets/img/technics/tehnika2.jpg",
                        "../assets/img/technics/tehnika3.jpg",
                        "../assets/img/technics/tehnika4.jpg",
                        "../assets/img/technics/tehnika5.jpg",
                        "../assets/img/technics/tehnika6.jpg",
                        "../assets/img/technics/tehnika7.jpg",
                        "../assets/img/technics/tehnika8.jpg",
                        "../assets/img/technics/tehnika9.jpg",
                        "../assets/img/technics/tehnika10.jpg",
                        "../assets/img/technics/tehnika11.jpg",
                        "../assets/img/technics/tehnika12.jpg",
                        "../assets/img/technics/tehnika13.jpg",
                        "../assets/img/technics/tehnika14.jpg",
                        "../assets/img/technics/tehnika15.jpg",
                        "../assets/img/technics/tehnika16.jpg",
                        "../assets/img/technics/tehnika17.jpg",
                        "../assets/img/technics/tehnika18.jpg",
                        "../assets/img/technics/tehnika19.jpg",
                        "../assets/img/technics/tehnika20.jpg",
                        "../assets/img/technics/tehnika21.jpg",
                        "../assets/img/technics/tehnika22.jpg",
                        "../assets/img/technics/tehnika23.jpg",
                    ]}
                ></Gallery>
            )}
            {activeTab == 1 && (
                <Gallery
                    images={[
                        "../assets/img/technics/oba-hojalyk1.jpg",
                        "../assets/img/technics/oba-hojalyk2.jpg",
                        "../assets/img/technics/oba-hojalyk3.jpg",
                        "../assets/img/technics/oba-hojalyk4.jpg",
                        "../assets/img/technics/oba-hojalyk5.jpg",
                        "../assets/img/technics/oba-hojalyk6.jpg",
                        "../assets/img/technics/oba-hojalyk7.jpg",
                        "../assets/img/technics/oba-hojalyk8.jpg",
                        "../assets/img/technics/oba-hojalyk9.jpg",
                        "../assets/img/technics/oba-hojalyk10.jpg",
                        "../assets/img/technics/oba-hojalyk11.jpg",
                        "../assets/img/technics/oba-hojalyk12.jpg",
                        "../assets/img/technics/oba-hojalyk13.jpg",
                        "../assets/img/technics/oba-hojalyk14.jpg",
                        "../assets/img/technics/oba-hojalyk15.jpg",
                        "../assets/img/technics/oba-hojalyk16.jpg",
                        "../assets/img/technics/oba-hojalyk17.jpg",
                        "../assets/img/technics/oba-hojalyk18.jpg",
                        "../assets/img/technics/oba-hojalyk19.jpg",
                        "../assets/img/technics/oba-hojalyk20.jpg",
                        "../assets/img/technics/oba-hojalyk21.jpg",
                        "../assets/img/technics/oba-hojalyk22.jpg",
                        "../assets/img/technics/oba-hojalyk23.jpg",
                        "../assets/img/technics/oba-hojalyk24.jpg",
                        "../assets/img/technics/oba-hojalyk25.jpg",
                        "../assets/img/technics/oba-hojalyk26.jpg",
                        "../assets/img/technics/oba-hojalyk27.jpg",
                        "../assets/img/technics/oba-hojalyk28.jpg",
                        "../assets/img/technics/oba-hojalyk29.jpg",
                    ]}
                ></Gallery>
            )}
        </div>
    );
}
