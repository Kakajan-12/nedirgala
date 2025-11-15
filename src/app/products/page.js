/* eslint-disable @next/next/no-img-element */
"use client";

import { useTranslations } from "next-intl";

function ProductItem({
    name,
    text,
    imgUrl,
    weight,
    contain_place,
    amount,
    container,
}) {
    const t = useTranslations("products");
    return (
        <div className="grid p-6 border border-gray-200 gap-2 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl duration-200">
            <img
                className="w-full aspect-square object-contain"
                src={imgUrl}
                alt=""
            />
            <h5 className="font-bold text-[25px]">{name}</h5>
            <p className="font-bold">
                {t("net_weight")}: {weight}
            </p>
            <p className="font-bold">
                {t("container")}: {container}
            </p>
            <p>{text}</p>
            <p>
                <span className="font-bold">{t("storage_condition")}: </span>
                {contain_place}
            </p>
            <p className="font-bold">{t("no_gmo")}</p>
            <p className="font-bold">
                {t("shelf_life")}: {t("shelf_life_value")}
            </p>
            <p className="font-bold">
                {t("quantity")}: {amount}
            </p>
        </div>
    );
}

export default function Products() {
    const t = useTranslations("products");

    return (
        <div>
            <section className="">
                <div className="w-full bg-[#c32d2f] rounded-3xl overflow-hidden flex justify-center">
                    <img
                        src="..//assets/img/products/dayhan.png"
                        alt="dayhan"
                        className="h-[300px]"
                    />
                </div>
                <div className="my-8">
                    <label className="text-[30px] font-bold">
                        {t("page_title")}
                    </label>
                </div>
                <div className="products grid grid-cols-3 gap-10 my-6">
                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-1-removebg-preview.png"
                        }
                        name={t("tomato_paste")}
                        weight={"270g."}
                        container={t("container_pet")}
                        text={t("tomato_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 25 })}
                    />

                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-2-removebg-preview.png"
                        }
                        name={t("spicy_paste")}
                        weight={"270g."}
                        container={t("container_pet")}
                        text={t("spicy_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 25 })}
                    />

                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-3-removebg-preview.png"
                        }
                        name={t("tomato_paste")}
                        weight={"350g."}
                        container={t("container_plastic")}
                        text={t("tomato_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 24 })}
                    />

                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-4-removebg-preview.png"
                        }
                        name={t("spicy_paste")}
                        weight={"350g."}
                        container={t("container_plastic")}
                        text={t("spicy_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 24 })}
                    />

                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-5-removebg-preview.png"
                        }
                        name={t("tomato_paste")}
                        weight={"1000g."}
                        container={t("container_plastic")}
                        text={t("tomato_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 12 })}
                    />

                    <ProductItem
                        imgUrl={
                            "..//assets/img/products/ketchup-6-removebg-preview.png"
                        }
                        name={t("spicy_paste")}
                        weight={"1000g."}
                        container={t("container_plastic")}
                        text={t("spicy_paste_description")}
                        contain_place={t("storage_condition_value")}
                        amount={t("quantity_in_block", { count: 12 })}
                    />
                </div>
            </section>
            <a
                download={"DayhanCatatlog.pdf"}
                target="_blank"
                href="..//assets/pdf/Dayhan_Catalog.pdf"
            >
                <div className="hover:bg-slate-200 duration-200 rounded-2xl p-4 w-max flex items-center">
                    <img
                        src="..//assets/img/pdf.png"
                        alt="Download catalog"
                        className="max-w-[50px]"
                    />
                    <p className="text-[20px]">{t("download_catalog")}</p>
                </div>
            </a>
        </div>
    );
}
