
import ListeCartes from "../composants/accueilComposants/ListeCartes"

import horloge from "../images/design/horloge.svg"
import "../css/accueil.css"
import { Link } from "react-router-dom";

export default function Accueil() {

    return <main className="page-accueil">
        <div className="intro">
        <h4>Formagora vous accompagne</h4>
        </div>
        <div className="titre-accueil">
        <h1>Créez vos documents de formation <span className="color-text">facilement et rapidement</span></h1>
        </div>
        <div className="text-explicatif">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ante quam, malesuada ullamcorper vulputate ut, gravida ac odio. Aliquam ullamcorper, nisi quis sollicitudin auctor, eros lorem suscipit orci, id pharetra risus tellus sed elit.  Eros lorem suscipit orci, id pharetra risus tellus sed elit. </p>
        </div>
        <Link className="link" to="EtapeForm">
            <button className="boutton-generer">Générer mes documents</button>
        </Link>
        
        <div className="horloge">
            <img src={horloge}/>
            <p>5 minutes</p>
        </div>
        <iframe width="1280" height="745" src="https://www.youtube.com/embed/8wwsW6oycKg" title="Les solutions de formation - formagora" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <div className="aide-text">
            <p>Besoin d'un coup de main ?</p>
        </div>
        <div className="container-h2">
        <h2>Parce qu'on sait que ce n'est pas la meilleure partie, formagora vous simplifie la vie</h2>
        </div>
        <ListeCartes/>
        <button className="boutton-generer">Générer mes documents</button>
        
    </main>
}