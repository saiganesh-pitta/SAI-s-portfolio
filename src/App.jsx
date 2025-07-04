import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Loading from './components/loading'
import { useEffect, useState } from 'react'
import Buttons from './components/Buttons'
import Info from './components/Info'
import Edu from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'


function App() {

  const [loader, setLoader] = useState(true)

   setTimeout(() => {
      setLoader(false)
     }, 5000);
     
   if(loader){
     return <div className='bg' ><Loading></Loading></div>
  }{return<>
     <Navbar></Navbar>
      <div className="bg_cont" >
         <Buttons></Buttons>
         <Routes>
             <Route path='/'  element={<Info/>}  /> 
             <Route path='/education'  element={<Edu/>}  /> 
             <Route path='/projects' element={<Projects/>} /> 
             <Route path='/skills' element={<Skills/>} /> 
         </Routes>
      </div>
   
    </>
  
 }
  
}


export default App
