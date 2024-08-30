interface IconContainerProps {
    children: React.ReactNode;
    bg: string;
    name: string;
    setHovered(arg0: string): any;
}

const IconContainer = ({
    children,
    bg,
    name,
    setHovered,
}: IconContainerProps) => {
    return (
        <div
            onMouseEnter={() => {
                setHovered(name);
            }}
            onMouseLeave={() => {
                setHovered("");
            }}
        >
            <div
                className={`relative w-20 h-20 ${bg} flex justify-center items-center transition-transform`}
            >
                {children}
            </div>
        </div>
    );
};

export default IconContainer;
