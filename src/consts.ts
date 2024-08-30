import { useEffect, useState } from "react";

export const colors = ["#f1522b", "#0077b7", "#ffc81c", "#fffdff", "#2e252c"];
export const colorsSansWhite = ["#f1522b", "#0077b7", "#ffc81c", "#2e252c"];

export const fadeIn = [
    "fadeIn animation-delay-[100ms] opacity-0",
    "fadeIn animation-delay-[200ms] opacity-0",
    "fadeIn animation-delay-[300ms] opacity-0",
    "fadeIn animation-delay-[400ms] opacity-0",
    "fadeIn animation-delay-[500ms] opacity-0",
    "fadeIn animation-delay-[600ms] opacity-0",
    "fadeIn animation-delay-[700ms] opacity-0",
    "fadeIn animation-delay-[800ms] opacity-0",
    "fadeIn animation-delay-[900ms] opacity-0",
    "fadeIn animation-delay-[1000ms] opacity-0",
    "fadeIn animation-delay-[1100ms] opacity-0",
    "fadeIn animation-delay-[1200ms] opacity-0",
    "fadeIn animation-delay-[1300ms] opacity-0",
    "fadeIn animation-delay-[1400ms] opacity-0",
];

export const extend = [
    "extend animation-delay-[100ms] h-0",
    "extend animation-delay-[300ms] h-0",
    "extend animation-delay-[500ms] h-0",
    "extend animation-delay-[700ms] h-0",
    "extend animation-delay-[900ms] h-0",
    "extend animation-delay-[1100ms] h-0",
];

export const popIn = [
    "popIn animation-delay-[500ms] opacity-0",
    "popIn animation-delay-[1000ms] opacity-0",
    "popIn animation-delay-[1500ms] opacity-0",
    "popIn animation-delay-[2000ms] opacity-0",
    "popIn animation-delay-[2500ms] opacity-0",
    "popIn animation-delay-[3000ms] opacity-0",
    "popIn animation-delay-[3500ms] opacity-0",
    "popIn animation-delay-[4000ms] opacity-0",
];

export const selectRandom = (arr: any[]) => {
    return arr[Math.floor(Math.random() * arr.length)];
};

export function useIsVisible(
    ref: React.MutableRefObject<any>,
    threshold = 0.6,
) {
    const [isIntersecting, setIntersecting] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting),
            {
                threshold: threshold,
            },
        );

        observer.observe(ref.current);
        return () => {
            observer.disconnect();
        };
    }, [ref, threshold]);

    return isIntersecting;
}

export const useWindowDimension = () => {
    const [dimension, setDimension] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);
    useEffect(() => {
        const debouncedResizeHandler = debounce(() => {
            setDimension([window.innerWidth, window.innerHeight]);
        }, 300);
        window.addEventListener("resize", debouncedResizeHandler);
        return () =>
            window.removeEventListener("resize", debouncedResizeHandler);
    }, []);
    return dimension;
};

function debounce(fn: Function, ms: number) {
    let timer: NodeJS.Timeout | number | null;
    return () => {
        clearTimeout(timer as number);
        timer = setTimeout(function () {
            timer = null;
            fn.apply({}, arguments);
        }, ms);
    };
}

export const BREAKPOINT_MEDIUM = 768;
export const BREAKPOINT_SMALL = 640;

export const useMousePosition = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const updateMousePosition = (ev: MouseEvent) => {
            setMousePosition({ x: ev.clientX, y: ev.clientY });
        };
        window.addEventListener("mousemove", updateMousePosition);
        return () => {
            window.removeEventListener("mousemove", updateMousePosition);
        };
    }, []);
    return mousePosition;
};
