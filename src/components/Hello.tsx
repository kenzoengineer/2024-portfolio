import { useContext, useEffect, useRef } from "react";
import { useIsVisible } from "../consts";
import BShellsContainer from "./bauhaus/BShellsContainer";
import { WindowContext } from "../App";

const Hello = () => {
    const { windowWidth } = useContext(WindowContext);

    const width = (() => {
        if (windowWidth > 768) {
            return Math.floor(windowWidth / (192 * 2.5));
        } else if (windowWidth > 640) {
            return Math.floor(windowWidth / 192);
        }
        return 2;
    })();

    const height = (() => {
        if (windowWidth >= 1917) {
            return 3;
        } else if (windowWidth >= 1429) {
            return 4;
        } else if (windowWidth >= 917) {
            return 5;
        } else if (windowWidth >= 768) {
            return 6;
        }
        return 4;
    })();

    const photoRef = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(photoRef);
    useEffect(() => {
        if (isVisible) {
            document
                .querySelector(".polaroid")!
                .classList.remove("translate-y-[-130%]");
            document
                .querySelector(".polaroid-image")!
                .classList.remove("opacity-0");
        }
    }, [isVisible]);
    return (
        <div className=" text-b-black md:grid md:grid-cols-2 font-bold">
            <div
                className="flex flex-col justify-center items-center overflow-y-hidden"
                ref={photoRef}
            >
                <div className="flex flex-col items-center bg-b-white p-6 mb-8 shadow-xl md:shadow-2xl translate-y-[-130%] transition-transform duration-1000 polaroid">
                    <img
                        src="./imgs/ken.png"
                        className="w-64 lg:w-96 aspect-square polaroid-image opacity-0 duration-[2000ms] delay-1000"
                    ></img>
                    <div className="flex h-20 items-center justify-center">
                        Me
                    </div>
                </div>
            </div>
            <div className="p-16 md:min-h-[50vh] md:pr-24 xl:pr-48 flex flex-col justify-center md:max-w-[40vw]">
                <div className="max-sm:-m-8 absolute">
                    <BShellsContainer width={width} height={height} />
                </div>
                <div className="font-medium">
                    <h1 className="font-thin text-5xl mb-8">
                        Since the day I attained sentience, I've loved
                        <span className="font-bold"> creating.</span>
                    </h1>
                    <p className="mb-4">
                        I started off by creating problems for my parents.
                    </p>
                    <p className="mb-4">
                        Jokes aside, nothing beats the gratification that comes
                        with creating something cool, and being able to say "I
                        made that." Whether it's code in a file, graphite on
                        paper, clips on a timeline in Premiere Pro, or something
                        else that's intangible, it's all fundamentally the same.
                    </p>
                    <p className="mb-12">Something was created from nothing.</p>
                    <p>
                        I hope you enjoy looking at the website I created, and I
                        hope you enjoy learning a bit about my professional
                        career.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hello;
