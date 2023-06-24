import React from 'react'
import carregando from '../../img/carregando.svg'

const Loading = () => {
  return (
    <div className={StyleSheet.loader_container}>
        <img  className={StyleSheet.loader} src={carregando} alt="" />
    </div>

  )
}

export default Loading