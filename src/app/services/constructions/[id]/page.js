"use client";

import ServiceProject from "../../../components/ServiceProject";
import { useTranslations } from "next-intl";
import { constructionProjects } from "../../../../data/constructions";
import { notFound, useParams } from "next/navigation";

export default function ConstructionDetail() {
    const t = useTranslations();
    const { id } = useParams();

    const project = constructionProjects.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <ServiceProject
            title={t(project.titleKey)}
            client={t(project.clientKey)}
            mainImageUrl={project.mainImageUrl}
            location={t(project.locationKey)}
            text={t(project.textKey)}
            imageUrlList={project.imageUrlList}
            year={project.year}
            building_type={t(project.buildingTypeKey)}
        ></ServiceProject>
    );
}
