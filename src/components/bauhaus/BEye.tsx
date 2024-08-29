import { useRef } from "react";
import { useMousePosition } from "../../consts";

interface BEyeProps {
    visible: boolean;
}

const BEye = ({ visible }: BEyeProps) => {
    const ocular = useRef<HTMLDivElement>(null);

    const mp = useMousePosition();
    let xcomponent = 0;
    let ycomponent = 0;

    // optimize by only performing transform when visible
    if (visible) {
        let { x, y } = ocular.current
            ? ocular.current?.getBoundingClientRect()
            : { x: 0, y: 0 };
        x += 48;
        y += 48;
        const R = 8;
        const angle = Math.atan((mp.y - y) / (mp.x - x));
        xcomponent = R * Math.cos(angle) * (mp.x - x < 0 ? -1 : 1);
        ycomponent = R * Math.sin(angle) * (mp.x - x < 0 ? -1 : 1);

        if (Math.pow(mp.y - y, 2) + Math.pow(mp.x - x, 2) < Math.pow(R, 2)) {
            xcomponent = mp.x - x;
            ycomponent = mp.y - y;
        }
    }
    const s = {
        transform: `translate(${xcomponent}px,${ycomponent}px)`,
    };
    return (
        <div className="w-36 pl-5">
            <div className="w-24 h-24" ref={ocular}>
                <div className="w-24 h-24 absolute rounded-tr-full rounded-bl-full bg-b-white -rotate-45"></div>
                <div
                    className="flex items-center justify-center pt-12"
                    style={s}
                >
                    <div className="w-10 h-10 bg-b-blue rounded-full absolute"></div>
                    <div className="w-8 h-8 bg-b-black rounded-full absolute"></div>
                </div>
            </div>
        </div>
    );
};

export default BEye;
