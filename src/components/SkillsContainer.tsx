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
    SiNextdotjs,
} from "react-icons/si";
import { BiLogoVuejs, BiLogoPostgresql } from "react-icons/bi";
import IconContainer from "./IconContainer";

const iconClass = "w-12 h-12 text-b-white";

interface SkillsContainerProps {
    setHovered(arg0: string): any;
}

const SkillsContainer = ({ setHovered }: SkillsContainerProps) => {
    return (
        <div className="flex flex-col max-md:mt-10 ml-24 md:ml-10">
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">LANGUAGES</h1>
                </div>
                <div className="flex flex-wrap max-md:w-screen max-md:gap-y-7">
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="Javascript"
                        setHovered={setHovered}
                    >
                        <SiJavascript className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="Typescript"
                        setHovered={setHovered}
                    >
                        <SiTypescript className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="Python"
                        setHovered={setHovered}
                    >
                        <FaPython className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="C#"
                        setHovered={setHovered}
                    >
                        <TbBrandCSharp className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="C++"
                        setHovered={setHovered}
                    >
                        <SiCplusplus className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-blue"}
                        name="Java"
                        setHovered={setHovered}
                    >
                        <FaJava className={iconClass} />
                    </IconContainer>
                </div>
            </div>
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">FRAMEWORKS</h1>
                </div>
                <div className="flex flex-wrap max-md:w-screen max-md:gap-y-7">
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name="React"
                        setHovered={setHovered}
                    >
                        <SiReact className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name="Next"
                        setHovered={setHovered}
                    >
                        <SiNextdotjs className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name="Vue"
                        setHovered={setHovered}
                    >
                        <BiLogoVuejs className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name="Vuetify"
                        setHovered={setHovered}
                    >
                        <SiVuetify className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name=".NET"
                        setHovered={setHovered}
                    >
                        <SiDotnet className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-yellow"}
                        name="Node"
                        setHovered={setHovered}
                    >
                        <FaNodeJs className={iconClass} />
                    </IconContainer>
                </div>
            </div>
            <div className="mb-10">
                <div className="flex">
                    <h1 className="text-3xl font-thin">TOOLS</h1>
                </div>
                <div className="flex flex-wrap max-md:w-screen max-md:gap-y-7">
                    <IconContainer
                        bg={"bg-b-red"}
                        name="Git"
                        setHovered={setHovered}
                    >
                        <FaGitAlt className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-red"}
                        name="PostgreSQL"
                        setHovered={setHovered}
                    >
                        <BiLogoPostgresql className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-red"}
                        name="MongoDB"
                        setHovered={setHovered}
                    >
                        <SiMongodb className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-red"}
                        name="Docker"
                        setHovered={setHovered}
                    >
                        <FaDocker className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-red"}
                        name="AWS"
                        setHovered={setHovered}
                    >
                        <FaAws className={iconClass} />
                    </IconContainer>
                    <IconContainer
                        bg={"bg-b-red"}
                        name="Unity"
                        setHovered={setHovered}
                    >
                        <SiUnity className={iconClass} />
                    </IconContainer>
                </div>
            </div>
        </div>
    );
};

export default SkillsContainer;
