import { fb, int, it, logo_ft, tw } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../ScrollTop";

export const Footer = () => {
    return (
        <footer className="Footer">
            <div className="mt-5 container">
                <section className="">
                    <div className="row flex justify-between gap-5">
                        <div className=" w-[25%] text-center">
                            <Link href="/">
                                <Image
                                    className="w-full h-auto"
                                    src={logo_ft}
                                    alt=""
                                />
                            </Link>
                        </div>

                        <div className="w-[25%] ">
                            <h5
                                className="text-uppercase fw-bold"
                                style={{ fontSize: "16px" }}
                            >
                                Thông Tin Liên Hệ
                            </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a
                                        href="https://www.google.com/maps/dir/10.8335852,106.6713565/S%E1%BB%91+51,+H%E1%BA%BBm+245,+%C4%90%C6%B0%E1%BB%9Dng+Ho%C3%A0ng+H%E1%BB%AFu+Nam,+Ph%C6%B0%E1%BB%9Dng+T%C3%A2n+Ph%C3%BA,+TP.H%E1%BB%93+Ch%C3%AD+Minh/@10.8336668,106.6301565,13z/data=!3m1!4b1!4m4!4m3!1m1!4e1!1m0?entry=ttu"
                                        className=""
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Địa Chỉ : Số 51, Hẻm 245, Đường Hoàng
                                        Hữu Nam, Phường Tân Phú, TP.Hồ Chí Minh
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.google.com/intl/vi/gmail/about/"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Email: vananhtechnology@gmail.com
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="tel: 0903 079 135"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Số Điện Thoại: 0903 079 135
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="trangchu"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Website: xenangvananh.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[25%] ">
                            <h5
                                className="text-uppercase fw-bold"
                                style={{ fontSize: "16px" }}
                            >
                                Quy Định & Chính Sách
                            </h5>

                            <ul className="list-unstyled mb-0">
                                <li>
                                    <a
                                        href="google.com"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Quy định đăng tin
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="google.com"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Điều khoản thỏa thuận
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="google.com"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Chính sách bảo mật
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="google.com"
                                        style={{
                                            color: "#656565",
                                            lineHeight: "30px",
                                            fontSize: "12px",
                                        }}
                                    >
                                        Góp ý báo lỗi
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="w-[25%]  ">
                            <h5
                                className="text-uppercase fw-bold"
                                style={{ fontSize: "16px" }}
                            >
                                KẾT NỐI CHÚNG TÔI
                            </h5>

                            <div className="mb-4 flex gap-2">
                                <Image
                                    alt=""
                                    src={fb}
                                    className="icons m-1 "
                                    role="button"
                                />

                                <Image
                                    alt=""
                                    src={tw}
                                    className=" icons m-1"
                                    role="button"
                                />

                                <Image
                                    alt=""
                                    src={int}
                                    className=" icons m-1"
                                    role="button"
                                />

                                <Image
                                    alt=""
                                    src={it}
                                    className=" icons m-1"
                                    role="button"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ScrollTop />
            <div className=" text-center p-3 text-[14px]">
                Copyright © 2023 XE NÂNG VÂN ANH . All rights reserved. Design
                by i-web.vn
            </div>
        </footer>
    );
};
