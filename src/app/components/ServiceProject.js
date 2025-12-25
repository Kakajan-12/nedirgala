/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import {useTranslations} from "next-intl";
import FancyboxWrapper from "../components/FancyboxWrapper";

function IconValueData({value = "", icon = "", title = ""}) {
    return (
        <div
            className={
                "rounded-[15px] p-[15px] shadow-lg bg-white shadow-[#00000040]  items-start gap-2 w-full flex justify-start grid-rows-[max-content_auto]"
            }
        >
            <img
                className=" w-[30px] md:w-[60px] aspect-square"
                alt={icon}
                src={icon}
            ></img>
            <div className="grid content-start">
                <p className="font-bold md:text-[25px] text-[16px]">
                    {title}
                </p>
                <span className="md:text-[20px] text-[12px] font-medium">
                    {value}
                </span>
            </div>
        </div>
    );
}

export default function ServiceProject({
                                           title,
                                           text,
                                           location,
                                           products,
                                           area,
                                           mainImageUrl,
                                           imageUrlList,
                                       }) {
    const t = useTranslations("ServiceProject");

    return (

        <div className="grid gap-4">
            <div className="relative h-[80vh] mt-[-188px] md:h-screen  overflow-hidden">
                <div className="relative h-full">
                    <div className="bg-black/30 absolute w-full h-full"></div>
                    <img
                        className="w-full h-full object-cover"
                        src={mainImageUrl}
                        alt=""
                    />
                </div>
                <div
                    className="absolute top-0 text-white grid content-end md:p-[55px] p-5 text-[25px] md:text-[50px] w-full h-full bg-black/13">
                    <label>{title}</label>
                </div>
            </div>
            <div className="container mx-auto px-4">

                <div className="grid px-[25px] sm:px-[55px] gap-4 md:gap-[55px]">
                    {location != undefined && (
                        <div
                            className={`gap-5 grid grid-cols-1  ${
                                products != undefined
                                    ? ` lg:grid-cols-3 `
                                    : ` lg:grid-cols-2 `
                            }`}
                        >
                            <IconValueData
                                title={t("location")}
                                value={location}
                                icon="/assets/img/location.png"
                            ></IconValueData>

                            {products && (
                                <IconValueData
                                    title={t("products")}
                                    value={products}
                                    icon="/assets/img/cherry.png"
                                ></IconValueData>
                            )}
                            <IconValueData
                                title={t("area")}
                                value={area}
                                icon="/assets/img/area.png"
                            ></IconValueData>
                        </div>
                    )}
                    {text && (
                        <div className="bg-white md:p-[60px] p-5 rounded-[15px] md:text-[22px] text-[14px]">
                            <p>{text}</p>
                        </div>
                    )}
                    <label className="text-3xl font-medium sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                        {t("gallery")}
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <FancyboxWrapper>
                            {imageUrlList.map((item, index) => {
                                return (
                                    <a
                                        key={index}
                                        className="rounded-2xl overflow-hidden aspect-43/32 border border-gray-200"
                                        data-fancybox="gallery"
                                        data-src={item}
                                    >
                                        <img
                                            className="object-cover aspect-square w-full h-full"
                                            src={item}
                                        />
                                    </a>
                                );
                            })}
                        </FancyboxWrapper>
                    </div>
                </div>
            </div>
        </div>
    );
}
