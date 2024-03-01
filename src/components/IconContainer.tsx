import { fadeIn } from "../consts";

interface IconContainerProps {
    children: React.ReactNode;
    bg: string;
    name: string;
    setHovered(arg0: string): any;
}

const IconContainer = ({ children, bg, name, setHovered }: IconContainerProps) => {
    return (
        <div className="shadow-hard mr-7 bg-b-black translate-x-3 translate-y-3" onMouseEnter={() => {setHovered(name)}} onMouseLeave={() => {setHovered("")}}>
            <div
                className={`relative w-20 h-20 ${bg} flex justify-center items-center -translate-x-3 -translate-y-3 hover:-translate-x-4 hover:-translate-y-4 transition-transform`}
            >
                {children}
            </div>
        </div>
    );
};

export default IconContainer;
