import { useEffect, useRef } from "react";
import { useIsVisible } from "../../consts";

const BLogs = () => {
    const ref = useRef<any>();
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

    const rowStyle =
        "relative w-[80vw] md:w-[30rem] h-24 md:h-20 overflow-x-hidden bg-b-black";

    return (
        <div className="flex flex-col" ref={ref}>
            <div className={rowStyle}>
                <div className="sr -translate-x-full">
                    <div className="absolute bg-b-red h-24 md:h-20 w-[30rem] rounded-r-full"></div>
                    <div className="absolute bg-b-yellow h-24 md:h-20 w-[15rem] rounded-r-full flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center"></span>
                    </div>
                </div>
            </div>
            <div className={rowStyle}>
                <div className="sl translate-x-full animation-delay-300">
                    <div className="absolute bg-b-red h-24 md:h-20 w-[30rem] rounded-l-full"></div>
                    <div className="absolute bg-b-blue h-24 md:h-20 w-[15rem] rounded-l-full right-0"></div>
                    <div className="absolute bg-b-yellow h-24 md:h-20 w-[15rem] rounded-tl-full right-[-10rem] flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold ml-9 relative z-10 self-center"></span>
                    </div>
                </div>
            </div>
            <div className={rowStyle}>
                <div className="sr -translate-x-full animation-delay-[600ms]">
                    <div className="absolute bg-b-black rounded-r-full h-24 md:h-20 w-[50rem]"></div>
                    <div className="absolute bg-b-yellow h-24 md:h-20 w-[20rem] rounded-r-full text-right"></div>
                    <div className="absolute bg-b-blue h-24 md:h-20 w-[10rem] rounded-r-full flex">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center"></span>
                    </div>
                </div>
                <div className="sl translate-x-full animation-delay-[300ms]">
                    <div className="absolute bg-b-red h-24 md:h-20 w-[15rem] rounded-bl-full right-[-10rem]"></div>
                </div>
            </div>
            <div className={rowStyle}>
                <div className="sl translate-x-full animation-delay-[900ms]">
                    <div className="absolute bg-b-red h-24 md:h-20 w-[50rem] rounded-l-full"></div>
                    <div className="relative bg-b-yellow h-24 md:h-20 w-[30rem] rounded-l-full right-[-20rem] flex justify-end">
                        <span className="text-b-black text-4xl md:text-7xl font-bold mx-5 self-center"></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BLogs;
