import { fadeIn, useWindowDimension } from "../consts";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Button from "./Button";
import BRoundSquares from "./bauhaus/BRoundSquares";
import { useCallback, useEffect, useState } from "react";

const Hero = () => {
    let [height, setHeight] = useState<number>(
        // TODO: ADD CLAMPING
        Math.floor(window.innerHeight / 200),
    );
    let [width, setWidth] = useState<number>(
        Math.floor(window.innerWidth / 350),
    );
    let [windowWidth, windowHeight] = useWindowDimension();

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
                        className={`text-9xl md:text-bigger font-medium h-[4rem] md:h-[6rem] ${fadeIn[0]} fadeIn w-min`}
                    >
                        KEN
                    </h1>
                </div>
                <h1
                    className={`text-bigger md:text-huge font-extrabold h-[12rem] md:h-[14rem] ${fadeIn[1]} fadeIn`}
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
                    <div
                        className={`font-black text-xl fadeIn ${fadeIn[4]} bg-b-black text-center px-3 py-1 h-min`}
                    >
                        <span className="text-b-red">江</span>
                        <span className="text-b-blue">华</span>
                        <span className="text-b-yellow">栋</span>
                    </div>
                    <Button bg={"bg-b-black"} i={4}>
                        <FiGithub className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-blue"} i={5}>
                        <FiLinkedin className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-yellow"} i={6}>
                        <FiInstagram className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-red"} i={7}>
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
