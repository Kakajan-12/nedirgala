/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

"use client";
import { useTranslations } from "next-intl";
import FancyboxWrapper from "../components/FancyboxWrapper";

export default function ServiceProject({
    title,
    text,
    location,
    products,
    area,
    mainImageUrl,
    imageUrlList,
    client,
    building_type,
    year,
}) {
    const t = useTranslations("ServiceProject");
    return (
        <div className="grid gap-4">
            <div className="relative  h-30vh sm:h-[80vh] overflow-hidden">
                <img
                    className="w-full h-full object-cover"
                    src={mainImageUrl}
                    alt=""
                />
                <div className="absolute top-0 text-white grid content-end sm:p-[55px] p-[20px] text-[30px] sm:text-[65px] w-full h-full bg-black/13">
                    <label>{title}</label>
                </div>
            </div>

            <div className="grid px-[25px] sm:px-[55px]  gap-[55px]">
                {location != undefined && (
                    <div className="grid grid-cols-1  md:flex md:flex-wrap justify-between gap-5 my-4">
                        <div
                            className={
                                "rounded-[15px] p-[15px] shadow-lg bg-white shadow-[#00000040] min-w-[350px]  w-full grid grid-cols-[max-content_auto] " +
                                (products == undefined
                                    ? " md:max-w-[45%]"
                                    : " md:max-w-[30%]")
                            }
                        >
                            <img
                                className="w-[109px] aspect-square"
                                alt=""
                                src={"/assets/img/location.png"}
                            ></img>
                            <div className="grid content-between">
                                <label className="font-bold text-[35px]">
                                    {t("location")}
                                </label>
                                <label className="text-[20px] font-medium">
                                    {location}
                                </label>
                            </div>
                        </div>
                        {products && (
                            <div
                                className={
                                    "rounded-[15px] p-[15px] shadow-lg bg-white shadow-[#00000040] min-w-[350px]  w-full grid grid-cols-[max-content_auto] " +
                                    (products == undefined
                                        ? " md:max-w-[45%]"
                                        : " md:max-w-[30%]")
                                }
                            >
                                <img
                                    className="w-[109px] aspect-square"
                                    alt=""
                                    src={"/assets/img/cherry.png"}
                                ></img>
                                <div className="grid content-between">
                                    <label className="font-bold text-[35px]">
                                        {t("products")}
                                    </label>
                                    <label className="text-[20px] font-medium">
                                        {products}
                                    </label>
                                </div>
                            </div>
                        )}
                        <div
                            className={
                                "rounded-[15px] p-[15px] shadow-lg bg-white shadow-[#00000040] min-w-[350px]  w-full grid grid-cols-[max-content_auto] " +
                                (products == undefined
                                    ? " md:max-w-[45%]"
                                    : " md:max-w-[30%]")
                            }
                        >
                            <img
                                className="w-[109px] aspect-square"
                                alt=""
                                src={"/assets/img/area.png"}
                            ></img>
                            <div className="grid content-between">
                                <label className="font-bold text-[35px]">
                                    {t("area")}
                                </label>
                                <label className="text-[20px] font-medium">
                                    {area}
                                </label>
                            </div>
                        </div>
                    </div>
                )}
                {text && (
                    <div className="bg-white p-[60px] rounded-[15px] text-[22px]">
                        <p>{text}</p>
                    </div>
                )}
                <label className="text-[50px] font-medium">
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
    );
}
