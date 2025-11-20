"use client";

import ServiceProject from "../../../components/ServiceProject";
import { useTranslations } from "next-intl";
import { constructionProjects } from "../constructions";
import { notFound, useParams } from "next/navigation";

export default function ConstructionDetail() {
    const t = useTranslations();
    const { id } = useParams();
    console.log(id);

    const project = constructionProjects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <ServiceProject
            title={project.title}
            mainImageUrl={project.mainImageUrl}
            location={project.location}
            text={project.text}
            imageUrlList={project.imageUrlList}
        ></ServiceProject>
    );
}
