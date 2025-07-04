import { NavLink } from "react-router-dom"

 const Buttons=()=>{
// {`btns_size ${(e)=>(e.isActive && 'btns_active')}`}
    return (<>
        <div className="info_btns montserrat-custom" >
            <NavLink to="/education" className= {({ isActive }) =>`btns_size ${isActive &&'btns_active'}`}>Education</NavLink>
            <NavLink to="/projects" className= {({ isActive }) =>`btns_size ${isActive &&'btns_active'}`} >Projects</NavLink>
            <NavLink to="/skills" className= {({ isActive }) =>`btns_size ${isActive &&'btns_active'}`} >Skills</NavLink>
        </div>
    </>)
 }
  export default Buttons