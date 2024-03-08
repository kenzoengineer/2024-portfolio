import { useState } from "react";
import { fadeIn, selectRandom } from "../../consts";

interface BRoundSquaresProp {
    i?: number;
}

const colors = [
    "bg-b-red",
    "bg-b-yellow",
    "bg-b-blue",
    "bg-b-white",
    "bg-b-black",
];
const colorsSansBlack = [
    "bg-b-red",
    "bg-b-yellow",
    "bg-b-blue",
    "bg-transparent",
];
const colorsSansWhite = ["bg-b-red", "bg-b-yellow", "bg-b-blue", "bg-b-black"];
const directions = [
    "rounded-tr-full bottom-0",
    "rounded-br-full top-0",
    "rounded-tl-full bottom-0 right-0",
    "rounded-bl-full top-0 right-0",
    "rounded-full w-48 h-48",
];

/**
 * Rules
 *
 * 1. No black as a background
 * 2. Big circle? transparent outer circle
 * 3. If white as background, force foreground not white
 */

const BRoundSquares = ({ i }: BRoundSquaresProp) => {
    const direction = selectRandom(directions);
    const bgColor = selectRandom(colorsSansBlack);
    const outerColor =
        direction === "rounded-full w-48 h-48"
            ? "bg-transparent"
            : selectRandom(bgColor === "bg-b-white" ? colorsSansWhite : colors);
    const innerColor = selectRandom(
        bgColor === "bg-b-white" ? colorsSansWhite : colors,
    );

    const [_, r] = useState(0);

    return (
        <div
            className={`relative z-10 w-48 h-48 ${bgColor} ${fadeIn[i ?? 0]} fadeIn`}
            onMouseEnter={() => r(Math.random())}
        >
            <div className={`relative ${outerColor} w-48 h-48 ${direction}`}>
                <div
                    className={`absolute w-24 h-24 ${direction} ${innerColor}`}
                ></div>
            </div>
        </div>
    );
};

export default BRoundSquares;
