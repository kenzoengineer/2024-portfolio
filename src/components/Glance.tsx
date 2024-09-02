import { useEffect, useRef } from "react";
import { popIn, useIsVisible } from "../consts";
import BEye from "./bauhaus/BEye";
import BShellsContainer from "./bauhaus/BShellsContainer";
import BSmallCard from "./bauhaus/BSmallCard";
import BTimeline from "./bauhaus/BTimeline";

const TimelineConst = [
    {
        title: "Sentry",
        subtitle: "Incoming Software Engineer",
        content: "San Francisco, CA",
    },
    {
        title: "Vontive",
        subtitle: "Software Engineer",
        content: "San Francisco, CA",
        time: "'24",
    },
    {
        title: "Senstar",
        subtitle: "Software Developer",
        content: "Waterloo, ON",
        time: "'23",
    },
    {
        title: "Shoplogix",
        subtitle: "Software Developer",
        content: "Oakville, ON",
        time: "'22",
    },
    {
        title: "QBuild",
        subtitle: "Application Developer",
        content: "Markham, ON",
        time: "'21",
    },
];

const Glance = () => {
    const glanceRef = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(glanceRef);

    useEffect(() => {
        if (!isVisible) return;
        for (let i = 0; i < 6; i++) {
            const elem = document.querySelector(`.c${i}`);
            if (!elem) continue;
            elem.classList.remove(`.c${i}`);
            elem.classList.add(...popIn[i].split(" "));
        }
    }, [isVisible]);

    return (
        <div className="mx-96">
            <div className="bg-b-black flex p-5" ref={glanceRef}>
                <BEye visible={isVisible} />
                <h1 className="ml-5 text-8xl text-b-white">
                    At a <span className="font-bold">glance</span>
                </h1>
            </div>
            <h2 className="bg-b-yellow text-b-black font-bold w-max px-2 py-1">
                Hover over and click the cards below
            </h2>
            <div className="grid grid-cols-4 pt-5">
                <div className="col-span-3">
                    <h1 className="text-3xl font-bold">
                        I'm experienced in...
                    </h1>
                    <div className="flex">
                        <div className="opacity-0 c0">
                            <BSmallCard
                                title="FULL STACK"
                                cta="https://github.com/kenzoengineer"
                            >
                                <div className="font-semibold">
                                    <p className="text-b-red">
                                        TypeScript, Python, C#
                                    </p>
                                    <p className="text-b-blue">
                                        React, Vue, .NET
                                    </p>
                                    <p className="text-b-yellow">
                                        PostgreSQL, SQL Server
                                    </p>
                                </div>
                            </BSmallCard>
                        </div>
                        <div className="opacity-0 c1">
                            <BSmallCard
                                title="EMBEDDED"
                                cta="https://github.com/kenzoengineer"
                            >
                                <div className="font-semibold">
                                    <p className="text-b-red">C, C++</p>
                                    <p className="text-b-blue">
                                        Ubuntu, Zephyr RTOS
                                    </p>
                                    <p className="text-b-yellow">
                                        Nordic, Arduino
                                    </p>
                                </div>
                            </BSmallCard>
                        </div>
                        <div className="opacity-0 c2">
                            <BSmallCard
                                title="SYSTEMS"
                                cta="https://github.com/kenzoengineer"
                            >
                                <div className="font-semibold">
                                    <p className="text-b-red">Java, C, C#</p>
                                    <p className="text-b-blue">
                                        Thrift, Zookeeper, Spark
                                    </p>
                                    <p className="text-b-yellow">
                                        Docker, AWS, GCP
                                    </p>
                                </div>
                            </BSmallCard>
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold">
                        In my spare time I enjoy...
                    </h1>
                    <div className="flex">
                        <div className="opacity-0 c3">
                            <BSmallCard
                                title="DRAWING + DESIGN"
                                cta="https://artstation.com/kenzoengineer"
                            >
                                <BShellsContainer width={3} height={1} />
                            </BSmallCard>
                        </div>
                        <div className="opacity-0 c4">
                            <BSmallCard
                                title="FINAL FANTASY XIV"
                                cta="https://www.fflogs.com/character/id/15363888"
                            >
                                <BShellsContainer width={3} height={1} />
                            </BSmallCard>
                        </div>
                        <div className="opacity-0 c5">
                            <BSmallCard
                                title="THE DAILY FISHDLE :)"
                                cta="https://tacklevillage.com/fishdle-game/"
                            >
                                <BShellsContainer width={3} height={1} />
                            </BSmallCard>
                        </div>
                    </div>
                </div>
                <div>
                    <BTimeline events={TimelineConst} />
                </div>
            </div>
        </div>
    );
};

export default Glance;
