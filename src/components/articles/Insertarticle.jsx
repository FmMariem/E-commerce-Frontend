import React,{useState,useEffect} from 'react'
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import { useNavigate } from 'react-router-dom';



const Insertarticle = () => {
  const navigate = useNavigate()

  const[reference,setReference]=useState("")
  const [designation,setDesignation] = useState("")
  const [imageart,setImageart] = useState("")
  const [prix,setPrix] = useState(0)
  const [qtestock,setQtestock] = useState(0)
  const [marque,setMarque] = useState("")
  const [scategorieID,setScategorieID] = useState("")

  //load scategorie
  const [scategories,setScategories] = useState([]);
  const loadscategories = async() =>{
    try {
      const res = await axios.get("http://localhost:3001/api/scategories");
      setScategories(res.data)

    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    loadscategories();
    }, []);

    const handlesubmit= async(e)=> {
      e.preventDefault()
      const article = {
        reference:reference,
        designation:designation,
        imageart:imageart,
        prix:prix,
        qtestock:qtestock,
        marque:marque,
        scategorieID:scategorieID
      }
      try {
        const res=await axios.post("http://localhost:3001/api/articles",article)
        console.log(res.data)
        navigate("/articles")
        
      } catch (error) {
        console.log(error)
      }
    }
     const handlenavigate=()=>{
      navigate("/articles")
     }

  return (
    <div className='container'>
      <div className='col-md-6 shadow offset-md-3 border rounded p-4 mt-3'>
      <h4 align="center">Ajout Article</h4>
      
      <Form className='mt-3' >
      <Row className="mb-2 mt-3">
      <Form.Group as={Col} md="6">
       <Form.Label>Référence *</Form.Label>
        <Form.Control 
        required 
        type="text" 
        placeholder="Référence" 
        value={reference} 
        onChange={(e)=>setReference(e.target.value)} 
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
      <Form.Label>Désignation *</Form.Label>
        <Form.Control 
        required 
        type="text" 
        placeholder="Désignation" 
        value={designation} 
        onChange={(e)=>setDesignation(e.target.value)} 
        />
      </Form.Group>
      </Row>

      <Row className="mb-2 mt-3">
      <Form.Group as={Col} md="6">
      <Form.Label>Marque *</Form.Label>
        <Form.Control 
        required 
        type="text" 
        placeholder="Marque" 
        value={marque} 
        onChange={(e)=>setMarque(e.target.value)} 
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
      <Form.Label>Catégorie *</Form.Label>
      <Form.Select 
      value={scategorieID}
      onChange={(e)=>setScategorieID(e.target.value)}>
        <option>Sélectionner une catégorie</option>
       { scategories.map((cat,index)=>
       <option key={index} value={cat._id}>{cat.nomscategorie}</option>

      )}
    </Form.Select>

      </Form.Group>
      </Row>

      <Row className="mb-2 mt-3">
      <Form.Group as={Col} md="6">
      <Form.Label>Prix</Form.Label>
        <Form.Control 
        required 
        type="number" 
       
        value={prix} 
        onChange={(e)=>setPrix(e.target.value)} 
        />
      </Form.Group>
      <Form.Group as={Col} md="6">
      <Form.Label>Quantité en stock *</Form.Label>
        <Form.Control 
        required 
        type="number" 
        
        value={qtestock} 
        onChange={(e)=>setQtestock(e.target.value)} 
        />
      </Form.Group>
      </Row>
      <Row className="mb-2 mt-3">
      <Form.Group>
      <Form.Label>Image *</Form.Label>
      <Form.Control 
        required 
        type="text" 
        placeholder="Image" 
        value={imageart} 
        onChange={(e)=>setImageart(e.target.value)} 
        />
       
      </Form.Group>
      
      </Row>
      <Row>
        <div className='text-center mt-3'>
      <Button   className='mx-2' as={Col} md="3" onClick={(e)=>handlesubmit(e)} variant="outline-success btn-sm">Enregistrer</Button>
      <Button  className='mx-2' as={Col} md="3" onClick={()=>handlenavigate()} variant="outline-warning btn-sm">Annuler</Button>
      </div>
      </Row>

      

    </Form>
    </div>
    </div>
  )
}

export default Insertarticle
