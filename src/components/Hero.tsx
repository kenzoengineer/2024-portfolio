import { fadeIn } from "../consts";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";
import Button from "./Button";
import BRoundSquares from "./bauhaus/BRoundSquares";

const WIDTH = 6;
const HEIGHT = 6;

const Hero = () => {
    return (
        <div className="w-screen h-screen bg-b-white flex justify-center">
            <div className="text-b-black pr-10 w-1/3 text-right h-screen flex flex-col justify-center">
                <h1
                    className={`text-bigger font-medium h-[8rem] ${fadeIn[0]} fadeIn`}
                >
                    KEN
                </h1>
                <h1
                    className={`text-huge font-extrabold h-[14rem] ${fadeIn[1]} fadeIn`}
                >
                    JIANG
                </h1>
                <p className={`text-2xl font-thin ${fadeIn[2]} `}>
                    Software Engineer @ Vontive
                </p>
                <p className={`text-2xl font-thin ${fadeIn[3]} `}>
                    Computer Engineering @ UWaterloo
                </p>
                <div className="flex mt-4 justify-end">
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
            <div className="flex">
                {Array(WIDTH)
                    .fill(1)
                    .map((x, i) => (
                        <div className={`flex flex-col ${fadeIn[i]} fadeIn`}>
                            {Array(HEIGHT)
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
