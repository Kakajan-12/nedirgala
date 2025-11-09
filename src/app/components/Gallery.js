/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import FancyboxWrapper from "./FancyboxWrapper";

export default function Gallery({ images = [] }) {
    return (
        <div className="grid grid-cols-4 gap-4">
            <FancyboxWrapper>
                {images.map((item, index) => {
                    return (
                        <a
                            key={index}
                            className="rounded-2xl overflow-hidden aspect-square border border-gray-200"
                            data-fancybox="gallery"
                            data-src={item}
                        >
                            <img
                                className="object-cover w-full h-full"
                                src={item}
                            />
                        </a>
                    );
                })}
            </FancyboxWrapper>
        </div>
    );
}
