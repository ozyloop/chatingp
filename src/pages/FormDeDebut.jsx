import ListeChoix from "../composants/ObjectifFormComposants/ListeChoix"
import AjoutChoix from "../composants/ObjectifFormComposants/AjoutChoix"
import React, { useState } from "react";
import CarteAjoutChoix from "../composants/ObjectifFormComposants/CarteAjoutChoix";

import TextfieldObjectifFormation from "../composants/ObjectifFormComposants/TextfieldObjectifFormation";
import Niveau from "../composants/ObjectifFormComposants/Niveau";

import {postClient} from "../lib"
import { Axios } from "../config";
import { useEffect } from "react";
import "../css/form.css"

export default function FormDeDebut() {
    const [titre, setTitre] = useState("");
    const [themes, setThemes] = useState("");
    const [objectifs, setObjectifs] = useState("");
    const [quizz, setQuizz] = useState("");
    const [competences, setCompetences] = useState("");
    const [cours, setCours] = useState("");
    const [niveau, setNiveau] = useState("");
    const [reponse, setReponse] = useState("");
    var generatedMessage= null;

    function inputTitre(e) {
      var lowerCase = e.target.value.toLowerCase();
      setTitre(lowerCase);
    }
  function inputThemes(e) {
    var lowerCase = e.target.value.toLowerCase();
    setThemes(lowerCase);
  }
  function inputObjectifs(e) {
    var lowerCase = e.target.value.toLowerCase();
    setObjectifs(lowerCase);
  }
  function inputQuizz(e) {
    var lowerCase = e.target.value.toLowerCase();
    setQuizz(lowerCase);
  }
  function inputCompetences(e) {
    var lowerCase = e.target.value.toLowerCase();
    setCompetences(lowerCase);
  }
  function inputCours(e) {
    var lowerCase = e.target.value.toLowerCase();
    setCours(lowerCase);
  }
  function getNiveau(childData) {
    setNiveau(childData)

}

function handleSubmit(e) {
  e.preventDefault(); // Prevent form submission and page refresh
}
const SubmitData = async () => {
  console.log("IN");
  if (titre === "" || themes === "" || objectifs === "" || quizz === "" || competences === "" || cours === "") {
    // Handle empty fields
    return;
  } else {
    const postData = {
      titre: titre,
      themes: themes,
      objectifs: objectifs,
      quizz: quizz,
      competences: competences,
      cours: cours,
      niveau: niveau,
    };

    console.log(postData);

    console.log("Fetching");
    postClient(postData, setReponse);
    console.log("reponse") // Assign the entire response object to the state
    console.log(reponse)
    
    
     // Assign the entire response object to the state

    // Access specific fields from the response
    
  }
};
          

    return <div className="page">
        <h1>Objectif de formation</h1>
        <form className="formulaire" onSubmit={handleSubmit}>
        <input onChange={inputTitre} className="form-textbox" type="text" placeholder="Ecrivez un titre de formation"/>

        <textarea onChange={inputThemes} className="form-textbox" type="text" placeholder="Ecrivez vos thèmes à aborder"/>
        <textarea  onChange={inputObjectifs} className="form-textbox" type="text" placeholder="Ecrivez vos objectifs"/>
        
        <textarea  onChange={inputQuizz} className="form-textbox" type="text" placeholder="Ecrivez le quizz de pré-formations"/>
        <textarea  onChange={inputCompetences} className="form-textbox" type="text" placeholder="Donnez nous vos compétences en lien avec la formation"/>  
        <textarea  onChange={inputCours} className="form-textbox" type="text" placeholder="Ecrivez le sommaire de vos cours"/>
        <Niveau handleCallBack={getNiveau}/>
        <input type="submit" className="submit-boutton" onClick={SubmitData}/>
        </form >
        <p>{reponse}</p>



      
    </div>
}

/*mettre les props dans le tag croix method, list, var*/