import { fadeIn } from "../consts";

interface ButtonProps {
    children: React.ReactNode;
    bg: string;
    to?: string;
    i?: number;
}

const Button = ({ children, bg, to, i }: ButtonProps) => {
    return (
        <a
            href={to}
            target="_blank"
            className={`w-12 h-12 ${bg} flex justify-center items-center ml-4 fadeIn ${fadeIn[i ?? 0]} ${to && "cursor-pointer"} transition-transform hover:scale-105`}
        >
            {children}
        </a>
    );
};

export default Button;
