import Image from "next/image";
import { bg_intro1, i1, i2, i3, i4 } from "@public/images";

const images = [i1, i2, i3, i4];

export const IntroduceTop = () => {
    return (
        <div className="row flex justify-between g-l-2 g-c-1 mt-4">
            <div className="w-[40%]">
                <Image
                    src={bg_intro1}
                    alt="Dịch vụ cung cấp"
                    className="img-card w-full h-auto"
                    width={500}
                    height={300}
                    priority
                />
            </div>
            <div className="w-[50%] flex items-center pt-5">
                <div>
                    <div className="row-title pb-5">
                        <h5 className="text-greyTexta text-[36px] font-semibold uppercase">
                            DỊCH VỤ CUNG CẤP
                        </h5>
                        <p className="text-greyTextb text-[20px] mt-[25px]">
                            Tại Trạm Thiết Kế, con người luôn là tài sản được
                            đánh giá cao nhất. Chúng tôi luôn tìm kiếm và xây
                            dựng một văn hóa làm việc dựa trên sự đam mê, chia
                            sẻ, yêu thương, tôn trọng và tinh thần trách nhiệm
                            cao trong công việc.
                        </p>
                    </div>
                    <div className="text-gsap flex gap-2 mt-3">
                        {images.map((src, index) => (
                            <Image
                                key={index}
                                src={src}
                                alt={`Hình ảnh ${index + 1}`}
                                className="w-full h-auto"
                                width={120}
                                height={80}
                                loading="lazy"
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
