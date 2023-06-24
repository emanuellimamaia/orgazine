import React from 'react'
import { Link } from 'react-router-dom'

import Container from './Container'

import styles from './Navbar.module.css'
//import logo from '../../img/costs_logo.png'
import logoOrganize from '../../img/moeda.PNG'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <Container>
            <Link to='/'>
                <img src={logoOrganize}alt="costs" />
            </Link>
           <ul className={styles.list}>
            <li className={styles.item}>
            <Link to='/' >Home</Link >
            </li>
            <li className={styles.item}>
            <Link to='contato' >Contato</Link>
            </li>
            <li className={styles.item}>
            <Link to='empresa'>Empresa</Link>
            </li>
            <li className={styles.item}>
            <Link to='novoprojeto'>Novo Projeto</Link>
            </li>
            <li className={styles.item}>
            <Link to ='projetos'> Projetos</Link>
            </li>
           </ul>
        
        </Container>
    </nav>
  )
}

export default Navbar