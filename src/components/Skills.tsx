import { useState } from "react";
import SkillsContainer from "./SkillsContainer";
import BLogs from "./bauhaus/BLogs";

const Skills = () => {
    const [hovered, setHovered] = useState("");
    return (
        <div className="flex flex-col md:px-20 md:py-32">
            <div className="text-8xl md:text-bigger">
                TECHNICAL<span className="font-black"> SKILLS</span>
            </div>
            <div className="flex max-md:flex-col-reverse items-center justify-center mt-10">
                <BLogs hovered={hovered} />
                <SkillsContainer setHovered={setHovered} />
            </div>
        </div>
    );
};

export default Skills;
