import React from 'react'
import {BrowserRouter, BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Home from './compontes/Pages/Home'
import Contato from './compontes/Pages/Contato'
import NovoProjeto from './compontes/Pages/NovoProjeto'
import Empresa from './compontes/Pages/Empresa'

/* importando layout */
import Container from './compontes/layout/Container'
import Navbar from './compontes/layout/Navbar'
import Footer from './compontes/layout/Footer'
import Projetos from './compontes/Pages/Projetos'
import Project from './compontes/Pages/Project'



const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
        

        <Container customClass="min-height">
            <Routes>
                <Route exact path ='/' element={<Home/>} ></Route>
                <Route exact path='/empresa' element={<Empresa />} />
                <Route exact path='/contato' element={<Contato/>} />
                <Route exact path='/novoprojeto' element={<NovoProjeto />} />      
                <Route exact path='/projetos' element={<Projetos></Projetos>} />
                <Route exact path='/project/:id' element={<Project/>} />   
           </Routes>
        </Container> 
        <Footer/>
    </BrowserRouter>

  )
}

export default App