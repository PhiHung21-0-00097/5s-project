import Image from "next/image";
import { bg_intro1, i1, i2, i3, i4 } from "@public/images";
export const IntroduceTop = () => {
    return (
        <div className="row flex justify-between  g-l-2 g-c-1 mt-4  justify-content-between">
            <div className="w-[40%]">
                <Image
                    className="img-card w-full h-auto"
                    src={bg_intro1}
                    alt=""
                />
            </div>
            <div className=" pt-5 w-[50%] flex items-center ">
                <div>
                    <div className=" row-title  pb-5">
                        <h5 className="text-greyTexta text-[36px] font-semibold uppercase  text-uppercase">
                            DỊCH VỤ CUNG CẤP
                        </h5>
                        <div className="text-it ">
                            <span className=" text-greyTextb text-[20px] mt-[25px]">
                                Tại Trạm Thiết Kế, con người luôn là tài sản
                                được đánh giá cao nhất. Chúng tôi luôn tìm kiếm
                                và xây dựng một văn hóa làm việc dựa trên sự đam
                                mê, chia sẻ, yêu thương, tôn trọng và tinh thần
                                trách nhiệm cao trong công việc
                            </span>
                        </div>
                    </div>
                    <div className="text-gsap flex gap-2   mt-3">
                        <div className="">
                            <Image src={i1} className="w-full h-auto " alt="" />
                        </div>
                        <div className="">
                            <Image src={i2} className="w-full h-auto " alt="" />
                        </div>
                        <div className="">
                            <Image src={i3} className="w-full h-auto " alt="" />
                        </div>
                        <div className="">
                            <Image src={i4} className="w-full h-auto " alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
