import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Cardarticle from './Cardarticle'


const Viewarticle = () => {
  const [article,setarticle]=useState({})

  const{id}=useParams()
useEffect(() =>{
loadarticle()
},[])
  const loadarticle=async() => {
    try {
      const res=await axios.get(`http://localhost:3001/api/articles/${id}`)
      setarticle(res.data);
      console.log(res.data);
    } catch (error) {
      
    }
  }
  return (
    <div>
    <Cardarticle article={article} /> 
    </div>
  )
}

export default Viewarticle
