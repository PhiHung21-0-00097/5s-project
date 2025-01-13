import { IntroduceBottom } from "./components/IntroduceBottom";
import { IntroduceTop } from "./components/IntroduceTop";

export const Introduce = () => {
    return (
        <>
            <section className="introduct pt-5 pb-5">
                <div className="container">
                    <IntroduceTop />
                    {/* ---------------------------- */}
                    <IntroduceBottom />
                </div>
            </section>
        </>
    );
};
