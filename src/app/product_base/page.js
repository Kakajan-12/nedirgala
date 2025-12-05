"use client";
import { useTranslations } from "next-intl";
import ServiceProject from "../components/ServiceProject";

export default function ProductBase() {
    const t = useTranslations("product_base");

    const galleryImages = [
        "/assets/img/product-base/ng1.webp",
        "/assets/img/product-base/ng2.webp",
        "/assets/img/product-base/ng3.webp",
        "/assets/img/product-base/ng4.webp",
        "/assets/img/product-base/ng5.webp",
        "/assets/img/product-base/ng6.webp",
        "/assets/img/product-base/ng7.webp",
    ];

    return (
        <ServiceProject
            area={t("area_value")}
            location={t("location_value")}
            title={t("page_title")}
            mainImageUrl={galleryImages[0]}
            imageUrlList={galleryImages}
        ></ServiceProject>
    );
}
