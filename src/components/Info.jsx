import vid1 from "../assets/vid1.mp4"
 const Info=()=>{

    return (<>
    <div className="info" >
        <div className="box_left" ><h1 className="bungee-tint-regular name" >“Hi, I'm Sai – Front-End Developer crafting modern, responsive, and interactive UIs.”</h1></div>
        <div className="box_right" ><video src={vid1} className="vid1" autoPlay muted loop ></video></div>
        {/* autoPlay muted loop */}
    </div>
    </>)
 }
 export default Info;