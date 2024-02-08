interface BDotProps {
    color: string;
}

const BDot = ({ color }: BDotProps) => {
    return (
        <div className="w-6 h-6 ml-6 flex justify-center items-center">
            <div className={`rounded-full w-6 h-6 ${color}`}></div>
        </div>
    );
};

export default BDot;
