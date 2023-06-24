import { useEffect, useState } from 'react'

import React from 'react'
import styles from './ProjetoForm.module.css'
import Input from '../form/Input.js'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'


const ProjetoForm = ({ handleSubmit, btnText, projectData }) => {

  const [categories,setCategories]=useState([])
  const [project, setProject] = useState(projectData || {})
  useEffect(() => {

    
    fetch('http://localhost:5000/categories', {
      method: 'GET',
      headers: {
        'content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data)
      })
      .catch((err)=> console.log(err))
  }, [])

  const Submit = (e) => {
    e.preventDefault()
    //console.log(project)
  handleSubmit(project)
  }
    function handleChange(e) {
    setProject({ ...project, [e.target.name]:e.target.value })
    
  }
  function handleCategory(e) {
    setProject({ ...project, category:{
    id: e.target.value,
    name: e.target.options[e.target.selectedIndex].text,
    },
  })
    
  }

  
  return (
    <form  onSubmit={Submit} className={styles.form}>
        <Input 
        type='text'
        text='Nome do projeto'
        name='name'
        placeholder='Insira o nome do projeto'
        handleOnChange={handleChange}
        value={project.name ? project.name: ''}
        />
         <Input 
        type='number'
        text="Total orçamento"
        name='budget'
        placeholder='Insira o Orçamento Total'
        handleOnChange={handleChange}
        value={project.budget ? project.budget :'' }/>
       
        
      <Select
      name='category_id'
      text='Selecione a categoria '
      options={categories}
      handleOnChange={handleCategory}
      value={project.category ? project.category.id : ''}
      />
      <SubmitButton text={btnText}/>
        
    </form>
  )
}

export default ProjetoForm