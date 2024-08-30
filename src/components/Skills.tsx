import { useEffect, useRef, useState } from "react";
import PhysicsPane from "./PhysicsPane";
import BLogs from "./bauhaus/BLogs";
import { FaArrowRight } from "react-icons/fa";
import { fadeIn, useIsVisible } from "../consts";

const Skills = () => {
    const titleRef = useRef<HTMLDivElement>(null);
    const awardRef = useRef<HTMLDivElement>(null);
    const [titleText, setTitleText] = useState("");
    const isVisible = useIsVisible(titleRef);
    useEffect(() => {
        if (titleText) {
            titleRef.current?.classList.remove("opacity-0");
        } else {
            titleRef.current?.classList.add("opacity-0");
        }
    }, [titleText]);

    useEffect(() => {
        if (isVisible) {
            awardRef.current?.classList.add(...fadeIn[13].split(" "));
        }
    }, [isVisible]);

    return (
        <div className="flex flex-col px-10 py-24 md:px-36 md:py-32">
            <div className="text-6xl sm:text-8xl md:text-big mb-5">
                TECHNICAL<span className="font-black"> SKILLS</span>
            </div>
            <div className="flex items-center justify-center gap-x-10">
                <div className="flex flex-col items-center">
                    <div className="flex items-center bg-b-yellow text-b-black font-medium px-4 py-2 m-2">
                        <h3 className="pr-2">
                            <span className="font-bold">Hover</span> over a tile
                        </h3>
                        <FaArrowRight />
                    </div>
                    <div className="relative h-min flex">
                        <BLogs />
                        <div
                            ref={awardRef}
                            className={`opacity-0 bg-b-black border-8 border-b-white text-b-white p-5 w-max absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2`}
                        >
                            <h2 className="text-2xl">World's most adequate</h2>
                            <div className="border-b-4 border-b-red w-72">
                                <p
                                    className={`text-5xl h-12 my-2 font-bold transition-opacity duration-500`}
                                    ref={titleRef}
                                >
                                    {titleText}
                                </p>
                            </div>
                            <h2 className="text-2xl">developer</h2>
                        </div>
                    </div>
                </div>
                <div>
                    <PhysicsPane setTitleText={setTitleText} />
                </div>
            </div>
        </div>
    );
};

export default Skills;
