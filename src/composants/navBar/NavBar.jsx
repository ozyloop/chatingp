

import logo from "../../images/design/logoForma.png"
import { useState } from "react";
import "../../css/navbar.css"
export default function NavBar() {
 
  return (
    <nav>
      <div>
        <img src={logo}/>
      </div>
      <div className="liens-navbar">
        <ul >
            <li>Générer mes documents</li>
            <li>Notre solution</li>
            <li>Nos tutoriels</li>
        </ul>
      </div>
    </nav>
  );
}