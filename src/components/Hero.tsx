import { fadeIn } from "../consts";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Button from "./Button";
import BRoundSquares from "./bauhaus/BRoundSquares";
import { useCallback, useContext, useEffect, useState } from "react";
import { WindowContext } from "../App";

import PDF from "../Ken_Jiang_Feb_2024.pdf";

const Hero = () => {
    const { windowWidth, windowHeight } = useContext(WindowContext);

    let [height, setHeight] = useState<number>(
        // TODO: ADD CLAMPING
        Math.floor(window.innerHeight / 200),
    );
    let [width, setWidth] = useState<number>(
        Math.floor(window.innerWidth / 350),
    );
    const updateDims = useCallback(() => {
        // max-md is 768
        if (windowWidth < 768) {
            setWidth(Math.floor(windowWidth / 150));
            setHeight(2);
        } else {
            setWidth(Math.floor(windowWidth / 350));
            setHeight(Math.floor(windowHeight / 200));
        }
    }, [windowHeight, windowWidth]);

    useEffect(() => {
        updateDims();
    }, [windowHeight, windowWidth]);

    return (
        <div className="w-screen h-screen bg-b-white flex max-md:flex-col justify-center">
            <div className="text-b-black md:pl-24 max-md:pb-10 pr-5 md:pr-10 text-center md:text-right md:h-screen flex flex-col justify-center">
                <div className="flex items-center justify-center md:justify-end">
                    <h1
                        className={`text-8xl sm:text-9xl md:text-bigger font-medium h-[5rem] sm:h-[4rem] md:h-[6rem] ${fadeIn[0]} fadeIn w-min`}
                    >
                        KEN
                    </h1>
                </div>
                <h1
                    className={`text-8xl sm:text-bigger md:text-huge font-extrabold h-[7rem] sm:h-[12rem] md:h-[14rem] ${fadeIn[1]} fadeIn`}
                >
                    JIANG
                </h1>
                <p className={`text-2xl font-thin ${fadeIn[2]} `}>
                    Software Engineer @{" "}
                    <span className="font-bold">Vontive</span>
                </p>
                <p className={`text-2xl font-thin ${fadeIn[3]} `}>
                    Computer Engineering @{" "}
                    <span className="font-bold">UWaterloo</span>
                </p>
                <div className="flex mt-4 justify-center items-center md:justify-end">
                    <a
                        href={PDF}
                        target="_blank"
                        className={`relative font-black text-xl fadeIn ${fadeIn[4]} bg-b-white h-8 w-28 hover:scale-105 transition-transform`}
                    >
                        <div className="absolute flex justify-center items-center w-28 h-8 hover:opacity-0 transition-opacity duration-300 bg-b-white z-10 border-2 border-b-black">
                            <span className="text-b-red pr-1">江</span>
                            <span className="text-b-blue px-1">华</span>
                            <span className="text-b-yellow pl-1">栋</span>
                        </div>
                        <div className="absolute flex justify-center items-center w-28 h-8 text-b-black font-medium transition-colors border-2 border-b-black">
                            Resume
                        </div>
                    </a>
                    <Button
                        bg={"bg-b-black"}
                        i={4}
                        to={"https://github.com/kenzoengineer"}
                    >
                        <FiGithub className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button
                        bg={"bg-b-blue"}
                        i={5}
                        to={"https://www.linkedin.com/in/ken-jiang/"}
                    >
                        <FiLinkedin className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button
                        bg={"bg-b-yellow"}
                        i={6}
                        to={"https://www.instagram.com/kenzoengineer"}
                    >
                        <FiInstagram className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button
                        bg={"bg-b-red"}
                        i={7}
                        to={"mailto:ken.jiang@uwaterloo.ca"}
                    >
                        <FiMail className="w-8 h-8 text-b-white" />
                    </Button>
                </div>
            </div>
            <div className="flex flex-col max-md:h-1/2 overflow-x-hidden">
                {Array(height)
                    .fill(1)
                    .map((x, i) => (
                        <div className={`flex ${fadeIn[i]} fadeIn`}>
                            {Array(width)
                                .fill(1)
                                .map((x, j) => (
                                    <BRoundSquares i={j} />
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Hero;
