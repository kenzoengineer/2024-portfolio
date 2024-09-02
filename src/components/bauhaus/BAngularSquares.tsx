import { fadeIn, selectRandom } from "../../consts";

interface BAngularSquaresProp {
    i?: number;
}

const fgColors = ["fill-b-red", "fill-b-blue", "fill-b-yellow", "fill-b-black"];
const bgColors = ["bg-b-red", "bg-b-blue", "bg-b-yellow", "bg-b-black"];

const directions = [
    "0,0 96,96 0,96", // bl
    "96,96 0,96 96,0", // br
    "0,0 96,96 96,0", // tr
    "96,0 0,96 0,0", // tl
];

/**
 * Rules
 *
 * 1. No black as a background
 * 2. Big circle? transparent outer circle
 * 3. If white as background, force foreground not white
 */

const BAngularSquares = ({ i }: BAngularSquaresProp) => {
    const direction = selectRandom(directions);
    const fgColor = selectRandom(fgColors);
    const bgColor = selectRandom(bgColors);
    return (
        <div className={`w-24 h-24 ${bgColor}`}>
            <svg className={`h-24 w-24 ${fgColor}`}>
                <polygon points={direction} />
            </svg>
        </div>
    );
};

export default BAngularSquares;
