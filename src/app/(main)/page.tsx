import { Banner } from "@/shared/components/common/Banner";
import { Window } from "@/shared/components/common/Window";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Otis Luxury",
};
export default function HomePage() {
    return (
        <>
            <Banner />
            <Window />
            {/* <Introduce /> */}
        </>
    );
}
