import { BREAKPOINT_MEDIUM, fadeIn } from "../consts";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import { IoMdDesktop } from "react-icons/io";
import Button from "./Button";
import BRoundSquares from "./bauhaus/BRoundSquares";
import { useContext } from "react";
import { WindowContext } from "../App";

import PDF from "../Ken_Jiang_Feb_2024.pdf";

const Hero = () => {
    const { windowWidth, windowHeight } = useContext(WindowContext);

    const height = (() => {
        if (windowWidth > BREAKPOINT_MEDIUM) {
            return Math.floor(windowHeight / 192);
        }
        return Math.floor(windowHeight / 2 / 192);
    })();

    const width = (() => {
        if (windowWidth > BREAKPOINT_MEDIUM) {
            return Math.floor((windowWidth / 192 / 3) * 2);
        }
        return Math.floor(windowWidth / 192);
    })();
    return (
        <div className="w-screen h-screen bg-b-white flex max-md:flex-col md:justify-center">
            <div className=" bg-b-black mb-10 p-2 w-screen text-b-white flex items-center justify-center md:hidden">
                <span className="mr-2 font-medium">
                    This site looks best on desktop
                </span>
                <IoMdDesktop className="text-b-white" />
            </div>
            <div className="text-b-black md:pr-10 text-center md:text-right md:h-screen flex flex-col justify-center">
                <div className="flex items-center justify-center md:justify-end">
                    <h1
                        className={`text-8xl sm:text-9xl md:text-bigger font-medium h-[5rem] sm:h-[6rem] md:h-[8rem] ${fadeIn[0]} fadeIn w-min`}
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
                    Software Engineering Intern @
                    <span className="font-bold"> Sentry </span>
                </p>
                <p className={`text-2xl font-thin ${fadeIn[3]} `}>
                    Computer Engineering @{" "}
                    <span className="font-bold">UWaterloo</span>
                </p>
                <div className="flex mt-4 justify-center items-center md:justify-end mb-5 md:mb-0">
                    <a
                        href={PDF}
                        target="_blank"
                        className={`relative font-black text-xl fadeIn ${fadeIn[4]} bg-b-white h-8 w-28 hover:scale-105 transition-transform`}
                    >
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
            <div className="flex flex-col max-md:h-1/2 overflow-x-hidden max-md:items-center">
                {Array(height)
                    .fill(1)
                    .map((x, i) => (
                        <div className={`flex ${fadeIn[i]} fadeIn`} key={i}>
                            {Array(width)
                                .fill(1)
                                .map((x, j) => (
                                    <BRoundSquares i={j} key={j} />
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Hero;
