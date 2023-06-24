import React from 'react'
import { useState, useEffect } from 'react'
import styles from './Mensagem.module.css'


const Mensagem = ({type,msg}) => {
    const [visible, setVisible]= useState(false)
/* USAR O USE EFFECT PARA FAZER O TIMER */

// se não tiver mensagem visible (false) e tiver msg visible (true)
    useEffect(() => {
        if(!msg){
            setVisible(false)
            return
        }
        setVisible(true)
        const timer = setTimeout(()=>{
            setVisible(false)
        },3000)

        return() => clearTimeout(timer)
    },[msg])
  return (
    <>
        {visible &&(
            <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
        )}
    </>
  )
}

export default Mensagem