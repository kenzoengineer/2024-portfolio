import { MouseEvent, useRef, useState } from "react";

const dims = "w-[28em] h-[38em]";

export interface CardProps {
    company: string;
    title: string;
    location: string;
    dates: string;
    content: string;
    children?: React.ReactNode;
}

const Card = ({
    title,
    company,
    location,
    dates,
    content,
    children,
}: CardProps) => {
    const cardContainerElem = useRef<HTMLDivElement>(null);

    const cardElem = useRef<HTMLDivElement>(null);
    const [flipped, setFlipped] = useState(false);

    const mouseLeaveHandler = () => {
        cardElem.current!.classList.add("transition-transform");
        cardElem.current!.style.transform = "";
    };
    const mouseHandler = (e: MouseEvent | null) => {
        if (!e || flipped) {
            mouseLeaveHandler();
            return;
        }
        const r = e!.currentTarget.getBoundingClientRect();
        const x = e!.clientX - r.left;
        const y = e!.clientY - r.top;
        cardElem.current!.classList.remove("transition-transform");
        cardElem.current!.style.transform = `rotateX(${40 * (y / r.height - 0.5)}deg) rotateY(${-40 * (x / r.width - 0.5)}deg) perspective(250px)
         translate3d(${75 * (x / r.width - 0.5)}px, ${75 * (y / r.height - 0.5)}px, 20px)`;
    };
    const handleFlip = () => {
        setFlipped((x) => !x);
        mouseHandler(null);
    };

    return (
        <div
            className={`mx-3 ${dims}`}
            onClick={handleFlip}
            onMouseMove={mouseHandler}
            onMouseLeave={mouseLeaveHandler}
        >
            <div
                className={`cursor-pointer preserve transition-transform ${flipped && "[transform:rotateY(180deg)]"} duration-1000 relative`}
                ref={cardContainerElem}
            >
                <div
                    className={`bg-b-white text-b-black p-5 shadow-2xl absolute ${dims}`}
                    ref={cardElem}
                >
                    <div className="font-black text-7xl mb-3">{company}</div>
                    <div className="flex items-center mb-2">
                        <div className="text-xl bg-b-black text-b-white font-bold py-1 px-3 mr-3">
                            {title}
                        </div>
                        <div className="text-xl font-thin">{location}</div>
                    </div>
                    <div className="flex flex-col items-center">{children}</div>
                    <div className="mt-2">{dates}</div>
                </div>
                <div
                    className={`bg-b-white absolute [transform:rotateY(180deg)] p-5 ${dims}`}
                >
                    {content}
                </div>
            </div>
        </div>
    );
};

export default Card;
