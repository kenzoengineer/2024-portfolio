import {
    FaPython,
    FaJava,
    FaNodeJs,
    FaGitAlt,
    FaDocker,
    FaAws,
} from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import {
    SiCplusplus,
    SiTypescript,
    SiJavascript,
    SiVuetify,
    SiReact,
    SiDotnet,
    SiMongodb,
    SiUnity,
} from "react-icons/si";
import { BiLogoVuejs, BiLogoPostgresql } from "react-icons/bi";
import IconContainer from "./IconContainer";

const iconClass = "w-12 h-12 text-b-white";

const SkillsContainer = () => {
    return (
        <div className="flex flex-col ml-10">
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">LANGUAGES</h1>
                </div>
                <div className="flex">
                    <IconContainer bg={"bg-b-blue"}>
                        <SiJavascript className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-blue"}>
                        <SiTypescript className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-blue"}>
                        <FaPython className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-blue"}>
                        <TbBrandCSharp className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-blue"}>
                        <SiCplusplus className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-blue"}>
                        <FaJava className={iconClass} />
                    </IconContainer>
                </div>
            </div>
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">FRAMEWORKS</h1>
                </div>
                <div className="flex">
                    <IconContainer bg={"bg-b-yellow"}>
                        <SiReact className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-yellow"}>
                        <BiLogoVuejs className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-yellow"}>
                        <SiVuetify className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-yellow"}>
                        <SiDotnet className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-yellow"}>
                        <FaNodeJs className={iconClass} />
                    </IconContainer>
                </div>
            </div>
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">TOOLS</h1>
                </div>
                <div className="flex">
                    <IconContainer bg={"bg-b-red"}>
                        <FaGitAlt className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-red"}>
                        <BiLogoPostgresql className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-red"}>
                        <SiMongodb className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-red"}>
                        <FaDocker className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-red"}>
                        <FaAws className={iconClass} />
                    </IconContainer>
                    <IconContainer bg={"bg-b-red"}>
                        <SiUnity className={iconClass} />
                    </IconContainer>
                </div>
            </div>
        </div>
    );
};

export default SkillsContainer;
