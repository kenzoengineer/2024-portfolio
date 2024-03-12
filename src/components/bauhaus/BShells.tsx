import { useEffect, useRef } from "react";
import { selectRandom, useIsVisible } from "../../consts";

const fgColors = ["bg-b-yellow", "bg-b-red", "bg-b-blue", "bg-b-black"];
const bgColors = ["bg-b-black", "bg-b-black", "bg-b-black", "bg-b-black"];
const directions = [
    ["flex-col", "rounded-t-full w-48 h-24", "rounded-b-full w-48 h-24", 0],
    ["flex-col", "rounded-b-full w-48 h-24", "rounded-t-full w-48 h-24", 0],
    ["", "rounded-r-full h-48 w-24", "rounded-l-full h-48 w-24", 1],
    ["", "rounded-l-full h-48 w-24", "rounded-r-full h-48 w-24", 1],
];

interface BShellsProps {
    randoms: number[];
    parent: React.RefObject<HTMLDivElement>;
}

const BShells = ({ parent, randoms }: BShellsProps) => {
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

    const isVisible = useIsVisible(parent, 1);
    useEffect(() => {
        if (isVisible) {
            const first = selectRandom([0, 1]);
            if (first) refs[0].current!.classList.add("delay-[750ms]");
            refs[0].current!.classList.add("opacity-0", "scale-125");
            if (!first) refs[1].current!.classList.add("delay-[750ms]");
            refs[1].current!.classList.add("opacity-0", "scale-125");
            refs[2].current!.classList.add("opacity-0");
            refs[2].current!.classList.add(
                randoms[0] < 2 ? "delay-[1500ms]" : "delay-[2250ms]",
            );
        }
    }, [isVisible]);

    return (
        <div
            className={`w-48 h-48 ${bg} ${dir[0]} flex transition-all duration-300`}
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
