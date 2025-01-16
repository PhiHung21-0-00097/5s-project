import { lambo } from "@public/images";

import Image from "next/image";

export const Banner = () => {
    return (
        <section className="s-h h-screen">
            <div className=" ">
                <div className="relative">
                    <Image
                        src={lambo}
                        alt={`Image `}
                        className="w-full h-auto"
                        loading="lazy"
                    />
                    <div className="w-[380px] text-white flex flex-col justify-between absolute top-20 z-20 gap-[40px] translate-x-1/2">
                        <div className="">
                            <h1 className="text-[20px] md:text-[40px] font-bold">
                                PRO WINDOW TINTING
                            </h1>
                        </div>
                        <div>
                            <p className="text-[12px]">
                                Mattis nunc tortor dolor ultricies vitae id.
                                Cursus adipiscing scelerisque sit lectus
                                facilisi sapien cras. Consequat tempor ornare
                                tincidunt platea enim ut pretium.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
