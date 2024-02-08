import { fadeIn } from "../consts";

interface ButtonProps {
    children: React.ReactNode;
    bg: string;
    i?: number;
}

const Button = ({ children, bg, i }: ButtonProps) => {
    return (
        <div
            className={`w-12 h-12 ${bg} flex justify-center items-center ml-4 fadeIn ${fadeIn[i ?? 0]}`}
        >
            {children}
        </div>
    );
};

export default Button;
