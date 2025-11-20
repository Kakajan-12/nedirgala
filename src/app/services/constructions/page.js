"use client";
/* eslint-disable @next/next/no-img-element */
import { useTranslations } from "next-intl";
import { constructionProjects } from "./constructions";
import { ProjectItem } from "@/app/components/ProjectItem";

export default function ConstructionProjects() {
    const t = useTranslations("constructions");

    return (
        <div className="grid my-4 px-[55px]">
            <h3 className="text-[70px] my-4 text-[#0C0C0C]">
                {t("pageTitle")}
            </h3>
            <div className="grid grid-cols-3 gap-8 justify-center  my-4 mb-8">
                {constructionProjects.map((project, index) => (
                    <ProjectItem
                        imgSrc={project.mainImageUrl}
                        href={"/services/constructions/" + project.id}
                        key={index + 1}
                        title={project.title}
                    />
                ))}
            </div>
        </div>
    );
}
