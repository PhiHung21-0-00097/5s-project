import { Footer } from "@/shared/components/common/Footer/Footer";
import { Header } from "@/shared/components/common/Header";
import { Fragment, ReactNode } from "react";

type DefaultLayoutProps = {
    children: ReactNode;
};
export const DefaultLayout = async ({ children }: DefaultLayoutProps) => {
    return (
        <Fragment>
            <Header />
            <main>{children}</main>
            <Footer />
        </Fragment>
    );
};
