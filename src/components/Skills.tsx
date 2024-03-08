import { useState } from "react";
import SkillsContainer from "./SkillsContainer";
import BLogs from "./bauhaus/BLogs";

const Skills = () => {
    const [hovered, setHovered] = useState("");
    return (
        <div className="flex flex-col px-10 py-24 md:px-36 md:py-32">
            <div className="text-8xl md:text-bigger">
                TECHNICAL<span className="font-black"> SKILLS</span>
            </div>
            <div className="flex max-lg:flex-col-reverse items-center justify-center md:mt-10">
                <BLogs hovered={hovered} />
                <SkillsContainer setHovered={setHovered} />
            </div>
        </div>
    );
};

export default Skills;
