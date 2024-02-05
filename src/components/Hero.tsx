import { fadeIn } from "../consts";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Button from "./Button";
import BSquare from "./bauhaus/BSquare";

const WIDTH = 6;
const HEIGHT = 8;

const Hero = () => {
    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center overflow-hidden">
            <div className="text-b-black pr-10 w-1/3 text-right">
                <h1 className="text-[10rem] font-medium h-[8rem]">KEN</h1>
                <h1 className="text-[12rem] font-extrabold h-[14rem]">JIANG</h1>
                <p className="text-2xl font-thin">
                    Software Engineer @ Vontive
                </p>
                <p className="text-2xl font-thin">
                    Computer Engineering @ UWaterloo
                </p>
                <div className="flex mt-4 justify-end">
                    <Button bg={"bg-b-black"}>
                        <FiGithub className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-blue"}>
                        <FiLinkedin className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-yellow"}>
                        <FiInstagram className="w-8 h-8 text-b-white" />
                    </Button>
                    <Button bg={"bg-b-red"}>
                        <FiMail className="w-8 h-8 text-b-white" />
                    </Button>
                </div>
            </div>
            <div className="flex h-screen">
                {Array(WIDTH)
                    .fill(1)
                    .map((x, i) => (
                        <div className={`flex flex-col ${fadeIn[i]} fadeIn`}>
                            {Array(HEIGHT)
                                .fill(1)
                                .map((x) => (
                                    <BSquare />
                                ))}
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Hero;
