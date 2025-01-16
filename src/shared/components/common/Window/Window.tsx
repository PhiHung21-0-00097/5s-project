import {
    window,
    window_car,
    window_shadow,
    window_white,
} from "@public/images";
import Image from "next/image";

export const Window = () => {
    return (
        <section className="s-h h-screen">
            <div className="relative">
                <Image
                    src={window}
                    alt={`Image `}
                    className="w-full h-auto absolute"
                    loading="lazy"
                />
                <Image
                    src={window_shadow}
                    alt={`Image `}
                    className="w-full h-auto absolute"
                    loading="lazy"
                />
                <div className="container">
                    <div className="flex justify-end items-center gap-[60px]">
                        {/* <div className="w-[900px] h-[690px] text-white  relative">
                            <Image
                                src={window_car}
                                alt=""
                                className="w-full h-auto absolute  top-0 z-10"
                            />
                            <Image
                                src={window_white}
                                alt=""
                                className="w-full h-auto absolute to p-0 -z-10"
                            />
                        </div> */}
                        <div className="w-[690px] text-white justify-center items-center text-center flex flex-col gap-[38px]">
                            <div className="flex">
                                <h1 className="font-bold text-[16px] md:text-[36x]">
                                    HERE FOR ALL OF YOUR WINDOW TINT NEEDS!
                                </h1>
                            </div>
                            <div>
                                <p>
                                    At sed donec neque tortor ut lorem vel.
                                    Dictum convallis ut lorem ultrices nulla
                                    senectus nisi quam egestas. Velit diam
                                    cursus ullamcorper enim morbi neque enim
                                    diam. Blandit duis id lectus mauris. Id
                                    volutpat mollis blandit risus metus
                                    parturient.At sed donec neque tortor ut
                                    lorem vel. Dictum convallis ut lorem
                                    ultrices nulla senectus nisi quam egestas.
                                    Velit diam cursus ullamcorper enim morbi
                                    neque enim diam. Blandit duis id lectus
                                    mauris. Id volutpat mollis blandit risus
                                    metus parturient.. Dictum convallis ut lorem
                                    ultrices nulla senectus nisi quam egestas.
                                    Velit diam cursus ullamcorper enim morbi
                                    neque enim diam. Blandit duis id lectus
                                    mauris. Id volutpat mollis blandit risus
                                    metus parturient.
                                </p>
                            </div>
                            <div>
                                <button className="bg-red-600 rounded-xl p-3 uppercase font-bold">
                                    read more
                                </button>
                            </div>
                        </div>
                        {/* <div className="">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};
