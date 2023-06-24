import React from 'react'
import styles from './Home.module.css'
import organize from '../../img/organize_logo-removebg-preview.png'
//import saving from '../../img/poupança.svg'
import LinkButton from '../layout/LinkButton'

const Home = () => {
  return (

    <section className={styles.home_container}>
      <h1>Bem-vindo ao <span>Orgazine</span></h1>
      <p>Comece a gerenciar seus projetos agora mesmo!</p>
      <LinkButton  to='./novoprojeto' text='Criar Projetos'></LinkButton>
      <img src={organize} alt="" />
    </section>
  )
}

export default Home