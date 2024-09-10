import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Products from "./Pages/Product";
import SkinCare from "./Pages/SkinCare";
import HairProduct from "./Pages/HairProducts";
import About from "./Pages/About";
import Careers from "./Pages/Careers";
import Contact from "./Pages/Contact";
import Search from "./Pages/Search";
import Loginsignup from "./Pages/Loginsignup";
import Cart from "./Pages/Cart";
import ApplicationForm from "./Pages/ApplicationForm"; 
import Footer from './Components/Footer/Footer'; 


function App() {
  return (
    <div>
      <BrowserRouter>
      
     <Navbar />
     <Routes>
      <Route path='/search' element={<Search/>}/>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<Products />} />
      <Route path='/skinCare' element={<SkinCare />} />
      <Route path='/hairproduct' element={<HairProduct />} />
      <Route path='/about' element={<About />} />
      <Route path='/careers' element={<Careers />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/application-form' element={<ApplicationForm />} />
      <Route path='/login' element={<Loginsignup/>} />
      <Route path='/cart' element={<Cart/>} />
     </Routes>
     <Footer /> 
     </BrowserRouter>
    </div>
  );
}

export default App;
