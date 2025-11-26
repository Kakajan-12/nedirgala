"use client";

/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { products } from "../products";
import { notFound, useParams } from "next/navigation";

export default function ProductDetail({}) {
    const t = useTranslations("products");
    const { id } = useParams();

    // Find the product by its ID. Note that params.id is a string.
    const product = products.find((p) => p.id.toString() === id);

    // If no product is found, render the 404 page.
    if (!product) {
        notFound();
    }

    return (
        <div className="mx-auto bg-white w-[90%] rounded-2xl md:p-8 p-4 font-sans max-w-[1330px]">
            <div className="grid grid-cols-[max-content_auto] gap-6 mb-10">
                <div className="">
                    <img
                        src={product.imgUrl}
                        alt={t(product.nameKey)}
                        className="object-contain h-[180px] md:h-[390px]"
                    />
                </div>

                <div className="grid items-center">
                    <h1 className="text-[20px] md:text-[70px] font-bold text-center mb-8">
                        {t(product.nameKey)}
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 text-[23px] md:gap-[45px] gap-5 text-center items-center w-max mx-auto">
                        <div className="grid justify-items-center h-max md:gap-4 gap-1">
                            <div className="flex items-center justify-center w-[60px] aspect-square bg-[#F0F7E8] rounded-full">
                                <img
                                    className="md:w-[66px] w-[30px] aspect-square object-contain"
                                    alt=""
                                    src={"/assets/img/weight.png"}
                                ></img>
                            </div>
                            <p className="text-[14px]">
                                {t("net_weight")}: {product.weight}
                            </p>
                        </div>
                        <div className="grid justify-items-center h-max md:gap-4 gap-1">
                            <div className="flex items-center justify-center w-[60px] aspect-square bg-[#F0F7E8] rounded-full">
                                <img
                                    className="md:w-[66px] w-[30px] aspect-square object-contain"
                                    alt=""
                                    src={"/assets/img/bottle.png"}
                                ></img>
                            </div>
                            <p className="text-[14px]">
                                {t("packaging")}: {t(product.containerKey)}
                            </p>
                        </div>
                        <div className="grid justify-items-center h-max md:gap-4 gap-1">
                            <div className="flex items-center justify-center w-[60px] aspect-square bg-[#F0F7E8] rounded-full">
                                <img
                                    className="md:w-[66px] w-[30px] aspect-square object-contain"
                                    alt=""
                                    src={"/assets/img/calendar.png"}
                                ></img>
                            </div>
                            <p className="text-[14px]">{t("shelf_life")}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-[18px] md:text-[25px]">
                <div>
                    <h2 className="text-[25px] md:text-[40px] font-semibold mb-4">
                        {t("composition")}:
                    </h2>
                    <p>{t(product.textKey)}</p>
                </div>

                <div>
                    <h2 className="text-[25px] md:text-[35px] font-semibold mb-4">
                        {t("nutritional_value")}
                    </h2>
                    <p>{t("carbohydrates")}</p>
                    <p>{t("energy_value")}</p>

                    <div className="bg-[#F0F7E8] p-4 rounded-xl grid grid-cols-[max-content_auto_max-content] mt-6 gap-[30px]">
                        <img
                            className="object-contain md:w-[46px] w-[30px] h-max"
                            alt=""
                            src={"/assets/img/double-comma.png"}
                        ></img>
                        <p>
                            <span className="font-bold">
                                {t("high_quality")}
                            </span>{" "}
                            {t("high_quality_desc")}
                        </p>
                        <div className="flex items-end">
                            <img
                                className="object-contain md:w-[46px] w-[30px] h-max rotate-180"
                                alt=""
                                src={"/assets/img/double-comma.png"}
                            ></img>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-10 text-[18px] md:text-[25px]">
                <h2 className="md:text-[40px] text-[25px] font-semibold mb-4">
                    {t("order_guarantee")}
                </h2>
                <p>
                    {t("storage_condition")}: {t("storage_condition_value")}
                </p>
                <p>{t("no_gmo")}</p>
                <p>
                    {t("shelf_life")}: {t("shelf_life_value")}
                </p>
                <p>{t(product.amountKey, { count: product.amountCount })}</p>
            </div>
        </div>
    );
}
