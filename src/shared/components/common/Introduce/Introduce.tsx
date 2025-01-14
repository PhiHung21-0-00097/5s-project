import { IntroduceBottom } from "./components/IntroduceBottom";
import { IntroduceTop } from "./components/IntroduceTop";

export const Introduce = () => (
    <section className="introduct py-5">
        <div className="container">
            <IntroduceTop />
            <IntroduceBottom />
        </div>
    </section>
);
