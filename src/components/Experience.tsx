import Card, { CardProps } from "./Card";
import BAngularSquares from "./bauhaus/BAngularSquares";

const experiences: CardProps[] = [
    {
        company: "Vontive",
        title: "Software Engineer",
        dates: "Jan 2024 - Present",
        location: "San Francisco",
        content: "WOWOWOW",
    },
    {
        company: "Senstar",
        title: "Software Developer",
        dates: "Jan 2024 - Present",
        location: "Waterloo",
        content: "WOWOWOW",
    },
    {
        company: "Shoplogix",
        title: "Software Developer",
        dates: "Jan 2024 - Present",
        location: "Oakville",
        content: "WOWOWOW",
    },
    {
        company: "QBuild",
        title: "Application Developer",
        dates: "Jan 2024 - Present",
        location: "Markham",
        content: "WOWOWOW",
    },
];

const Experience = () => {
    return (
        <div className="bg-b-black h-[100vh]">
            <div className="text-b-white text-bigger">Experience</div>
            <div className="flex">
                {experiences.map((x) => (
                    <Card {...x}>
                        {Array(4)
                            .fill(1)
                            .map((x, i) => (
                                <div className={`flex`}>
                                    {Array(4)
                                        .fill(1)
                                        .map((x, j) => (
                                            <BAngularSquares i={j} />
                                        ))}
                                </div>
                            ))}
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default Experience;
