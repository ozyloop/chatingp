import ListeChoix from "../composants/ObjectifFormComposants/ListeChoix"
import AjoutChoix from "../composants/ObjectifFormComposants/AjoutChoix"
import React, { useState } from "react";
import CarteAjoutChoix from "../composants/ObjectifFormComposants/CarteAjoutChoix";

import TextfieldObjectifFormation from "../composants/ObjectifFormComposants/TextfieldObjectifFormation";
import Niveau from "../composants/ObjectifFormComposants/Niveau";
import Croix from "../composants/ObjectifFormComposants/Croix";

export default function ObjectifFormation() {
    const [ajout, setAjout] = useState([]);
    const [formation, setFormation] = useState([]);
    const [thematique, setThematique] = useState([]);

    function getAjout(childData) {
        if (!ajout.includes(childData)) {
            setAjout([...formation, childData]);
          } 
    }

    function getFormation(childData) {
        if (!formation.includes(childData)) {
            setFormation([...formation, childData]);
          } 
    }

    function getThematique(childData) {
        if (!thematique.includes(childData)) {
            setThematique([...thematique, childData]);
          } 
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent form submission and page refresh
      }

      
    return <div className="page">
        <h1>Objectif de formation</h1>
        <form onSubmit={handleSubmit}>
        <input  className="contact-textbox" type="text" placeholder="Ecrivez vos thèmes à aborder"/>
       <TextfieldObjectifFormation handleCallBack={getThematique}/>
        <TextfieldObjectifFormation handleCallBack={getFormation}/>
        
        <Niveau/>
        <ListeChoix/>
        <AjoutChoix handleCallBack={getAjout}/>
        
        
        </form >
        <ul className="list-card-annuaire">
        <li className="card-li">
          <CarteAjoutChoix text="Oui" />
        </li>
        <li className="card-li">
          <CarteAjoutChoix text="Non" />
        </li>
        {ajout.map((ajouts, index) => (
          <li className="card-li" key={index}>
            <CarteAjoutChoix text={ajouts} />
            <Croix method={setAjout} list={ajout} var={ajouts}/>
          </li>
        ))}
      </ul>
      <ul>
      {formation.map((formations, index) => (
          <li className="card-li" key={index}>
            {formations} 
            <Croix method={setFormation} list={formation} var={formations}/>

          </li>
        ))}
      </ul>
      <ul>
      {thematique.map((thematiques, index) => (
          <li className="card-li" key={index}>
            {thematiques}
            <Croix method={setThematique} list={thematique} var={thematiques}/>

          </li>
        ))}
      </ul>

      
    </div>
}

/*mettre les props dans le tag croix method, list, var*/