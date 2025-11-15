"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useTranslations } from "next-intl";

function ProjectItem({ href, imgSrc, title }) {
    return (
        <Link
            href={href}
            className="grid grid-rows-[auto_max-content] border shadow-md hover:shadow-lg duration-300 hover:bg-slate-100 border-gray-300 rounded-2xl overflow-hidden"
        >
            <img
                className="w-full h-[300px] object-cover"
                src={imgSrc}
                alt={title}
            />
            <label className="text-[20px] p-4">{title}</label>
        </Link>
    );
}

export default function ConstructionProjects() {
    const t = useTranslations("constructions");
    const projects = [
        {
            id: "giad",
            href: "/services/constructions/project1",
            imgSrc: "/assets/img/construction/giad.png",
        },
        {
            id: "ashgabatTurkmenbashiBridge",
            href: "/services/constructions/project2",
            imgSrc: "/assets/img/construction/bridge.jpg",
        },
        {
            id: "bereketliZaman",
            href: "/services/constructions/project3",
            imgSrc: "/assets/img/construction/Bereketli zaman1.jpg",
        },
        {
            id: "anewResidential",
            href: "/services/constructions/project4",
            imgSrc: "/assets/img/construction/1A.jpg",
        },
    ];

    return (
        <div className="grid wrap my-4">
            <h3 className="text-[30px] my-4">{t("pageTitle")}</h3>
            <div className="grid grid-cols-3 gap-8 justify-center  my-4 mb-8">
                {projects.map((project) => (
                    <ProjectItem
                        key={project.href}
                        {...project}
                        title={t(`projects.${project.id}.title`)}
                    />
                ))}
            </div>
        </div>
    );
}
