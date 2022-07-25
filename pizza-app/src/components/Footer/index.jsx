import React from 'react'
import "./index.css";
 import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
    <p className="footer-p">&copy;Pizza is Italy. All Rights Reserved</p>
   <ul className="nav-language">
     <li className="items-language"><Link to="##">IT</Link></li>
     <li className="items-language"><Link to="##">EN</Link></li>
     <li className="items-language"><Link to="##">BG</Link></li>
   </ul>
   
  </section>
  )
}

export default Footer;