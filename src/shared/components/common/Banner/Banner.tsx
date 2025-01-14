import { i1, i2, i3, i4, i5, i6, i7, i8 } from "@public/images";

import Image from "next/image";

export const Banner = () => {
    return (
        <section className="s-h">
            <div className=" grid grid-cols-8 gap-2">
                {[
                    i1,
                    i2,
                    i3,
                    i4,
                    i5,
                    i6,
                    i7,
                    i8,
                    i5,
                    i1,
                    i2,
                    i3,
                    i1,
                    i2,
                    i3,
                    i4,
                    i5,
                    i6,
                    i7,
                    i8,
                    i5,
                    i1,
                    i2,
                    i3,
                ].map((src, index) => (
                    <div key={index} className="col-span-1">
                        <Image
                            src={src}
                            alt={`Image ${index + 1}`}
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};
