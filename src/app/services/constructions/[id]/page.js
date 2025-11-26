"use client";

import ServiceProject from "../../../components/ServiceProject";
import { useTranslations } from "next-intl";
import { constructionProjects } from "../constructions";
import { notFound, useParams } from "next/navigation";

export default function ConstructionDetail() {
    const t = useTranslations("constructions");
    const { id } = useParams();
    const project = constructionProjects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <ServiceProject
            title={project.title}
            client={project.client}
            mainImageUrl={project.mainImageUrl}
            location={t(`projects.${project.id}.location`)}
            text={t(`projects.${project.id}.text`)}
            imageUrlList={project.imageUrlList}
        ></ServiceProject>
    );
}
