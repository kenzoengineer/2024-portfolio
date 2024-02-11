import BAngularSquares from "./bauhaus/BAngularSquares";
import BDot from "./bauhaus/BDot";
import BEye from "./bauhaus/BEye";

const WIDTH = 6;
const HEIGHT = 2;

const Hello = () => {
    return (
        <div className="w-screen md:max-h-[80vh] text-b-black md:grid md:grid-cols-2 font-bold">
            <div className="flex flex-col justify-center items-center">
                <div className="flex">
                    {Array(WIDTH)
                        .fill(1)
                        .map((_, i) => (
                            <BAngularSquares i={i} />
                        ))}
                </div>
                <img
                    src="./imgs/ken.png"
                    className={`h-[36rem] aspect-square`}
                ></img>
                {Array(HEIGHT)
                    .fill(1)
                    .map((_) => (
                        <div className="flex">
                            {Array(WIDTH)
                                .fill(1)
                                .map((_, i) => (
                                    <BAngularSquares i={i} />
                                ))}
                        </div>
                    ))}
            </div>
            <div className="bg-b-yellow p-16 flex flex-col justify-center md:h-[80vh]">
                <div className="flex max-md:flex-col-reverse items-center">
                    <h1 className="text-9xl md:mr-4">Hello</h1>
                    <div className="flex items-center">
                        <BEye />
                        <BDot color="bg-b-black" />
                        <BDot color="bg-b-red" />
                        <BDot color="bg-b-blue" />
                    </div>
                </div>
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Integer volutpat diam eu urna porttitor, quis egestas
                        sem sodales. Nulla sit amet ullamcorper lorem, non
                        feugiat dui. Cras sed est a sem rhoncus pretium. Nunc
                        massa odio, cursus nec ullamcorper eget, viverra ut leo.
                        Integer nec egestas metus, non dapibus nisi. Mauris
                        finibus neque eget lacus ornare, quis porttitor dolor
                        egestas. Morbi vel turpis maximus, luctus enim tempus,
                        dapibus justo. Aliquam erat volutpat. Integer blandit
                        rhoncus libero. Mauris mollis at ante vel tempor. Nullam
                        ullamcorper quam id libero mattis tempus. Vivamus ornare
                        eget mauris sed commodo. Suspendisse interdum est sit
                        amet porttitor pulvinar.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hello;
