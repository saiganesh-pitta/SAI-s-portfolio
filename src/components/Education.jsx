import grad from "../assets/grad.png" 
import "./Education.css"

 const Edu=()=>{


    return (<>
      <div className="Edu_cont">
        <div className="Edu_cont2">
            <div className="Edu_left">
                <h1 className="Edu_h1" >Graduated</h1>
                 <h2 className="Edu_h2" >Jayamukhi Institution of technology and sciences</h2>
                 <h3 className="Edu_h2" >Course: "B-Tech"</h3>                    
                 <h3 className="Edu_h3" > I completed my graduation in Electronics and Communication Engineering (ECE). Although my academic background is in electronics I’ve always been deeply interested in technology—especially the world of web development. 
    Over time, I discovered a strong passion for designing and building interactive, responsive user interfaces, which led me to pursue a career in  </h3>
            </div>
             <div className="Edu_right"> <img className="Edu_img"src={grad} /> </div>
        </div>    
      </div>
    </>)
 }
 export default Edu;