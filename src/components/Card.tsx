import { MouseEvent, useRef, useState } from "react";

import { selectRandom } from "../consts";
import { filterToHex, hexToRgb } from "../colorConvert";
import BAngularSquares from "./bauhaus/BAngularSquares";

const dims = "w-[23rem] md:w-64 h-[42rem] md:h-96";

export interface CardProps {
    company: string;
    title: string;
    location: string;
    dates: string;
    content: React.ReactNode | string;
    stack: string;
    cardStyle: Record<string, any>;
    children?: React.ReactNode;
}

interface TotalCardProps extends CardProps {
    idx: number;
    selectedIdx: number;
    setSelectedIdx(arg0: number): void;
}

const Card = ({
    title,
    company,
    location,
    dates,
    stack,
    content,
    cardStyle,
    idx,
    selectedIdx,
    setSelectedIdx,
}: TotalCardProps) => {
    const cardContainerElem = useRef<HTMLDivElement>(null);

    const cardElem = useRef<HTMLDivElement>(null);

    const flipped = idx === selectedIdx;
    const someoneElseFlipped = selectedIdx >= 0 && selectedIdx !== idx;

    const { color, hex, suit } = cardStyle;
    const { filter } = filterToHex(hexToRgb(hex));

    const mouseEnterHandler = () => {};
    const mouseLeaveHandler = () => {};
    const mouseHandler = (e: MouseEvent | null) => {
        if (!e || flipped) {
            mouseLeaveHandler();
            return;
        }
    };
    const handleFlip = () => {
        // mutex
        if (selectedIdx === -2) {
            return;
        }
        if (flipped) {
            // unflipping
            setSelectedIdx(-1);
        } else {
            if (selectedIdx === -1) {
                setSelectedIdx(idx);
                return;
            }
            setSelectedIdx(-2);
            setTimeout(() => {
                setSelectedIdx(idx);
            }, 600);
        }
    };
    return (
        <div
            className={`m-3 ${dims} transition-transform duration-500 ${flipped && "-translate-y-96"}`}
            onClick={handleFlip}
            onMouseEnter={mouseEnterHandler}
            onMouseMove={mouseHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div
                className={`cursor-pointer preserve transition-transform ${(flipped || someoneElseFlipped) && "[transform:rotateY(180deg)]"} duration-300 relative`}
                ref={cardContainerElem}
            >
                {/* FRONT OF THE CARD */}
                <div
                    className={`bg-b-white ${color} p-5 shadow-2xl absolute ${dims} flex items-center justify-center rounded-lg transition-transform hover:-translate-y-10`}
                    ref={cardElem}
                >
                    <div className="flex flex-col items-center absolute top-0 left-0 p-3">
                        <h1 className="text-xl font-bold">
                            {company[0].toUpperCase()}
                        </h1>
                        {suit}
                    </div>
                    <div>
                        <img
                            src={`./imgs/${company}.png`}
                            className="w-48 h-48"
                            style={{
                                filter: filter,
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center absolute bottom-0 right-0 p-3">
                        <h1 className="text-xl font-bold">V</h1>
                        {suit}
                    </div>
                </div>
                {/* BACK OF THE CARD */}
                <div
                    className={`bg-b-white absolute [transform:rotateY(180deg)] max-sm:text-sm p-5 ${dims} rounded-lg flex flex-col items-center justify-center shadow-2xl`}
                >
                    {/* <div className="bg-b-black text-b-white px-2 py-1 mb-4">
                        <span className="font-bold mr-2">Stack:</span>
                        {stack}
                    </div> */}
                    {someoneElseFlipped ? (
                        Array(3)
                            .fill(1)
                            .map((x, i) => (
                                <div
                                    className={`flex items-center justify-center`}
                                    key={i}
                                >
                                    {Array(2)
                                        .fill(1)
                                        .map((x, j) => (
                                            <BAngularSquares i={j} key={j} />
                                        ))}
                                </div>
                            ))
                    ) : (
                        <div
                            className={`${(someoneElseFlipped || !flipped) && "opacity-0"} `}
                        >
                            {content}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Card;
