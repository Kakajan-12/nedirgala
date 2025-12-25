/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function ProjectItem({ href, imgSrc, title }) {
    return (
        <Link
            href={href}
            className="group overflow-hidden  rounded-[15px] grid bg-white "
        >
            <img
                src={imgSrc}
                alt={title}
                className="w-full aspect-4/3 object-cover group-hover:scale-110 duration-300"
            />
            <label className="text-slate-600 font-semibold align-middle items-center text-lg sm:text-2xl h-max m-auto md:p-4 p-2 text-center">
                {title}
            </label>
        </Link>
    );
}
