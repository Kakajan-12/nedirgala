"use client";

import { useTranslations } from "next-intl";
import { ProjectItem } from "@/app/components/ProjectItem";

export const lifts = [
    {
        id: "1",
        titleKey: "projects.abraylyMebel.title",
        mainImageUrl: "..//assets/img/lift/abrayly-mebel.JPG",
        imageUrlList: [
            "/assets/img/lift/abrayly-mebel.JPG",
            "/assets/img/lift/abrayly-mebel1.JPG",
            "/assets/img/lift/abrayly-mebel2.JPG",
            "/assets/img/lift/abrayly-mebel3.JPG",
            "/assets/img/lift/abrayly-mebel4.JPG",
            "/assets/img/lift/abrayly-mebel5.JPG",
            "/assets/img/lift/abrayly-mebel6.JPG",
        ],
    },
    {
        id: "2",
        titleKey: "projects.altynZaman.title",
        mainImageUrl: "/assets/img/lift/altyn-zaman.jpg",
        imageUrlList: [
            "/assets/img/lift/altyn-zaman.jpg",
            "/assets/img/lift/altyn-zaman1.jpg",
            "/assets/img/lift/altyn-zaman2.jpg",
            "/assets/img/lift/altyn-zaman3.jpg",
            "/assets/img/lift/altyn-zaman4.jpg",
            "/assets/img/lift/altyn-zaman5.jpg",
            "/assets/img/lift/altyn-zaman6.jpg",
        ],
    },
    {
        id: "3",
        titleKey: "projects.ashgabatMall.title",
        mainImageUrl: "/assets/img/lift/ashgabat-mall.jpg",
        imageUrlList: [
            "/assets/img/lift/ashgabat-mall.jpg",
            "/assets/img/lift/ashgabat-mall1.jpg",
            "/assets/img/lift/ashgabat-mall2.jpg",
            "/assets/img/lift/ashgabat-mall3.jpg",
        ],
    },
    {
        id: "4",
        titleKey: "projects.kamilMarket.title",
        mainImageUrl: "/assets/img/lift/kamil.JPG",
        imageUrlList: [
            "/assets/img/lift/kamil.JPG",
            "/assets/img/lift/kamil1.jpg",
            "/assets/img/lift/kamil2.jpg",
        ],
    },
];

export default function Lift() {
    const t = useTranslations("lift");

    return (
        <div className="grid md:my-4 px-4 md:px-[55px]">
            <h3 className="text-[30px] md:text-[70px] md:my-4 text-[#0C0C0C]">
                {t("pageTitle")}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center  my-4 mb-8">
                {lifts.map((project, index) => (
                    <ProjectItem
                        imgSrc={project.mainImageUrl}
                        href={"/services/lift/" + project.id}
                        key={index + 1}
                        title={t(project.titleKey)}
                    />
                ))}
            </div>
        </div>
    );
}
