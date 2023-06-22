import { useState } from "react";
import PageBesoin from "./Formulaires/PageBesoin";
import PageComplementaire from "./Formulaires/PageComplementaire";
import PageContenu from "./Formulaires/PageContenu";
import PageResultat from "./Formulaires/PageResultat";
import { Link } from "react-router-dom";
import ProgressionBar from "../composants/ProgressionBar"
import flecheEtape from "../images/design/flecheEtape.svg"

export default function EtapeForm() {
  const [etape, setEtape] = useState(0);
  let retourText = etape === 0 ? <Link className="link" to="/"><p> Retour à l'accueil</p>  </Link> : <p> Retour à l'étape {etape}</p> ;
  
  let content;

  if (etape === 0) {
    content = <PageBesoin handleCallback={setEtape}/>;
  } else if (etape === 1) {
    content = <PageContenu/>;
  } else if (etape === 2) {
    content = <PageComplementaire/>;
  } else {
    content = <PageResultat/>;
  }

  function handleEtape()
  {
    if(etape>0)
    {
        setEtape(etape-1)
    }
    
    
  }

  return <main className="page-form">
    <header>
    <div className="header-text">
        <img src={flecheEtape} alt="fleche de design" />
    <h3 onClick={handleEtape}>{retourText}</h3>
    </div>
    <div>
        <ProgressionBar/>
    </div>
    </header>
        <div>
            {content}
        </div>
    </main>;
}