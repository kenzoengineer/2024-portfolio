import Matter from "matter-js";
import { useEffect, useRef, useState } from "react";
import IconContainer from "./IconContainer";
import {
    FaPython,
    FaJava,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
    FaPlay,
    FaPause,
    FaMousePointer,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
    SiCplusplus,
    SiTypescript,
    SiJavascript,
    SiVuetify,
    SiReact,
    SiDotnet,
    SiMongodb,
    SiUnity,
    SiNextdotjs,
} from "react-icons/si";
import { BiLogoVuejs, BiLogoPostgresql } from "react-icons/bi";

const TITLES = [
    <div className="flex">
        <h1 className="text-3xl font-thin">LANGUAGES</h1>
    </div>,
    <div className="flex">
        <h1 className="text-3xl font-thin">FRAMEWORKS</h1>
    </div>,
    <div className="flex">
        <h1 className="text-3xl font-thin">TOOLS</h1>
    </div>,
];

const GLOBAL_X_OFFSET = 65;
const GLOBAL_Y_OFFSET = 120;

const GLOBAL_W = 700;
const GLOBAL_H = 600;

interface PhysicsPaneProps {
    setTitleText(arg0: string): void;
}

const PhysicsPane = ({ setTitleText }: PhysicsPaneProps) => {
    const sceneRef = useRef<HTMLDivElement>(null);
    let engineRef = useRef(
        Matter.Engine.create({
            gravity: { y: 0.5 },
            enableSleeping: true,
            positionIterations: 2,
        }),
    );

    const enableGravityRef = useRef(false);
    const [enableGravity, setEnableGravity] = useState(
        enableGravityRef.current,
    );

    const iconClass = "w-12 h-12 text-b-white";
    const ICON_LIST = [
        <IconContainer
            bg={"bg-b-blue"}
            name="Javascript"
            setHovered={setTitleText}
        >
            <SiJavascript className={iconClass} />
        </IconContainer>,
        <IconContainer
            bg={"bg-b-blue"}
            name="Typescript"
            setHovered={setTitleText}
        >
            <SiTypescript className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-blue"} name="Python" setHovered={setTitleText}>
            <FaPython className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-blue"} name="C#" setHovered={setTitleText}>
            <TbBrandCSharp className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-blue"} name="C++" setHovered={setTitleText}>
            <SiCplusplus className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-blue"} name="Java" setHovered={setTitleText}>
            <FaJava className={iconClass} />
        </IconContainer>,
        <IconContainer
            bg={"bg-b-yellow"}
            name="React"
            setHovered={setTitleText}
        >
            <SiReact className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-yellow"} name="Next" setHovered={setTitleText}>
            <SiNextdotjs className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-yellow"} name="Vue" setHovered={setTitleText}>
            <BiLogoVuejs className={iconClass} />
        </IconContainer>,
        <IconContainer
            bg={"bg-b-yellow"}
            name="Vuetify"
            setHovered={setTitleText}
        >
            <SiVuetify className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-yellow"} name=".NET" setHovered={setTitleText}>
            <SiDotnet className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-yellow"} name="Node" setHovered={setTitleText}>
            <FaNodeJs className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-red"} name="Git" setHovered={setTitleText}>
            <FaGitAlt className={iconClass} />
        </IconContainer>,
        <IconContainer
            bg={"bg-b-red"}
            name="PostgreSQL"
            setHovered={setTitleText}
        >
            <BiLogoPostgresql className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-red"} name="MongoDB" setHovered={setTitleText}>
            <SiMongodb className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-red"} name="Docker" setHovered={setTitleText}>
            <FaDocker className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-red"} name="AWS" setHovered={setTitleText}>
            <FaAws className={iconClass} />
        </IconContainer>,
        <IconContainer bg={"bg-b-red"} name="Unity" setHovered={setTitleText}>
            <SiUnity className={iconClass} />
        </IconContainer>,
    ];

    useEffect(() => {
        const engine = engineRef.current;

        const elems = [];
        for (let i = 0; i < ICON_LIST.length; i++) {
            const iconElement = document.querySelector<HTMLElement>(`#box${i}`);
            elems.push({
                w: iconElement?.offsetWidth,
                h: iconElement?.offsetHeight,
                body: Matter.Bodies.rectangle(
                    50 +
                        (i % 6) * (iconElement!.offsetWidth + 10) +
                        GLOBAL_X_OFFSET,
                    30 + Math.floor(i / 6) * 150 + GLOBAL_Y_OFFSET,
                    iconElement!.offsetWidth,
                    iconElement!.offsetHeight,
                ),
                elem: iconElement,
                render() {
                    const { x, y } = this.body.position;
                    if (!this.elem) return;
                    this.elem.style.top = `${y - this.h / 2}px`;
                    this.elem.style.left = `${x - this.w / 2}px`;
                    this.elem.style.transform = `rotate(${this.body.angle}rad)`;
                },
            });
        }

        for (let i = 0; i < TITLES.length; i++) {
            const titleElement = document.querySelector<HTMLElement>(
                `#title${i}`,
            );
            elems.push({
                w: titleElement?.offsetWidth,
                h: titleElement?.offsetHeight,
                body: Matter.Bodies.rectangle(
                    20 + titleElement!.offsetWidth / 2 + GLOBAL_X_OFFSET,
                    i * 150 - titleElement!.offsetHeight + GLOBAL_Y_OFFSET,
                    titleElement!.offsetWidth,
                    titleElement!.offsetHeight,
                ),
                elem: titleElement,
                render() {
                    const { x, y } = this.body.position;
                    if (!this.elem) return;
                    this.elem.style.top = `${y - this.h / 2}px`;
                    this.elem.style.left = `${x - this.w / 2}px`;
                    this.elem.style.transform = `rotate(${this.body.angle}rad)`;
                },
            });
        }

        const { world } = engine;

        const ground = Matter.Bodies.rectangle(
            GLOBAL_W / 2,
            GLOBAL_H + 50 / 2 - 16,
            GLOBAL_W,
            50,
            { isStatic: true },
        );
        const left = Matter.Bodies.rectangle(
            0 - 50 / 2,
            GLOBAL_H / 2,
            50,
            GLOBAL_H,
            {
                isStatic: true,
            },
        );
        const right = Matter.Bodies.rectangle(
            GLOBAL_W + 50 / 2 - 16,
            GLOBAL_H / 2,
            50,
            GLOBAL_H,
            {
                isStatic: true,
            },
        );

        const top = Matter.Bodies.rectangle(
            GLOBAL_W / 2,
            0 - 50 / 2,
            GLOBAL_W,
            50,
            { isStatic: true },
        );

        const mouse = Matter.Mouse.create(sceneRef.current!);
        const mouseConstraint = Matter.MouseConstraint.create(
            engineRef.current,
            {
                mouse: mouse,
                constraint: {
                    render: {
                        visible: false,
                    },
                },
            },
        );
        mouseConstraint.mouse.element.removeEventListener(
            "wheel",
            //@ts-ignore
            mouseConstraint.mouse.mousewheel,
        );
        //@ts-ignore
        mouse.element.removeEventListener("wheel", mouse.mousewheel);
        // Add the bodies to the world
        Matter.Composite.add(world, [
            ...elems.map((x) => x.body),
            ground,
            left,
            right,
            top,
            mouseConstraint,
        ]);

        // Run the renderer
        (function rerender() {
            elems.forEach((x) => x.render());
            if (enableGravityRef.current)
                Matter.Engine.update(engineRef.current, 10);
            requestAnimationFrame(rerender);
        })();
        //const gameloop = setInterval(loopLogic, 10);

        // Cleanup on unmount
        return () => {
            //clearInterval(gameloop);
            Matter.World.clear(world, false);
            Matter.Engine.clear(engine);
        };
    }, []);

    return (
        <div className="">
            <div
                ref={sceneRef}
                className={`w-[700px] h-[600px] border-8 border-b-black relative`}
            >
                {Array(ICON_LIST.length)
                    .fill(1)
                    .map((x, i) => {
                        return (
                            <div
                                id={`box${i}`}
                                key={i}
                                className={`absolute flex items-center justify-center w-20 h-20 select-none ${enableGravity && "cursor-pointer"}`}
                            >
                                {ICON_LIST[i]}
                            </div>
                        );
                    })}
                {TITLES.map((x, i) => {
                    return (
                        <div
                            id={`title${i}`}
                            key={i}
                            className={`absolute select-none ${enableGravity && "cursor-pointer"}`}
                        >
                            {x}
                        </div>
                    );
                })}
            </div>
            <div className="flex items-center">
                <div
                    className={`${enableGravity ? "bg-b-red" : "bg-b-blue"} text-b-white font-medium text-xl py-2 px-4 w-56 flex items-center transition-transform hover:scale-105 cursor-pointer select-none`}
                    onClick={() => {
                        enableGravityRef.current = !enableGravityRef.current;
                        setEnableGravity(enableGravityRef.current);
                    }}
                >
                    {enableGravity ? (
                        <FaPause className="w-6 h-6 text-b-white" />
                    ) : (
                        <FaPlay className="w-6 h-6 text-b-white animate-pulse" />
                    )}
                    <p className="ml-3">
                        {enableGravity ? "Disable Physics" : "Enable Physics"}
                    </p>
                </div>
                <div
                    className={`flex items-center ${enableGravity ? "" : "opacity-0"} transition-opacity duration-300`}
                >
                    <FaMousePointer className="ml-5 mr-1" /> Click and drag an
                    object to move it
                </div>
            </div>
        </div>
    );
};
export default PhysicsPane;
