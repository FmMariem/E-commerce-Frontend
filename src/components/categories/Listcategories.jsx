import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";


const Listcategories = () => {

  const [categories, setcategories] = useState([])
  useEffect(() => {
    loadcategories();
  }, []);


  const loadcategories = async () => {
    try {
      const res = await axios.get("http://localhost:3001/api/categories");
      setcategories(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDelete = async (id) => {
    try {

      if (window.confirm("Supprimer Categorie")) {

        await axios.delete(`http://localhost:3001/api/categories/${id}`)
        loadcategories()
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="container-fluid">
            <Link className="btn btn-outline-light" to="/addcategorie"> <i className="fa-solid fa-plus"></i> Ajouter Categorie </Link>
          </div>
        </nav>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className='text-center align-middle'>
          {categories.map((cat, index) =>
            <tr key={index}>
              <td>{cat.nomcategorie}</td>
              <td><img src={cat.imagecategorie} width={80} height={80} /></td>
              <td>
                <Link className="btn btn-primary mx-2" to={`/viewcategorie/${cat._id}`} > <i className="fa-regular fa-eye fa-sm"></i></Link>
                <Link className="btn btn-warning mx-2" to={`/editcategorie/${cat._id}`} > <i className="fa-solid fa-pen-to-square"></i> </Link>
                &nbsp;
                <Button variant="danger" onClick={() => handleDelete(cat._id)}><i className="fa-solid fa-trash"></i></Button></td>
            </tr>
          )}
        </tbody>
      </Table>
    </div>
  )
}

export default Listcategories
