"use client";

import Tab from "../../components/Tab";
import ServiceProject from "../../components/ServiceProject";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function Lift() {
    const [activeIndex, setActiveIndex] = useState(0);
    const t = useTranslations("lift");

    const projects = [
        {
            id: "abraylyMebel",
            mainImageUrl: "..//assets/img/lift/abrayly-mebel.JPG",
            imageUrlList: [
                "..//assets/img/lift/abrayly-mebel.JPG",
                "..//assets/img/lift/abrayly-mebel1.JPG",
                "..//assets/img/lift/abrayly-mebel2.JPG",
                "..//assets/img/lift/abrayly-mebel3.JPG",
                "..//assets/img/lift/abrayly-mebel4.JPG",
                "..//assets/img/lift/abrayly-mebel5.JPG",
                "..//assets/img/lift/abrayly-mebel6.JPG",
            ],
        },
        {
            id: "altynZaman",
            mainImageUrl: "..//assets/img/lift/altyn-zaman.jpg",
            imageUrlList: [
                "..//assets/img/lift/altyn-zaman.jpg",
                "..//assets/img/lift/altyn-zaman1.jpg",
                "..//assets/img/lift/altyn-zaman2.jpg",
                "..//assets/img/lift/altyn-zaman3.jpg",
                "..//assets/img/lift/altyn-zaman4.jpg",
                "..//assets/img/lift/altyn-zaman5.jpg",
                "..//assets/img/lift/altyn-zaman6.jpg",
            ],
        },
        {
            id: "ashgabatMall",
            mainImageUrl: "..//assets/img/lift/ashgabat-mall.jpg",
            imageUrlList: [
                "..//assets/img/lift/ashgabat-mall.jpg",
                "..//assets/img/lift/ashgabat-mall1.jpg",
                "..//assets/img/lift/ashgabat-mall2.jpg",
                "..//assets/img/lift/ashgabat-mall3.jpg",
            ],
        },
        {
            id: "kamilMarket",
            mainImageUrl: "..//assets/img/lift/kamil.JPG",
            imageUrlList: [
                "..//assets/img/lift/kamil.JPG",
                "..//assets/img/lift/kamil1.jpg",
                "..//assets/img/lift/kamil2.jpg",
            ],
        },
    ];

    const activeProject = projects[activeIndex];

    return (
        <div className="grid gap-4">
            <div>
                <Tab
                    onChange={setActiveIndex}
                    buttons={projects.map((p) => t(`projects.${p.id}.title`))}
                ></Tab>
            </div>
            <ServiceProject
                title={t(`projects.${activeProject.id}.title`)}
                mainImageUrl={activeProject.mainImageUrl}
                location={`${t("Ashgabat")}, ${t("Turkmenistan")}`}
                text={t("text")}
                imageUrlList={activeProject.imageUrlList}
            />
        </div>
    );
}
