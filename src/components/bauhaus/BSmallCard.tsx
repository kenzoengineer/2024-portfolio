import { MouseEvent, useRef } from "react";

const dims = "w-[10rem] md:w-[15rem] h-[10rem] md:h-[10rem]";

interface CardProps {
    title: string;
    children?: React.ReactNode;
    cta: string;
}

const BSmallCard = ({ title, children, cta }: CardProps) => {
    const cardContainerElem = useRef<HTMLDivElement>(null);
    const cardElem = useRef<HTMLDivElement>(null);
    const tooltipElem = useRef<HTMLDivElement>(null);

    const mouseEnterHandler = () => {
        cardContainerElem.current!.classList.add("z-20");
        tooltipElem.current?.classList.remove("hidden");
    };
    const mouseLeaveHandler = () => {
        cardElem.current!.classList.add("transition-transform");
        cardContainerElem.current!.classList.remove("z-20");
        cardElem.current!.style.transform = "";
        tooltipElem.current?.classList.add("hidden");
    };
    const mouseHandler = (e: MouseEvent | null) => {
        if (!e) {
            mouseLeaveHandler();
            return;
        }
        const r = e!.currentTarget.getBoundingClientRect();
        const x = e!.clientX - r.left;
        const y = e!.clientY - r.top;
        cardElem.current!.classList.remove("transition-transform");
        cardElem.current!.style.transform = `rotateX(${40 * (y / r.height - 0.5)}deg) rotateY(${-40 * (x / r.width - 0.5)}deg) perspective(250px)
         translate3d(${50 * (x / r.width - 0.5)}px, ${50 * (y / r.height - 0.5)}px, 20px)`;
    };

    return (
        <a href={cta} target="_blank">
            <div
                className={`m-3 ${dims}`}
                onMouseEnter={mouseEnterHandler}
                onMouseMove={mouseHandler}
                onMouseLeave={mouseLeaveHandler}
            >
                <div
                    className={`preserve transition-transform duration-500 relative`}
                    ref={cardContainerElem}
                >
                    <div
                        ref={cardElem}
                        className={`bg-b-black ${dims} shadow-lg hover:shadow-b-yellow transition-shadow`}
                    >
                        <div className="text-sm md:text-3xl text-b-white font-bold py-1 px-3">
                            {title}
                        </div>
                        <div className="flex flex-col items-center">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </a>
    );
};

export default BSmallCard;
