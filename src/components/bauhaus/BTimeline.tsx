import { useEffect, useRef } from "react";
import { extend, fadeIn, useIsVisible } from "../../consts";

type Event = {
    title: string;
    subtitle: string;
    content: string;
    time?: string;
};
interface BEventProps {
    event: Event;
    idx: number;
    last: boolean;
    isVisible: boolean;
}
interface BTimelineProps {
    events: Event[];
}

const BEvent = ({ event, idx, last, isVisible }: BEventProps) => {
    const lineRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        if (!isVisible) {
            return;
        }
        lineRef.current?.classList.add(...extend[idx].split(" "));
        contentRef.current?.classList.add(...fadeIn[idx * 2].split(" "));
    }, [isVisible]);
    return (
        <div className={`h-24 flex flex-row`}>
            <div
                className={`h-0 w-1 ${!last ? "bg-b-blue" : "bg-transparent"}`}
                ref={lineRef}
            ></div>
            <div className={`opacity-0`} ref={contentRef}>
                {/*                                               16 px for the width, 4 px for the border */}
                <div className="absolute w-5 h-5 bg-b-black -ml-[12px] rounded-full"></div>
                <div className="absolute -ml-[42px] text-b-red">
                    {event.time}
                </div>
                <div className="absolute pl-5 -mt-2">
                    <h1 className="text-3xl font-bold m-0 p-0">
                        {event.title}
                    </h1>
                    <p className="text-sm font-thin italic">{event.subtitle}</p>
                    <h2>{event.content}</h2>
                </div>
            </div>
        </div>
    );
};

const BTimeline = ({ events }: BTimelineProps) => {
    const timelineRef = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(timelineRef);
    return (
        <div className="m-5" ref={timelineRef}>
            {events.map((x, i) => (
                <BEvent
                    event={x}
                    idx={i}
                    last={i === events.length - 1}
                    key={i}
                    isVisible={isVisible}
                ></BEvent>
            ))}
        </div>
    );
};
export default BTimeline;
