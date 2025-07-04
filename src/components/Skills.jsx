import "../components/Skills.css"
import { IoLogoJavascript } from "react-icons/io5";
import { TiHtml5 } from "react-icons/ti";
import { MdOutlineCss } from "react-icons/md";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiPhotoshop } from "react-icons/di";
import { SiMongodb } from "react-icons/si";

 const Skills=()=>{

    return(<>
       <div className="skills_cont">
            <TiHtml5 className="html" />
            <MdOutlineCss className="css" />
            <IoLogoJavascript className="js"/>
            <FaReact className="react" />
            <FaBootstrap className="boot" />
            <FaNodeJs className="node" />
            <SiPostman className="post" />
            <DiPhotoshop className="photo" />
            <SiMongodb className="mongo" />
       </div>
    
    </>)
 }

  export default Skills;