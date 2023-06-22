
import "../../css/footer.css"
import logo from "../../images/design/logoForma.png"
import { useState } from "react";

export default function Footer() {
 
  return (
    <footer>
        <div className="container-info">
        <div>
        <img src={logo}/>
      </div>
      <div className="container-list-footer">
        <ul>
            <li>Générer mes documents</li>
            <li>Notre solution</li>
            <li>Nos tutoriels</li>
            <li>Mentions légales</li>
            <li>Politiques de confidentialité</li>
        </ul>
      </div>
        </div>
        <div className="container-copyright">
            <p>Copyright © 2023 formagora®. Tous droits réservés</p>
        </div>
      
    </footer>
  );
}