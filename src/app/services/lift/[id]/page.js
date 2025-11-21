"use client";

import ServiceProject from "../../../components/ServiceProject";
import { useTranslations } from "next-intl";
import { notFound, useParams } from "next/navigation";
import { lifts } from "../page";

export default function ConstructionDetail() {
    const t = useTranslations();
    const { id } = useParams();
    const project = lifts.find((p) => p.id.toString() === id);

    if (!project) {
        notFound();
    }

    return (
        <ServiceProject
            title={project.title}
            mainImageUrl={project.mainImageUrl}
            location={project.location}
            text={t("lift.text")}
            imageUrlList={project.imageUrlList}
        ></ServiceProject>
    );
}
