import { fadeIn } from "../consts";
import SpeedLines from "./SpeedLines";

const STRIPE_COUNT = 7;

const Hero = () => {
    return (
        <div className="w-screen h-screen bg-white flex justify-center items-center">
            <div className="flex flex-col h-64">
                <div className="flex">
                    <SpeedLines count={STRIPE_COUNT} />
                    <div
                        className={`text-9xl font-bold tracking-wider fadeIn ${fadeIn[STRIPE_COUNT]} ml-5`}
                    >
                        <h1 className="text-black">KEN</h1>
                        <h1 className="text-black">JIANG</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2
                        className={`text-black text-3xl font-bold ${fadeIn[STRIPE_COUNT]}`}
                    >
                        {"> university of waterloo"}
                    </h2>
                    <h2
                        className={`text-black text-3xl font-bold ${fadeIn[STRIPE_COUNT]}`}
                    >
                        {"> swe @ vontive"}
                    </h2>
                </div>
            </div>
            <div className="w-12" />
            <div>
                <img
                    src="./imgs/ken.png"
                    className={`h-[35rem] aspect-square ${fadeIn[STRIPE_COUNT + 2]}`}
                ></img>
            </div>
        </div>
    );
};

export default Hero;
