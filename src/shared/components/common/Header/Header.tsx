import { logoHeader } from "@public/images";
import Image from "next/image";
import Link from "next/link";


const listHeader = [
  {
    title: "Về chúng tôi",
  },
  {
    title: "Dịch vụ cung cấp",
  },
  {
    title: "Portfolio",
  },
  {
    title: "Đối tác",
  },
  {
    title: "Liên hê",
  },
];
export const Header = () => {
  return (
    <>
      <header className="Header bg-white  top-0 sticky">
        <nav className=" w-full flex justify-between items-center container">
          <div>
            <Link className="link-logo " href={"/"}>
              <Image src={logoHeader} alt="" className="w-60"></Image>
            </Link>
          </div>
          <ul className="flex ">
            {listHeader.map((item, index) => (
              <li key={index} className="inline-block my-0 mx-[30px]">
                <Link
                  href=""
                  className="active:bg-purple active:text-white hover:bg-purple transition-all ease-in-out duration-500 hover:text-white cursor-pointer text-black text-[17px] py-[7px] px-[13px] rounded-[3px] uppercase"
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};
