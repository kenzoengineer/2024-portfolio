import BDot from "./bauhaus/BDot";
import BEye from "./bauhaus/BEye";

const Hello = () => {
    return (
        <div className=" md:h-[50vh] text-b-black md:grid md:grid-cols-2 font-bold">
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-col items-center bg-b-white border-b-black border-4 p-6 mb-8">
                    <img
                        src="./imgs/ken.png"
                        className={`w-96 aspect-square`}
                    ></img>
                    <div className="flex h-20 items-center justify-center">
                        Me
                    </div>
                </div>
            </div>
            <div className="pr-48 flex flex-col justify-center md:w-[40vw]">
                <div>
                    <h1 className="font-thin text-5xl mb-8">
                        Since the day I attained sentience, I've loved
                        <span className="font-bold"> creating.</span>
                    </h1>
                    <p className="mb-4">
                        I started off by creating problems for my parents.
                    </p>
                    <p className="mb-4">
                        Jokes aside, nothing beats the gratification that comes
                        with creating something cool, and being able to say "I
                        made that." Whether it's code in a file, graphite on
                        paper, clips on a timeline in Premiere Pro, or something
                        else that's intangible, it's all fundamentally the same.
                    </p>
                    <p className="mb-12">Something was created from nothing.</p>
                    <p>
                        I hope you enjoy looking at the website I created, and I
                        hope you enjoy learning a bit about my professional
                        career.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hello;
