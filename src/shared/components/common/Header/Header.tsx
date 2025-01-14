import { logoHeader } from "@public/images";
import Image from "next/image";
import Link from "next/link";

const listHeader = [
    { title: "Về Chúng Tôi", href: "/about" },
    { title: "Dịch vụ cung cấp", href: "/services" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Đối tác", href: "/partners" },
    { title: "Liên hệ", href: "/contact" },
];

export const Header = () => {
    return (
        <header className="Header bg-white sticky top-0">
            <nav className="w-full flex justify-between items-center container">
                <Link href="/" className="link-logo">
                    <Image
                        src={logoHeader}
                        alt="Logo"
                        width={240}
                        height={60}
                        priority
                    />
                </Link>
                <ul className="flex">
                    {listHeader.map(({ title, href }) => (
                        <li key={href} className="mx-[30px]">
                            <Link
                                href={href}
                                className="text-black text-[17px] uppercase py-[7px] px-[13px] rounded-[3px] 
                  				hover:bg-purple hover:text-white transition-all ease-in-out duration-500 
                  				active:bg-purple active:text-white cursor-pointer"
                            >
                                {title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
