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
            mainImageUrl={project.mainImageUrl}
            location={project.location}
            text={
                "По цене, качеству и эстетичности более удобные и полностью соответствующие мировым стандартам лифты марки SCHINDLER установлены и с большим успехом используются сегодня во многих жилых и социальных объектах Ашхабада, Аркадага и велаятах нашей страны. Кроме того, в настоящее время наши высококвалифицированные специалисты — имеющие соответствующие сертификаты и прошедшие специализированное обучение за рубежом — выполняют работы по установке лифтов всемирно известных брендов, а также обеспечению их бесперебойной эксплуатации в будущем, гарантируя безопасное лифтовое сообщение в высотных зданиях."
            }
            imageUrlList={project.imageUrlList}
        ></ServiceProject>
    );
}
