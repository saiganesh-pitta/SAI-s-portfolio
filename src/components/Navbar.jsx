import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaWhatsapp } from "react-icons/fa";
import bgimg from "../assets/Untitled-1.png"
import { NavLink } from "react-router-dom";

  const Navbar=()=>{


    return <>
   
      <div className="navbar" >
             <NavLink to="/" className= {({ isActive }) =>`line ${isActive ?'':'blinker'}`} ><h1 className="montserrat shining-text mobile_text">Pitta Saiganesh's Portfolio</h1></NavLink>
             <div className="options montserrat-custom" >
              {/* mobie */}
               <span >
               <a href="https://github.com/saiganesh-pitta" target="_blank" className="    mobile_git"><FaGithub/></a>
             </span>
             {/* big screen */}
             <span >
               <a href="https://github.com/saiganesh-pitta" target="_blank" className="non none"><FaGithub/>GitHub</a>
             </span>
             {/* mobie */}
              <span>
              <a  href="mailto:saiganeshpitta5@gmail.com?subject=I%20have%20seen%20your%20website&body=Hi%20there,"
                  target="_blank"
                 rel="noopener noreferrer"className="mobile_gmail" ><SiGmail/></a>
            </span>
             {/* bigscreen */}
            <span>
              <a  href="mailto:saiganeshpitta5@gmail.com?subject=I%20have%20seen%20your%20website&body=Hi%20there,"
                  target="_blank"
                 rel="noopener noreferrer"className="gmail none" ><SiGmail/>Gmail</a>
            </span>
            {/* mobie */}
             <span >
              <a href="https://www.linkedin.com/in/pittasaiganesh5/" target="_blank" className="mobile_linkdin"><FaLinkedin/></a>
             </span>
            {/* bigscreen */}
             <span >
              <a href="https://www.linkedin.com/in/pittasaiganesh5/" target="_blank" className="linkdin none"><FaLinkedin/>Linkedin</a>
             </span>
             {/* mobile */}
              <span>
              <a href="https://wa.me/9573945391?text=Hi%20there..." target="_blank" className="mobile_whatsapp" ><FaWhatsapp /></a>
             </span>
             {/* bigscreen */}
             <span>
              <a href="https://wa.me/9573945391?text=Hi%20there..." target="_blank" className="whatsapp none" ><FaWhatsapp />Whatsapp</a>
             </span>
             </div>
      </div>    
        <img className="bgimg" src={bgimg} />    

    </>
  }

  export default Navbar