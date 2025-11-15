"use client";
import { useTranslations } from "next-intl";
import Image from "next/image";
import FancyboxWrapper from "../components/FancyboxWrapper";

export default function ProductBase() {
    const t = useTranslations("product_base");

    const galleryImages = [
        "/assets/img/product-base/ng1.jpg",
        "/assets/img/product-base/ng2.jpg",
        "/assets/img/product-base/ng3.jpg",
        "/assets/img/product-base/ng4.jpg",
        "/assets/img/product-base/ng5.jpg",
        "/assets/img/product-base/ng6.jpg",
        "/assets/img/product-base/ng7.jpg",
    ];

    return (
        <div className="container grid gap-4">
            <h1 className="text-[40px] font-bold">{t("page_title")}</h1>
            <div className="grid grid-cols-2 gap-8">
                <img
                    className="rounded-2xl"
                    src="/assets/img/product-base/ng1.jpg"
                    alt=""
                />
                <div className="project__decription">
                    <div className="project__details grid content-between">
                        <div className="project__text">
                            <p className="font-bold">{t("location_label")}</p>
                            <p>{t("location_value")}</p>
                        </div>
                        <div className="project__text">
                            <p className="font-bold">{t("product_label")}</p>
                            <p></p>
                        </div>
                        <div className="project__text">
                            <p className="font-bold">{t("area_label")}</p>
                            <p>{t("area_value")}</p>
                        </div>
                        <div className="project__goal">
                            <p>{t("description")}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="project__gallery">
                <FancyboxWrapper>
                    <div className="grid grid-cols-3 gap-4">
                        {galleryImages.map((src, index) => (
                            <a
                                key={src}
                                className="project__photo rounded-2xl overflow-hidden"
                                data-fancybox="gallery"
                                href={src}
                            >
                                <Image
                                    src={src}
                                    alt={`${t("page_title")} - Image ${
                                        index + 1
                                    }`}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full"
                                />
                            </a>
                        ))}
                    </div>
                </FancyboxWrapper>
            </div>
        </div>
    );
}
