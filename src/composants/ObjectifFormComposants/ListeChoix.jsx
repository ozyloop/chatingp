import { useState } from "react";


export default function ListeChoix() {
    const [coche, setCoche] = useState(["connaissance"]);

    function addButton(event) {
        const selectedOption = event.target.value;
        if (coche.includes(selectedOption)) {
          setCoche(coche.filter((option) => option !== selectedOption));
        } else {
          setCoche([...coche, selectedOption]);
        }
      }
    


    return <div><h2>Quels est le niveau moyen des apprenants</h2>
<select multiple={true} value={coche} onChange={addButton}>
    <option value="connaissance">connaissance</option>
        <option value="compréhension">compréhension</option>
        <option value="application">application</option>
        <option value="analyse">analyse</option>
        <option value="évaluation">évaluation</option>
        <option  value="synthèse&création">synthèse & création</option>
    </select>
    </div>
    
}

