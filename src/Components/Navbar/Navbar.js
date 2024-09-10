import React, {useState} from "react";
import "./Navbar.css"
import Logo from "../Assets/gg3.png"
import { BsSearch } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from 'react-router-dom';


export default function Navbar(){
    const [menu, setMenu] = useState("home");
    return (
        <div className="navbar">
            <div className="nav-logo">
            <img src={Logo} className="logo" alt="Store Logo"/> 
            </div>
            <div className="nav">
            <div className="nav-search"><BsSearch className="search" /></div>
           
            <ul className="nav-menu">
            <li onClick={() =>{setMenu ("home")}}><Link style={{textDecoration : 'none'}} to="/">Home</Link> {menu==="home"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu ("products")}}><Link style={{textDecoration : 'none'}} to="/products">Products</Link> {menu==="products"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu ("abouts")}}> <Link style={{textDecoration : 'none'}} to="/about">About</Link> {menu==="abouts"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu ("careers")}}> <Link style={{textDecoration : 'none'}} to="/careers">Careers</Link> {menu==="careers"?<hr/>:<></>}</li>
            <li onClick={() =>{setMenu ("contacts")}}> <Link style={{textDecoration : 'none'}} to="/contact">Contact</Link> {menu==="contacts"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link style={{textDecoration : 'none'}} to="/login"><IoPersonOutline className="login"/></Link> 
                <Link style={{textDecoration : 'none'}} to="/cart"><GiShoppingBag className="shopping"/></Link>
                <div className="nav-cart-count">0</div>
            </div>
            </div>
           </div>
        
    )
};