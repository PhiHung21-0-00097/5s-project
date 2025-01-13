import Image from "next/image";
import { bg_intro1, bg_intro2, i1, i2, i3, i4 } from "@public/images";
import { cham_intro } from "@public/icons";
export const IntroduceBottom = () => {
    return (
        <div className="row  flex justify-between mt-5 ">
            <div className="  w-[40%] ">
                <div className=" row-title  mt-5">
                    <h5 className="text-greyTexta text-[36px] font-semibold uppercase  text-uppercase">
                        DỊCH VỤ CUNG CẤP
                    </h5>
                    <span className=" text-greyTextb text-[20px] mt-[25px]">
                        Dịch Vụ Truyền Thông
                    </span>
                </div>
                <div className=" div-line">
                    <span className="line m-1" />
                    <span
                        className="line inline-block w-[31px]  m-1"
                        style={{ backgroundColor: "#F15A22" }}
                    />
                    <span className="line m-1" />
                    <span className="line m-1" />
                </div>
                <div className="row flex gap-3  row-button-introduce g-l-2 gl-5 pt-5 pb-5">
                    <div className=" col-left ">
                        <div className="row pt-2 flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Thiết kế UX/UI</h4>
                            </div>
                        </div>

                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Phát triển website</h4>
                            </div>
                        </div>

                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Biên tạp nội dung website</h4>
                            </div>
                        </div>
                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Ứng dụng di động</h4>
                            </div>
                        </div>
                    </div>
                    <div className=" col-left ">
                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Công cu hỗ trợ thương mại điện tử</h4>
                            </div>
                        </div>

                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Sản xuất TVC</h4>
                            </div>
                        </div>

                        <div className="row pt-2  flex gap-2">
                            <div className="col col-1 justify-center pt-2">
                                <Image className="" alt="" src={cham_intro} />
                            </div>
                            <div className="col">
                                <h4>Product concept shooting</h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2  mt-4 ">
                    <div className="">
                        <Image src={i1} className="img-fluid d-img " alt="" />
                    </div>
                    <div className="">
                        <Image src={i2} className="img-fluid d-img " alt="" />{" "}
                    </div>
                    <div className="">
                        <Image src={i3} className="img-fluid d-img " alt="" />{" "}
                    </div>
                    <div className="">
                        <Image src={i4} className="img-fluid d-img " alt="" />{" "}
                    </div>
                </div>
            </div>

            <div className=" w-[40%] i-gsap introduce-left text-end mt-3 sp">
                <Image
                    className="img-car img-fluid imgRef"
                    src={bg_intro2}
                    alt=""
                />
                <div className="mask"></div>
            </div>
        </div>
    );
};
