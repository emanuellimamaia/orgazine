import React, { useEffect, useState } from 'react'
import Mensagem from '../layout/Mensagem'
import { useLocation } from 'react-router-dom'
import Container from '../layout/Container'

import ProjetoCard from '../Projetos/ProjetoCard'
import styles from './Projetos.module.css'
import LinkButton from '../layout/LinkButton'
import Loading from '../layout/Loading'


const Projetos = () => {
  const [projects, setProjetcs] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)
  const [projetctMessage, setProjectMessage] = useState('')

  const location = useLocation()
  let message = ''
  if (location.state) {
    message = location.state.message
  }

  useEffect(() => {
    fetch('http://localhost:5000/projects', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then(resp => resp.json())
      .then(data => {
        console.log(data)
        setProjetcs(data)
        setRemoveLoading(true)
      })
      .catch(err => console.log(err))
  }, [])

  function removeProject(id) {

    fetch(`http://localhost:5000/projects/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
    }).then(resp => resp.json())
      .then(()=> {
        setProjetcs(projects.filter((project) => project.id !== id))
        //mensagem de remoção 
        setProjectMessage('Projeto removido com sucesso!')
      })
      .catch(err => console.log(err))
  }
  return (
    <div className={styles.project_container}>
      <div className={styles.title_container}>
        <h1>Meus Projetos</h1>
        <LinkButton to='/novoprojeto' text='Criar Projetos'></LinkButton>
      </div>
      {message && <Mensagem type="success" msg={message} />}
      {projetctMessage && <Mensagem type="success" msg={projetctMessage} />}
      <Container customClass="start">
        
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjetoCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
              handleRemove={removeProject}
            />
          ))}
        {!removeLoading && <Loading />}
        {removeLoading && projects.length === 0 && (
          <p>NÃO HÁ PROJETOS CADASTRADOS !</p>
        )}
      </Container>

    </div>
  )
}

export default Projetos