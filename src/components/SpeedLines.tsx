import { fadeIn } from "../consts";

interface SpeedLinesProps {
    count: number;
}

const dimensions = [
    "w-1 mx-2",
    "w-2 mx-2",
    "w-3 mx-2",
    "w-4 mx-2",
    "w-5 mx-2",
    "w-6 mx-2",
    "w-7 mx-2",
    "w-8 mx-2",
    "w-9 mx-2",
    "w-10 mx-2",
];

const SpeedLines = ({ count }: SpeedLinesProps) => {
    const lines: JSX.Element[] = [];

    for (let i = 0; i < count; i++) {
        lines.push(
            <div className={`${dimensions[i]} ${fadeIn[i]} bg-black`}></div>,
        );
    }

    return (
        <div className="flex h-full">
            {lines.map((l) => {
                return l;
            })}
        </div>
    );
};

export default SpeedLines;
