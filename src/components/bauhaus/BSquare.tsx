import { useState } from "react";
import { selectRandom } from "../../consts";

const colors = [
    "bg-b-red",
    "bg-b-yellow",
    "bg-b-blue",
    "bg-b-white",
    "bg-b-black",
];
const bgColors = ["bg-b-red", "bg-b-yellow", "bg-b-blue", "bg-b-white"];
const colorsSansWhite = ["bg-b-red", "bg-b-yellow", "bg-b-blue", "bg-b-black"];
const directions = [
    "rounded-tr-full bottom-0",
    "rounded-br-full top-0",
    "rounded-tl-full bottom-0 right-0",
    "rounded-bl-full top-0 right-0",
    "rounded-full w-48 h-48",
];

const BSquare = () => {
    const direction = selectRandom(directions);
    return (
        <div className={`w-48 h-48 ${selectRandom(bgColors)}`}>
            <div
                className={`relative ${selectRandom(colorsSansWhite)} w-48 h-48 ${direction}`}
            >
                <div
                    className={`absolute w-24 h-24 ${direction} ${selectRandom(colors)}`}
                ></div>
            </div>
        </div>
    );
};

export default BSquare;
