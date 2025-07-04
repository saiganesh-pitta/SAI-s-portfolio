import { useState } from 'react';
import './Projects.css';
import pic from "../assets/img10.png"
import pic2 from "../assets/img11.png"
import pic3 from "../assets/img15.png"
import pic4 from "../assets/img12.png"
import pic5 from "../assets/img13.png"
import pic6 from "../assets/img14.png"

 const Projects=()=>{

    const [data,setData]  = useState([
        {
        link:"https://saimusic.netlify.app/",
        title:"RESPONSIVE MUSIC WEBAPP",
        body:"Developed a fully responsive music web application featuring created playlists with full media playback functionality including play, pause, next, and previous track controls.",
        lang:"HTML,CSS and JAVASCRIPT",
        url:`${pic}`
    },
     {
        link:"https://saiganesh-pitta.github.io/SAIshoes.in/",
        title:"SHOE SHOPPING WEBSITE",
        body:"Designed and developed a fully responsive static website for a fictional shoe store using HTML and CSS.",
        lang:"HTML, CSS and JAVASCRIPT",
        url:`${pic2}`
    },
    {
        link:"https://media-sharing.netlify.app/",
        title:"MEDIA SHARING PLATFORM",
        body:"Post creation with real-time UI updates.Like functionality to interact with posts. Delete option to remove unwanted posts.Fetch posts from a dummy REST API and render dynamically using React state management.",
        lang:"REACT JS, BOOTSTRAP, CSS, RESTFUL API",
        url:`${pic3}`
    },
    {
        link:"https://saiganesh-pitta.github.io/Currency-Converter/",
        title:"CURRENCY- CONVERTER WEB APP",
        body:"Developed a responsive web application to convert currencies using real-time exchange rates from a third-party API Integrated external RESTful API to fetch and display live currency exchange data.",
        lang:"HTML, CSS, JAVASCRIPT, RESTFUL API",
        url:`${pic4}`
    },
    {
        link:"https://saiganesh-pitta.github.io/To.DoList/",
        title:"TO-DO LIST WEBAPP",
        body:"Built a responsive To-Do List web app using HTML, CSS, and JavaScript with task management, mark-as-complete, and Dark Mode toggle.Added smooth transitions between light and dark themes and used localStorage to persist tasks and user preferences.",
        url:`${pic5}`
    },
    {
        link:"https://saiganesh-pitta.github.io/tic-tac-toe/",
        title:"TIC-TAC-TOE GAME",
        body:"Developed a browser-based Tic Tac Toe game using JavaScript logic to handle player turns, win conditions, and game resets.",
        url:`${pic6}`
    },
])

    return (<>
      <div className="project_cont" >
            <div className='project_cont2' >
                {data.map( (items)=>(
                <a href={items.link} target="_blank" className='line' ><div className='project_details'>
                        <div> 
                         <h3 className='color_title' >{items.title}</h3>
                         <p>{items.body}</p><br/>
                         <p>{items.lang}</p>
                        </div>
                        <div>
                               <img className='project_img' src={items.url}  />
{/*                           <div className='project_img' style={{backgroundImage: "url(/src/assets/img10.png)"}} >
                            </div> */}
                        </div>
                </div></a>))}
            </div>
      </div>
    </>)
 }
  export default Projects;
