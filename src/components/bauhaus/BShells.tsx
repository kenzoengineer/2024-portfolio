import { useEffect, useRef } from "react";
import { selectRandom, useIsVisible } from "../../consts";

const fgColors = ["bg-b-yellow", "bg-b-red", "bg-b-blue", "bg-b-black"];
const bgColors = ["bg-b-black", "bg-b-black", "bg-b-black", "bg-b-black"];
const directions = [
    ["flex-col", "rounded-t-full w-20 h-10", "rounded-b-full w-20 h-10", 0],
    ["flex-col", "rounded-b-full w-20 h-10", "rounded-t-full w-20 h-10", 0],
    ["", "rounded-r-full h-20 w-10", "rounded-l-full h-20 w-10", 1],
    ["", "rounded-l-full h-20 w-10", "rounded-r-full h-20 w-10", 1],
];

interface BShellsProps {
    randoms: number[];
}

const BShells = ({ randoms }: BShellsProps) => {
    let fg1 = fgColors[randoms[0]];
    let fg2 = fgColors[randoms[1]];
    const bg = bgColors[randoms[2]];
    const dir = directions[randoms[3]];

    if (fg1 === "bg-b-black") {
        fg1 = dir[3] ? "bg-hstripes" : "bg-vstripes";
    }
    if (fg2 === "bg-b-black") {
        fg2 = dir[3] ? "bg-hstripes" : "bg-vstripes";
    }

    const refs = [
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
        useRef<HTMLDivElement>(null),
    ];

    return (
        <div
            className={`w-20 h-20 ${bg} ${dir[0]} flex transition-all duration-300`}
            ref={refs[2]}
        >
            <div
                className={`${fg1} ${dir[1]} transition-all duration-300`}
                ref={refs[0]}
            ></div>
            <div
                className={`${fg2} ${dir[2]} transition-all duration-300`}
                ref={refs[1]}
            ></div>
        </div>
    );
};

export default BShells;
