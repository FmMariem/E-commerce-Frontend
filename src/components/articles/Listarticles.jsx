import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

const Listarticles = () => {
  const[articles, setarticles]=useState([])
  useEffect(() => {
    loadarticles();
    }, []);

  const loadarticles = async() =>{
    try {
      const res = await axios.get("http://localhost:3001/api/articles");
      setarticles(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async(id) => {
    try {
    
      if(window.confirm("Supprimer Article")){

      await axios.delete(`http://localhost:3001/api/articles/${id}`)
      loadarticles()
    }
    } catch (error) {
      console.log(error)
    }
  }



  return (

    <div >
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary"> 
      <div className="container-fluid"> 
      <Link className="btn btn-outline-light" to="/addarticle"> <i className="fa-solid fa-plus"></i> Ajouter Article </Link> 
      </div> 
      </nav>
      </div>
    <Table striped bordered hover>
    <thead className='text-center'>
      <tr>
        <th>Image</th>
        <th>Référence</th>
        <th>Désignation</th>
        <th>Marque</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody className='text-center align-middle'>
      { articles.map((art,index)=>
      <tr key={index}>
        <td><img src={art.imageart} width={80} height={80}/></td>
        <td>{art.reference}</td>
        <td>{art.designation}</td>
        <td>{art.marque}</td>
        <td>{art.qtestock}</td>
        <td>{art.prix}</td>
        <td>
      <Link className="btn btn-primary mx-2" to={`/viewarticle/${art._id}`} > <i className="fa-regular fa-eye fa-sm"></i></Link> 
      <Link className="btn btn-warning mx-2" to={`/editarticle/${art._id}`} > <i className="fa-solid fa-pen-to-square"></i> </Link>
     &nbsp; 
      <Button variant="danger" onClick={() => handleDelete(art._id)}><i className="fa-solid fa-trash"></i></Button></td>
      </tr>
     )}
    </tbody>
  </Table>
  </div>
  )
}

export default Listarticles
