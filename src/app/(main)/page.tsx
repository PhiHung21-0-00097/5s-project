import { Banner } from "@/shared/components/common/Banner";
import { Introduce } from "@/shared/components/common/Introduce";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Otis Luxury",
};
export default function HomePage() {
    return (
        <>
            <Banner />
            <Introduce />
        </>
    );
}
