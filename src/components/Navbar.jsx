import { Link } from "react-router-dom"; 
import "./Navbar.css";
 export default function Navbar(){ 
  return ( 
  <nav className="navbar"> 
  <h2>Multi-Utility WEB APPlication</h2> 
  <Link to="/">Home</Link>
   </nav> 
   );
 }