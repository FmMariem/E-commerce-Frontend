import "@fortawesome/fontawesome-free/css/all.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Listarticles from "./components/articles/Listarticles";
import Listcategories from "./components/categories/Listcategories";
import Listscategories from "./components/scategories/Listscategories";
import Editarticle from "./components/articles/Editarticle";
import Cardarticle from "./components/articles/Cardarticle";
import Editcategorie from "./components/categories/Editcategorie";
import Editscategorie from "./components/scategories/Editscategorie";
import Insertarticle from "./components/articles/Insertarticle";
import Insertcategorie from "./components/categories/Insertcategorie";
import Insertscategorie from "./components/scategories/Insertscategorie";
import Viewarticle from "./components/articles/Viewarticle";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/Viewscategorie";
import Menu from "./components/Menu";
import Cardscategorie from "./components/scategories/Cardscategorie";
import Cardcategorie from "./components/categories/Cardcategorie";
import Listarticlecard from "./components/articles/Listarticlecard";

function App() {
 

  return (
    <>

    <Router>
    <Menu/>
      <Routes>
        <Route path="/articles" element={<Listarticles/>}/>
        <Route path="/addarticle" element={<Insertarticle/>}/>
        <Route path="/viewarticle/:id" element={<Viewarticle/>}/>
        <Route path="/editarticle/:id" element={<Editarticle/>}/>
        <Route path="/cardarticle" element={<Cardarticle/>}/>
        <Route path="/listarticlescard" element={<Listarticlecard/>}/>
       

        <Route path="/categories" element={<Listcategories/>}/>
        <Route path="/addcategorie" element={<Insertcategorie/>}/>
        <Route path="/viewcategorie/:id" element={<Viewcategorie/>}/>
        <Route path="/editcategorie/:id" element={<Editcategorie/>}/>
        <Route path="/cardcategorie" element={<Cardcategorie/>}/>
        

        <Route path="/scategories" element={<Listscategories/>}/>
        <Route path="/addscategorie" element={<Insertscategorie/>}/>
        <Route path="/viewscategorie/:id" element={<Viewscategorie/>}/>
        <Route path="/editscategorie/:id" element={<Editscategorie/>}/>
        <Route path="/cardscategorie" element={<Cardscategorie/>}/>
       
        
      </Routes>
    </Router>
   
    </>
  )
}

export default App
