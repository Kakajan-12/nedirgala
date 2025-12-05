/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { products } from "./products";

function ProductItem({ id, nameKey, imgUrl, weight, containerKey }) {
    const t = useTranslations("products");
    return (
        <div className="grid grid-rows-[max-content_auto_max-content] bg-white rounded-2xl overflow-hidden duration-200">
            <div className="relative overflow-hidden">
                <img
                    className="w-full aspect-53/34"
                    src={"/assets/img/product-back.png"}
                    alt=""
                />
                <img
                    className="absolute top-0 bottom-0 h-[95%] w-auto m-auto left-0 right-0"
                    alt=""
                    src={imgUrl}
                ></img>
            </div>
            <div className="md:p-6 p-4 grid md:gap-5 gap-3">
                <span className="font-bold text-[18px] md:text-[30px] text-[#C32D2F] text-center">
                    {t(nameKey)}
                </span>
                <div className="flex items-center md:gap-4 gap-2">
                    <img
                        className="md:w-[33px] w-5 aspect-square object-contain"
                        alt=""
                        src={"/assets/img/weight.png"}
                    ></img>
                    <div className="flex items-center gap-1 md:text-[16px] text-[14px]">
                        <label>{t("weight")}</label> <span>{weight}</span>
                    </div>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                    <img
                        className="md:w-[33px] w-5 aspect-square object-contain"
                        alt=""
                        src={"/assets/img/bottle.png"}
                    ></img>
                    <div className="flex items-center gap-1 md:text-[16px] text-[14px]">
                        <label>{t("packaging")}</label>{" "}
                        <span>{t(containerKey)}</span>
                    </div>
                </div>
                <div className="flex items-center md:gap-4 gap-2">
                    <img
                        className="md:w-[33px] w-5 aspect-square object-contain"
                        alt=""
                        src={"/assets/img/calendar.png"}
                    ></img>
                    <div className="flex items-center flex-wrap gap-1 md:text-[16px] text-[14px]">
                        <span>{t("shelf_life")}</span>{" "}
                        <span>{t("shelf_life_value")}</span>
                    </div>
                </div>
            </div>
            <Link href={`/products/${id}`}>
                <button className="bg-[#336F4D] hover:opacity-90 duration-200 text-white md:text-[25px] text-[14px] md:p-4 p-2 w-full">
                    {t("detail")}
                </button>
            </Link>
        </div>
    );
}

export default function Products() {
    const t = useTranslations("products");

    return (
        <div className="grid">
            <div className="w-full bg-[#c32d2f] overflow-hidden flex justify-center">
                <img
                    src="/assets/img/products/dayhan.webp"
                    alt="dayhan"
                    className="md:max-h-[300px] max-h-[150px] h-full "
                />
            </div>
            <section className="md:px-[55px] px-5">
                <div className="my-8 grid gap-2">
                    <label className="md:text-[65px] text-[30px] font-bold">
                        {t("page_title")}
                    </label>
                    <label className="text-[16px] md:text-[35px]">
                        {t("page_subtitle")}
                    </label>
                </div>
                <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-10 gap-4 my-6">
                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            id={product.id}
                            imgUrl={product.imgUrl}
                            nameKey={product.nameKey}
                            weight={product.weight}
                            containerKey={product.containerKey}
                            amountKey={product.amountKey}
                            amountCount={product.amountCount}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}
