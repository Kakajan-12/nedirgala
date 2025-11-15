"use client";
import ServiceProject from "../../components/ServiceProject";
import { useTranslations } from "next-intl";

export default function Greenhouse() {
    const t = useTranslations("greenhouse");
    return (
        <ServiceProject
            title={t("title")}
            mainImageUrl={"/assets/img/greenhouse/teplisa1.JPG"}
            location={t("location")}
            text={t("text")}
            imageUrlList={[
                "/assets/img/greenhouse/teplisa1.JPG",
                "/assets/img/greenhouse/teplisa2.JPG",
                "/assets/img/greenhouse/teplisa3.JPG",
                "/assets/img/greenhouse/teplisa4.JPG",
                "/assets/img/greenhouse/teplisa5.JPG",
                "/assets/img/greenhouse/teplisa6.JPG",
                "/assets/img/greenhouse/teplisa7.JPG",
                "/assets/img/greenhouse/teplisa8.JPG",
                "/assets/img/greenhouse/teplisa9.JPG",
                "/assets/img/greenhouse/teplisa10.JPG",
                "/assets/img/greenhouse/teplisa11.JPG",
                "/assets/img/greenhouse/teplisa12.JPG",
                "/assets/img/greenhouse/teplisa13.JPG",
            ]}
            products={t("products")}
            area={t("area")}
        ></ServiceProject>
    );
}
