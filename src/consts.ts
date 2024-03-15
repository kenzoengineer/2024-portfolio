import { useEffect, useRef, useState } from "react";

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
    }, [ref]);

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

export const BREAKPOINT_SMALL = 640;
