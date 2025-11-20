/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { products } from "./products";

function ProductItem({ id, nameKey, imgUrl, weight, containerKey }) {
    const t = useTranslations("products");
    return (
        <div className="grid bg-white gap-2 rounded-2xl overflow-hidden duration-200">
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
            <div className="p-8 grid gap-5">
                <span className="font-bold text-[30px] text-[#C32D2F] text-center">
                    {t(nameKey)}
                </span>
                <div className="flex items-center gap-4">
                    <img
                        className="w-[33px] aspect-square object-contain"
                        alt=""
                        src={"/assets/img/weight.png"}
                    ></img>
                    <div className="flex items-center gap-1 text-[16px]">
                        <label>{t("weight")}</label> <span>{weight}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        className="w-[33px] aspect-square object-contain"
                        alt=""
                        src={"/assets/img/bottle.png"}
                    ></img>
                    <div className="flex items-center gap-1 text-[16px]">
                        <label>{t("packaging")}</label>{" "}
                        <span>{t(containerKey)}</span>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <img
                        className="w-[33px] aspect-square object-contain"
                        alt=""
                        src={"/assets/img/calendar.png"}
                    ></img>
                    <div className="flex items-center gap-1 text-[16px]">
                        <label>{t("shelf_life")}</label>{" "}
                        <span>{t("shelf_life_value")}</span>
                    </div>
                </div>
            </div>
            <Link href={`/products/${id}`}>
                <button className="bg-[#336F4D] hover:opacity-90 duration-200 text-white text-[25px] p-4 w-full">
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
                    src="/assets/img/products/dayhan.png"
                    alt="dayhan"
                    className="max-h-[300px] h-full "
                />
            </div>
            <section className="px-[55px]">
                <div className="my-8 grid gap-2">
                    <label className="text-[65px] font-bold">
                        {t("page_title")}
                    </label>
                    <label className="text-[35px]">{t("page_subtitle")}</label>
                </div>
                <div className="products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-10 my-6">
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
            {/* <a
                download={"DayhanCatatlog.pdf"}
                target="_blank"
                href="/assets/pdf/Dayhan_Catalog.pdf"
            >
                <div className="hover:bg-slate-200 duration-200 rounded-2xl p-4 w-max flex items-center">
                    <img
                        src="/assets/img/pdf.png"
                        alt="Download catalog"
                        className="max-w-[50px]"
                    />
                    <p className="text-[20px]">{t("download_catalog")}</p>
                </div>
            </a> */}
        </div>
    );
}
