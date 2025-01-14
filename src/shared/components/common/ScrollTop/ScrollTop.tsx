"use client";
import { useEffect, useState } from "react";

export const ScrollTop = () => {
    // const [scrollTop, setScrollTop] = useState(false);

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         if (window.scrollY > 300) {
    //             setScrollTop(true);
    //         } else {
    //             setScrollTop(false);
    //         }
    //     });
    // }, []);

    // const scrollUp = () => {
    //     window.scrollTo({
    //         top: 0,

    //         behavior: "smooth",
    //     });
    // };
    return (
        <div className="ScroolTop">
            {/* {scrollTop && (
                <button className="Btn len " onClick={scrollUp}>
                    ↑
                </button>
            )} */}
        </div>
    );
};
