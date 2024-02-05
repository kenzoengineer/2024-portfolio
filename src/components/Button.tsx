interface ButtonProps {
    children: React.ReactNode;
    bg: string;
}

const Button = ({ children, bg }: ButtonProps) => {
    return (
        <div
            className={`w-12 h-12 ${bg} flex justify-center items-center ml-4`}
        >
            {children}
        </div>
    );
};

export default Button;
