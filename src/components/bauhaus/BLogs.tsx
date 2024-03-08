import { useEffect, useRef } from "react";
import { useIsVisible } from "../../consts";

interface BLogsProps {
    hovered: string;
}

const BLogs = ({ hovered }: BLogsProps) => {
    const ref = useRef<any>();
    const idx =
        hovered.length < 3
            ? 0
            : hovered.length < 5
              ? 1
              : hovered.length < 9
                ? 2
                : 3;
    const isVisible = useIsVisible(ref);

    useEffect(() => {
        if (isVisible) {
            document.querySelectorAll(".sr")?.forEach((e) => {
                e.classList.add("slideRight");
            });
            document.querySelectorAll(".sl")?.forEach((e) => {
                e.classList.add("slideLeft");
            });
        }
    }, [isVisible]);

    return (
        <div className="flex flex-col md:mr-10" ref={ref}>
            <div className="relative w-[80vw] md:w-[50rem] h-24 md:h-36 overflow-x-hidden bg-b-black">
                <div className="sr -translate-x-full">
                    <div className="absolute bg-b-red h-24 md:h-36 w-[50rem] rounded-r-full"></div>
                    <div className="absolute bg-b-yellow h-24 md:h-36 w-[30rem] rounded-r-full flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center">
                            {idx === 2 && hovered}
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative w-[80vw] md:w-[50rem] h-24 md:h-36 overflow-x-hidden bg-b-black">
                <div className="sl translate-x-full animation-delay-300">
                    <div className="absolute bg-b-blue h-24 md:h-36 w-[50rem] rounded-l-full"></div>
                    <div className="absolute bg-b-black h-24 md:h-36 w-[30rem] rounded-l-full right-0"></div>
                    <div className="absolute bg-b-yellow h-24 md:h-36 w-[20rem] rounded-tl-full right-[-10rem] flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold ml-9 relative z-10 self-center">
                            {idx === 0 && hovered}
                        </span>
                    </div>
                </div>
            </div>
            <div className="relative w-[80vw] md:w-[50rem] h-24 md:h-36 overflow-x-hidden bg-b-black">
                <div className="sr -translate-x-full animation-delay-[600ms]">
                    <div className="absolute bg-b-blue rounded-r-full h-24 md:h-36 w-[50rem]"></div>
                    <div className="absolute bg-b-white h-24 md:h-36 w-[35rem] rounded-r-full text-right"></div>
                    <div className="absolute bg-b-red h-24 md:h-36 w-[15rem] rounded-r-full flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center">
                            {idx === 1 && hovered}
                        </span>
                    </div>
                </div>
                <div className="sl translate-x-full animation-delay-[300ms]">
                    <div className="absolute bg-b-red h-24 md:h-36 w-[20rem] rounded-bl-full right-[-10rem]"></div>
                </div>
            </div>
            <div className="relative w-[80vw] md:w-[50rem] h-24 md:h-36 overflow-x-hidden bg-b-black">
                <div className="sl translate-x-full animation-delay-[900ms]">
                    <div className="absolute bg-b-blue h-24 md:h-36 w-[50rem] rounded-l-full"></div>
                    <div className="relative bg-b-yellow h-24 md:h-36 w-[30rem] rounded-l-full right-[-20rem] flex justify-end">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center">
                            {idx === 3 && hovered}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BLogs;
