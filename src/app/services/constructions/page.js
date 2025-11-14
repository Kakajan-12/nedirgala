/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

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
    const projects = [
        {
            href: "/services/constructions/project1",
            imgSrc: "/assets/img/construction/giad.png",
            title: "GIAD-2, GIAD-3, ýyladyjy kotelni we 4 sany podstansiýa",
        },
        {
            href: "/services/constructions/project2",
            imgSrc: "/assets/img/construction/bridge.jpg",
            title: "«Aşgabat – Türkmenbaşy» awtomobil köprüsi",
        },
        {
            href: "/services/constructions/project3",
            imgSrc: "/assets/img/construction/Bereketli zaman1.jpg",
            title: "Bereketli zaman ýaşaýyş jaýy",
        },
        {
            href: "/services/constructions/project4",
            imgSrc: "/assets/img/construction/1A.jpg",
            title: "Änew ýaşaýyş jaýy",
        },
    ];

    return (
        <div className="grid wrap my-4">
            <h3 className="text-[30px] my-4">Taslamalar</h3>
            <div className="grid grid-cols-3 gap-8 justify-center  my-4 mb-8">
                {projects.map((project) => (
                    <ProjectItem key={project.href} {...project} />
                ))}
            </div>
        </div>
    );
}
