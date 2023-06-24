import { useNavigate} from 'react-router-dom'
import React from 'react'
import ProjetoForm from '../Projetos/ProjetoForm'
import styles from './NovoProjetos.module.css'


const NovoProjeto = ({}) => {
  const Navigante = useNavigate()

  function createPost(project){
    /* iniciar o organize and service  */

    project.cost = 0
    project.services = []

    fetch('http://localhost:5000/projects',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
        body:JSON.stringify(project),
    })
      .then(resp => resp.json())
      .then((data) => {console.log(data)})
      .catch(err => console.log(err))
      .then((data) => {
        Navigante('/projetos',{state: { message: "Projeto criado com sucesso!" }})
      })
      // redirect 
  }
  
  return (
    <div className={styles.novoprojetos_container}>
      <h1>Criar seus projetos</h1>
      <p>criar o projeto para depois adicionar os serviços</p>

      <ProjetoForm handleSubmit={createPost} btnText='Criar projeto'/>
    </div>
    
  )
}

export default NovoProjeto