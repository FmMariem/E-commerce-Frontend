import React,{useState,useEffect} from 'react'
import axios from "axios";
import Articlecard from './Articlecard';


const Listarticlecard = () => {
    const [articles, setarticles] = useState([])
    useEffect(() => {
        loadarticles();
    }, []);
    const loadarticles = async() => {
        try {
            await axios.get("http://localhost:3001/api/articles").then((res) =>
            setarticles(res.data)
        )} catch (error) {
            console.log(error)
        }
    }

  return (
    <div className="container">
    <div style={{"display":"flex","flexWrap":"wrap","justifyContent":"left"}}>
    {
    articles.map((art) => (
        <Articlecard art={art} /> 
    ))}
</div>
</div>
  )
}

export default Listarticlecard
