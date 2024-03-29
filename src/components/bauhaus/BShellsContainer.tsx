import { useEffect, useRef, useState } from "react";
import BShells from "./BShells";

interface BShellsContainerProps {
    height: number;
    width: number;
}

const BShellsContainer = ({ height, width }: BShellsContainerProps) => {
    const [blocksRemoved, setBlocksRemoved] = useState(false);
    const parentRef = useRef<HTMLDivElement>(null);
    const [randoms, setRandoms] = useState(Array(height * width));
    useEffect(() => {
        for (let i = 0; i < height * width; i++) {
            setRandoms((x) => {
                const n = [...x];
                n[i] = Array.from({ length: 4 }, () =>
                    Math.floor(Math.random() * 4),
                );
                return [...n];
            });
        }
    }, []);
    return (
        <div ref={parentRef} className="z-10">
            {!blocksRemoved &&
                Array(height)
                    .fill(1)
                    .map((_, i) => {
                        return (
                            <div className="flex">
                                {Array(width)
                                    .fill(1)
                                    .map((_, j) => {
                                        return (
                                            <BShells
                                                parent={parentRef}
                                                randoms={
                                                    !randoms[j + i * width]
                                                        ? [0, 0, 0, 0]
                                                        : randoms[j + i * width]
                                                }
                                                setRemoved={setBlocksRemoved}
                                            />
                                        );
                                    })}
                            </div>
                        );
                    })}
        </div>
    );
};

export default BShellsContainer;
