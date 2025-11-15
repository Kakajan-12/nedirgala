"use client";
import ServiceProject from "../../components/ServiceProject";
import { useTranslations } from "next-intl";

export default function Tomate() {
    const t = useTranslations("tomate");
    return (
        <ServiceProject
            title={t("title")}
            mainImageUrl={"/assets/img/tomato_plant/tomato2.jpg"}
            location={t("location")}
            text={t("text")}
            imageUrlList={[
                "/assets/img/tomato_plant/tomato1.jpg",
                "/assets/img/tomato_plant/tomato3.jpg",
                "/assets/img/tomato_plant/tomato4.jpg",
                "/assets/img/tomato_plant/tomato5.jpg",
                "/assets/img/tomato_plant/tomato6.jpg",
            ]}
            products={t("products")}
            area={t("area")}
        ></ServiceProject>
    );
}
