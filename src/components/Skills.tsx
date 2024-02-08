import SkillsContainer from "./SkillsContainer";
import BLogs from "./bauhaus/BLogs";

const Skills = () => {
    return (
        <div className="flex flex-col px-20 py-32">
            <div className="text-bigger">
                TECHNICAL<span className="font-black"> SKILLS</span>
            </div>
            <div className="flex items-center justify-center">
                <BLogs />
                <SkillsContainer />
            </div>
        </div>
    );
};

export default Skills;
