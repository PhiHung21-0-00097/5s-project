import Image from "next/image";
import { bg_intro2, i1, i2, i3, i4 } from "@public/images";
import { cham_intro } from "@public/icons";

const services = [
    "Thiết kế UX/UI",
    "Phát triển website",
    "Biên tạp nội dung website",
    "Ứng dụng di động",
    "Công cụ hỗ trợ thương mại điện tử",
    "Sản xuất TVC",
    "Product concept shooting",
];

const images = [i1, i2, i3, i4];

const ServiceItem = ({ title }: { title: string }) => (
    <div className="row pt-2 flex gap-2">
        <div className="col col-1 justify-center pt-2">
            <Image loading="lazy" src={cham_intro} alt="" />
        </div>
        <div className="col">
            <h4>{title}</h4>
        </div>
    </div>
);

export const IntroduceBottom = () => {
    return (
        <div className="row flex justify-between mt-5">
            <div className="w-[40%]">
                <div className="row-title mt-5">
                    <h5 className="text-greyTexta text-[36px] font-semibold uppercase">
                        DỊCH VỤ CUNG CẤP
                    </h5>
                    <span className="text-greyTextb text-[20px] mt-[25px]">
                        Dịch Vụ Truyền Thông
                    </span>
                </div>

                <div className="div-line flex">
                    {Array(4)
                        .fill("")
                        .map((_, index) => (
                            <span
                                key={index}
                                className="line m-1"
                                style={
                                    index === 1
                                        ? {
                                              backgroundColor: "#F15A22",
                                              width: 31,
                                          }
                                        : {}
                                }
                            />
                        ))}
                </div>

                <div className="row flex gap-3 pt-5 pb-5">
                    {services.map((service, index) => (
                        <div key={index} className="w-1/2">
                            <ServiceItem title={service} />
                        </div>
                    ))}
                </div>

                <div className="flex gap-2 mt-4">
                    {images.map((src, index) => (
                        <Image
                            key={index}
                            loading="lazy"
                            src={src}
                            className="img-fluid d-img"
                            alt=""
                        />
                    ))}
                </div>
            </div>

            <div className="w-[40%] text-end mt-3 sp">
                <Image
                    loading="lazy"
                    className="img-car img-fluid imgRef"
                    src={bg_intro2}
                    alt=""
                />
                <div className="mask"></div>
            </div>
        </div>
    );
};
