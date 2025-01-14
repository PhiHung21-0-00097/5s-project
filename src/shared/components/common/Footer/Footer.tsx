import { fb, int, it, logo_ft, tw } from "@public/images";
import Image from "next/image";
import Link from "next/link";
import { ScrollTop } from "../ScrollTop";

const contactInfo = [
    {
        href: "https://www.google.com/maps/dir/10.8335852,106.6713565/.../entry=ttu",
        text: "Địa Chỉ : Số 51, Hẻm 245, Đường Hoàng Hữu Nam, Phường Tân Phú, TP.Hồ Chí Minh",
    },
    {
        href: "https://www.google.com/intl/vi/gmail/about/",
        text: "Email: vananhtechnology@gmail.com",
    },
    { href: "tel: 0903 079 135", text: "Số Điện Thoại: 0903 079 135" },
    { href: "trangchu", text: "Website: xenangvananh.com" },
];

const policyLinks = [
    { href: "google.com", text: "Quy định đăng tin" },
    { href: "google.com", text: "Điều khoản thỏa thuận" },
    { href: "google.com", text: "Chính sách bảo mật" },
    { href: "google.com", text: "Góp ý báo lỗi" },
];

const socialIcons = [fb, tw, int, it];

export const Footer = () => (
    <footer className="Footer">
        <div className="container mt-5">
            <div className="row flex justify-between gap-5">
                {/* Logo */}
                <div className="w-[25%] text-center">
                    <Link href="/">
                        <Image
                            loading="lazy"
                            className="w-full h-auto"
                            src={logo_ft}
                            alt=""
                        />
                    </Link>
                </div>

                {/* Thông tin liên hệ */}
                <div className="w-[25%]">
                    <h5 className="text-uppercase fw-bold text-[16px]">
                        Thông Tin Liên Hệ
                    </h5>
                    <ul className="list-unstyled mb-0">
                        {contactInfo.map(({ href, text }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    className="text-gray-600 text-[12px] leading-[30px]"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Chính sách */}
                <div className="w-[25%]">
                    <h5 className="text-uppercase fw-bold text-[16px]">
                        Quy Định & Chính Sách
                    </h5>
                    <ul className="list-unstyled mb-0">
                        {policyLinks.map(({ href, text }, index) => (
                            <li key={index}>
                                <a
                                    href={href}
                                    className="text-gray-600 text-[12px] leading-[30px]"
                                >
                                    {text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mạng xã hội */}
                <div className="w-[25%]">
                    <h5 className="text-uppercase fw-bold text-[16px]">
                        KẾT NỐI CHÚNG TÔI
                    </h5>
                    <div className="mb-4 flex gap-2">
                        {socialIcons.map((icon, index) => (
                            <Image
                                key={index}
                                loading="lazy"
                                src={icon}
                                className="icons m-1"
                                role="button"
                                alt=""
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>

        <ScrollTop />
        <div className="text-center p-3 text-[14px]">
            Copyright © 2023 XE NÂNG VÂN ANH. All rights reserved. Design by
            i-web.vn
        </div>
    </footer>
);
