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

    return (
        <div className="flex flex-col md:mr-10" ref={ref}>
            <div className="relative w-screen md:w-[50rem] h-36 overflow-x-hidden bg-b-black">
                <div className="sr -translate-x-full">
                    <div className="absolute bg-b-red h-36 w-[50rem] rounded-r-full"></div>
                    <div className="absolute bg-b-yellow h-36 w-[30rem] rounded-r-full"></div>
                </div>
            </div>
            <div className="relative w-screen md:w-[50rem] h-36 overflow-x-hidden bg-b-black">
                <div className="sl translate-x-full animation-delay-300">
                    <div className="absolute bg-b-blue h-36 w-[50rem] rounded-l-full"></div>
                    <div className="absolute bg-b-black h-36 w-[30rem] rounded-l-full right-0"></div>
                    <div className="absolute bg-b-yellow h-36 w-[20rem] rounded-tl-full right-[-10rem]"></div>
                </div>
            </div>
            <div className="relative w-screen md:w-[50rem] h-36 overflow-x-hidden bg-b-black">
                <div className="sr -translate-x-full animation-delay-[600ms]">
                    <div className="absolute bg-b-blue rounded-r-full h-36 w-[50rem]"></div>
                    <div className="absolute bg-b-white h-36 w-[35rem] rounded-r-full"></div>
                    <div className="absolute bg-b-red h-36 w-[15rem] rounded-r-full"></div>
                </div>
                <div className="sl translate-x-full animation-delay-[300ms]">
                    <div className="absolute bg-b-red h-36 w-[20rem] rounded-bl-full right-[-10rem]"></div>
                </div>
            </div>
            <div className="relative w-screen md:w-[50rem] h-36 overflow-x-hidden bg-b-black">
                <div className="sl translate-x-full animation-delay-[900ms]">
                    <div className="absolute bg-b-blue h-36 w-[50rem] rounded-l-full"></div>
                    <div className="relative bg-b-yellow h-36 w-[30rem] rounded-l-full right-[-20rem]"></div>
                </div>
            </div>
        </div>
    );
};

export default BLogs;
