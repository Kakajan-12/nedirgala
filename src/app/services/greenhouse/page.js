"use client";
import ServiceProject from "../../components/ServiceProject";
import { useTranslations } from "next-intl";

export default function Greenhouse() {
    const t = useTranslations("greenhouse");
    return (
        <ServiceProject
            title={t("title")}
            mainImageUrl={"/assets/img/greenhouse/teplisa1.webp"}
            location={t("location")}
            text={t("text")}
            imageUrlList={[
                "/assets/img/greenhouse/teplisa1.webp",
                "/assets/img/greenhouse/teplisa2.webp",
                "/assets/img/greenhouse/teplisa3.webp",
                "/assets/img/greenhouse/teplisa4.webp",
                "/assets/img/greenhouse/teplisa5.webp",
                "/assets/img/greenhouse/teplisa6.webp",
                "/assets/img/greenhouse/teplisa7.webp",
                "/assets/img/greenhouse/teplisa8.webp",
                "/assets/img/greenhouse/teplisa9.webp",
                "/assets/img/greenhouse/teplisa10.webp",
                "/assets/img/greenhouse/teplisa11.webp",
                "/assets/img/greenhouse/teplisa12.webp",
                "/assets/img/greenhouse/teplisa13.webp",
            ]}
            products={t("products")}
            area={t("area")}
        ></ServiceProject>
    );
}
